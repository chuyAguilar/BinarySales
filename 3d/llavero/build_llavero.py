"""Llavero BinarySales - isotipo (burbuja BS) 45mm, multicolor AMS.
Genera: cuerpo (azul), letra B (blanco), letra S (naranja) como STLs alineados.
"""
import numpy as np
import trimesh
from shapely.geometry import Polygon, Point, box
from shapely.ops import unary_union
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties

S = 0.375  # escala SVG(160) -> mm (bubble 120 -> 45mm)
BODY_H = 4.0     # grosor cuerpo
REL_H = 1.2      # relieve letras

def mm(x, y):
    return (x * S, (160 - y) * S)

# --- Cuerpo 2D: rect redondeado + cola + argolla ---
rx = 28 * S
x0, y0 = mm(20, 115)   # esquina inferior izq del rect
x1, y1 = mm(140, 15)   # esquina superior der
rect = box(x0 + rx, y0, x1 - rx, y1).union(box(x0, y0 + rx, x1, y1 - rx))
corners = [(x0 + rx, y0 + rx), (x1 - rx, y0 + rx), (x0 + rx, y1 - rx), (x1 - rx, y1 - rx)]
rounded = unary_union([rect] + [Point(c).buffer(rx, resolution=64) for c in corners])

tail = Polygon([mm(46, 115), mm(36, 141), mm(66, 115)])
# extender la cola 1mm hacia arriba para solape solido
tail = tail.union(Polygon([mm(46, 113), mm(66, 113), mm(66, 115), mm(46, 115)]))

# argolla superior centrada
cx = (x0 + x1) / 2
ring_c = (cx, y1 + 3.2)
ring = Point(ring_c).buffer(5.5, resolution=96).difference(Point(ring_c).buffer(2.25, resolution=96))

body2d = unary_union([rounded, tail, ring]).buffer(0)

# --- Letras: LiberationSans Bold (compatible Arial) ---
fp = FontProperties(fname="/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf")
tp = TextPath((0, 0), "BS", size=54 * S, prop=fp)
contours = [np.array(p) for p in tp.to_polygons() if len(p) > 2]

# clasificar contornos: exteriores vs agujeros
polys = [Polygon(c) for c in contours]
outers, holes = [], {i: [] for i in range(len(polys))}
for i, p in enumerate(polys):
    parent = None
    for j, q in enumerate(polys):
        if i != j and q.contains(p):
            parent = j
    if parent is None:
        outers.append(i)
    else:
        holes[parent].append(i)

letters = [Polygon(np.array(polys[i].exterior.coords),
                   [np.array(polys[h].exterior.coords) for h in holes[i]]) for i in outers]
letters.sort(key=lambda p: p.centroid.x)  # B primero, S despues
assert len(letters) == 2, f"esperaba 2 letras, hay {len(letters)}"

# posicionar: centro x = cx, baseline en y de SVG(87)
all_l = unary_union(letters)
bx0, by0, bx1, by1 = all_l.bounds
dx = cx - (bx0 + bx1) / 2
dy = mm(80, 87)[1]  # baseline
from shapely.affinity import translate
letra_B = translate(letters[0], dx, dy)
letra_S = translate(letters[1], dx, dy)

# --- Extrusion ---
def extrude(poly, h, z0=0.0):
    m = trimesh.creation.extrude_polygon(poly, height=h)
    m.apply_translation([0, 0, z0])
    return m

cuerpo = extrude(body2d, BODY_H)
# grabar letras 0.4mm en el cuerpo no: letras encima, de z=BODY_H a BODY_H+REL_H
mB = extrude(letra_B, REL_H, BODY_H)
mS = extrude(letra_S, REL_H, BODY_H)

out = "/sessions/friendly-bold-allen/mnt/outputs/"
cuerpo.export(out + "llavero-cuerpo-azul.stl")
mB.export(out + "llavero-letra-B-blanco.stl")
mS.export(out + "llavero-letra-S-naranja.stl")

for name, m in [("cuerpo", cuerpo), ("B", mB), ("S", mS)]:
    b = m.bounds
    print(f"{name}: manifold={m.is_watertight} dims={np.round(b[1]-b[0],2)} vol={m.volume:.0f}mm3")
print("total bounds:", np.round(np.vstack([cuerpo.bounds, mB.bounds, mS.bounds]).max(0) -
                               np.vstack([cuerpo.bounds, mB.bounds, mS.bounds]).min(0), 1))
