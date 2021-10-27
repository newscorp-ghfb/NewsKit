export const CANVAS_SIZE = 56;

const parseCubicBezier = (value: string) =>
  value
    .replace('cubic-bezier(', '')
    .replace(')', '')
    .split(',')
    .map(v => Number.parseFloat(v.trim()));

// NEXT 2 FUNCTIONS ARE COPIED FROM http://dbaron.org/css/timing-function-graphs
export function bezier(x1: number, y1: number, x2: number, y2: number) {
  // Cubic bezier with control points (0, 0), (x1, y1), (x2, y2), and (1, 1).
  function xForT(t: number) {
    const omt = 1 - t;
    return 3 * omt * omt * t * x1 + 3 * omt * t * t * x2 + t * t * t;
  }
  function yForT(t: number) {
    const omt = 1 - t;
    return 3 * omt * omt * t * y1 + 3 * omt * t * t * y2 + t * t * t;
  }
  function tForX(x: number) {
    // Binary subdivision.
    let mint = 0;
    let maxt = 1;
    for (let i = 0; i < 30; ++i) {
      const guesst = (mint + maxt) / 2;
      const guessx = xForT(guesst);
      if (x < guessx) maxt = guesst;
      else mint = guesst;
    }
    return (mint + maxt) / 2;
  }
  return function bezierClosure(x: number) {
    if (x === 0) return 0;
    if (x === 1) return 1;
    return yForT(tForX(x));
  };
}

export const updateCanvas = (
  ctx: CanvasRenderingContext2D,
  timingFn: string,
  color: string,
) => {
  let x1 = 0;
  let y1 = 0;
  let x2 = 0;
  let y2 = 0;
  switch (timingFn) {
    case 'ease':
      x1 = 0.25;
      y1 = 0.1;
      x2 = 0.25;
      y2 = 1.0;
      break;
    case 'linear':
      x1 = 0.0;
      y1 = 0.0;
      x2 = 1.0;
      y2 = 1.0;
      break;
    case 'ease-in':
      x1 = 0.42;
      y1 = 0.0;
      x2 = 1.0;
      y2 = 1.0;
      break;
    case 'ease-out':
      x1 = 0.0;
      y1 = 0.0;
      x2 = 0.58;
      y2 = 1.0;
      break;
    case 'ease-in-out':
      x1 = 0.42;
      y1 = 0.0;
      x2 = 0.58;
      y2 = 1.0;
      break;
    default:
      [x1, y1, x2, y2] = parseCubicBezier(timingFn);
      break;
  }

  const tf = bezier(x1, y1, x2, y2);

  const gCurrentTFPoints = [];

  for (let x = 0; x <= CANVAS_SIZE; ++x) {
    gCurrentTFPoints[x] = tf(x / CANVAS_SIZE) * CANVAS_SIZE;
  }

  ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  // Draw the graph
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, CANVAS_SIZE - gCurrentTFPoints[0]);
  for (let x = 1; x <= CANVAS_SIZE; ++x) {
    ctx.lineTo(x, CANVAS_SIZE - gCurrentTFPoints[x]);
  }
  ctx.stroke();
};

export const percentFrom = (total: number, value: number) =>
  Math.floor(value / (total / 100));

export const getTotalDuration = (stayDuration: number, maxDuration: number) =>
  2 * stayDuration + 2 * maxDuration;
