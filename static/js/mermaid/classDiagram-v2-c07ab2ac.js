import { p as R, d as N, s as B } from "./styles-aae272b4.js";
import { l as c, c as r, j as k, x as G, t as _, r as D, o as E, p as z, f as A } from "./mermaid-8ea29a40.js";
import { G as P } from "./layout-3ecfba7d.js";
import { r as $ } from "./index-e1d945fd.js";
import "./edges-b5d62f50.js";
import "./createText-f4a1d776.js";
import "./svgDraw-b2141e90.js";
import "./line-130fa1e5.js";
import "./array-2ff2c7a6.js";
import "./constant-2fe7eae5.js";
const S = (o) => A.sanitizeText(o, r());
let v = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
const q = function(o, t, p, n) {
  const e = Object.keys(o);
  c.info("keys:", e), c.info(o), e.forEach(function(s) {
    var y, d;
    const l = o[s], i = {
      shape: "rect",
      id: l.id,
      domId: l.domId,
      labelText: S(l.id),
      labelStyle: "",
      style: "fill: none; stroke: black",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = r().flowchart) == null ? void 0 : y.padding) ?? ((d = r().class) == null ? void 0 : d.padding)
    };
    t.setNode(l.id, i), I(l.classes, t, p, n, l.id), c.info("setNode", i);
  });
}, I = function(o, t, p, n, e) {
  const s = Object.keys(o);
  c.info("keys:", s), c.info(o), s.forEach(function(l) {
    var m, h;
    const a = o[l];
    let i = "";
    a.cssClasses.length > 0 && (i = i + " " + a.cssClasses.join(" "));
    const y = { labelStyle: "", style: "" }, d = a.label ?? a.id, f = 0, u = "class_box", b = {
      labelStyle: y.labelStyle,
      shape: u,
      labelText: S(d),
      classData: a,
      rx: f,
      ry: f,
      class: i,
      style: y.style,
      id: a.id,
      domId: a.domId,
      tooltip: n.db.getTooltip(a.id, e) || "",
      haveCallback: a.haveCallback,
      link: a.link,
      width: a.type === "group" ? 500 : void 0,
      type: a.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((m = r().flowchart) == null ? void 0 : m.padding) ?? ((h = r().class) == null ? void 0 : h.padding)
    };
    t.setNode(a.id, b), e && t.setParent(a.id, e), c.info("setNode", b);
  });
}, F = function(o, t, p, n) {
  c.info(o), o.forEach(function(e, s) {
    var h, x;
    const l = e, a = "", i = { labelStyle: "", style: "" }, y = l.text, d = 0, f = "note", u = {
      labelStyle: i.labelStyle,
      shape: f,
      labelText: S(y),
      noteData: l,
      rx: d,
      ry: d,
      class: a,
      style: i.style,
      id: l.id,
      domId: l.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((h = r().flowchart) == null ? void 0 : h.padding) ?? ((x = r().class) == null ? void 0 : x.padding)
    };
    if (t.setNode(l.id, u), c.info("setNode", u), !l.class || !(l.class in n))
      return;
    const b = p + s, m = {
      id: `edgeNote${b}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: D(v.curve, E)
    };
    t.setEdge(l.id, l.class, m, b);
  });
}, H = function(o, t) {
  const p = r().flowchart;
  let n = 0;
  o.forEach(function(e) {
    var l;
    n++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + n,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: C(e.relation.type1),
      arrowTypeEnd: C(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: D(p == null ? void 0 : p.curve, E)
    };
    if (c.info(s, e), e.style !== void 0) {
      const a = z(e.style);
      s.style = a.style, s.labelStyle = a.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((l = r().flowchart) == null ? void 0 : l.htmlLabels) ?? r().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(A.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), t.setEdge(e.id1, e.id2, s, n);
  });
}, V = function(o) {
  v = {
    ...v,
    ...o
  };
}, W = async function(o, t, p, n) {
  c.info("Drawing class - ", t);
  const e = r().flowchart ?? r().class, s = r().securityLevel;
  c.info("config:", e);
  const l = (e == null ? void 0 : e.nodeSpacing) ?? 50, a = (e == null ? void 0 : e.rankSpacing) ?? 50, i = new P({
    multigraph: !0,
    compound: !0
  }).setGraph({
    rankdir: n.db.getDirection(),
    nodesep: l,
    ranksep: a,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), y = n.db.getNamespaces(), d = n.db.getClasses(), f = n.db.getRelations(), u = n.db.getNotes();
  c.info(f), q(y, i, t, n), I(d, i, t, n), H(f, i), F(u, i, f.length + 1, d);
  let b;
  s === "sandbox" && (b = k("#i" + t));
  const m = s === "sandbox" ? (
    // @ts-ignore Ignore type error for now
    k(b.nodes()[0].contentDocument.body)
  ) : k("body"), h = m.select(`[id="${t}"]`), x = m.select("#" + t + " g");
  if (await $(
    x,
    i,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    t
  ), G.insertTitle(h, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, n.db.getDiagramTitle()), _(i, h, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const T = s === "sandbox" ? b.nodes()[0].contentDocument : document, M = T.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
    for (const w of M) {
      const L = w.getBBox(), g = T.createElementNS("http://www.w3.org/2000/svg", "rect");
      g.setAttribute("rx", 0), g.setAttribute("ry", 0), g.setAttribute("width", L.width), g.setAttribute("height", L.height), w.insertBefore(g, w.firstChild);
    }
  }
};
function C(o) {
  let t;
  switch (o) {
    case 0:
      t = "aggregation";
      break;
    case 1:
      t = "extension";
      break;
    case 2:
      t = "composition";
      break;
    case 3:
      t = "dependency";
      break;
    case 4:
      t = "lollipop";
      break;
    default:
      t = "none";
  }
  return t;
}
const J = {
  setConf: V,
  draw: W
}, se = {
  parser: R,
  db: N,
  renderer: J,
  styles: B,
  init: (o) => {
    o.class || (o.class = {}), o.class.arrowMarkerAbsolute = o.arrowMarkerAbsolute, N.clear();
  }
};
export {
  se as diagram
};
