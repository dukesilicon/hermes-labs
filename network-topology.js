/* Bounded structural state shared by the Canvas renderer and offline tests. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.HermesTopology = factory();
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const random = n => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  const ease = t => { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); };
  function create(cells, links) {
    const baseline = links.length;
    let serial = baseline, time = 0, next = 10, event = null, sequence = 0;
    const counts = { redirects: 0, formations: 0, dissolutions: 0 };
    links.forEach((edge, id) => Object.assign(edge, { id, growth: 1, opacity: 1, retiring: false }));
    function connectedWithout(removed) {
      const visited = new Set([0]);
      for (let changed = true; changed;) {
        changed = false;
        for (const edge of links) {
          if (edge === removed) continue;
          if (visited.has(edge.a) && !visited.has(edge.b)) { visited.add(edge.b); changed = true; }
          if (visited.has(edge.b) && !visited.has(edge.a)) { visited.add(edge.a); changed = true; }
        }
      }
      return visited.size === cells.length;
    }
    function plan() {
      const seed = ++sequence;
      const start = Math.floor(random(seed) * links.length);
      if (seed % 2) {
        const edge = links[start];
        event = { type: 'redirect', edge, elapsed: 0, from: edge.bend, to: Math.max(-.19, Math.min(.19, edge.bend + (random(seed + 8) - .5) * .13)) };
        counts.redirects++;
        return;
      }
      for (let i = 0; i < links.length; i++) {
        const old = links[(start + i) % links.length];
        const owner = cells[old.a];
        const oldDistance = Math.hypot(owner.x - cells[old.b].x, owner.y - cells[old.b].y);
        const candidates = cells.filter(c => c.id !== old.a && c.id !== old.b &&
          !links.some(e => (e.a === old.a && e.b === c.id) || (e.b === old.a && e.a === c.id)) &&
          Math.hypot(c.x - owner.x, c.y - owner.y) < oldDistance * 1.6)
          .sort((a, b) => Math.hypot(a.x - owner.x, a.y - owner.y) - Math.hypot(b.x - owner.x, b.y - owner.y));
        for (const target of candidates) {
          const edge = { id: serial++, a: old.a, b: target.id, bend: (random(seed + target.id) - .5) * .26, growth: 0, opacity: 1, retiring: false };
          links.push(edge);
          if (!connectedWithout(old)) { links.pop(); continue; }
          old.retiring = true; // No new pulse enters it; existing pulses finish first.
          event = { type: 'replace', old, edge, elapsed: 0, fade: 0 };
          counts.formations++;
          return;
        }
      }
    }
    function update(dt, pulses) {
      time += dt;
      if (!event && time >= next) { plan(); if (!event) next = time + 15; }
      if (!event) return false;
      // Long frames may advance scheduling, but never jump a visible transition.
      const step = Math.min(dt, .05);
      event.elapsed += step;
      if (event.type === 'redirect') {
        event.edge.bend = event.from + (event.to - event.from) * ease(event.elapsed / 8);
        if (event.elapsed >= 8) complete();
      } else {
        event.edge.growth = ease(event.elapsed / 9);
        if (event.elapsed >= 9 && !pulses.some(p => p.edge === event.old)) {
          event.fade += step;
          event.old.opacity = 1 - ease(event.fade / 7);
          if (event.fade >= 7) {
            links.splice(links.indexOf(event.old), 1);
            counts.dissolutions++;
            complete();
          }
        }
      }
      return true;
    }
    function complete() { event = null; next = time + 12 + random(sequence + 71) * 10; }
    function settle() {
      // Reduced motion finishes one local change without scheduling another.
      if (event?.type === 'redirect') event.edge.bend = event.to;
      if (event?.type === 'replace') {
        event.edge.growth = 1;
        links.splice(links.indexOf(event.old), 1);
      }
      event = null; next = time + 15;
    }
    return { update, settle, get active() { return !!event; }, snapshot: () => ({ baseline, time, next, active: event?.type || null, counts: { ...counts } }) };
  }
  return { create };
});
