// general procedure is to "wipe away" water from
// each side. This is a fun one.
//
// This is not the canonical solution. A monotonic
// stack is better I believe
function trap(heights: number[]): number {
  let maxHeight = 0;

  for (const h of heights) {
    if (h > maxHeight) {
      maxHeight = h;
    }
  }

  const buckets: number[] = [];
  for (const h of heights) {
    buckets.push(maxHeight - h);
  }

  let blockingHeight = 0;

  for (let i = 0; i < heights.length; i++) {
    const totalHeight = buckets[i] + heights[i];

    let diff = totalHeight - blockingHeight;
    buckets[i] -= diff;

    if (buckets[i] < 0) {
      buckets[i] = 0;
    }

    if (heights[i] > blockingHeight) {
      blockingHeight = heights[i];
    }
  }

  blockingHeight = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    const totalHeight = buckets[i] + heights[i];

    let diff = totalHeight - blockingHeight;

    if (diff < 0) {
      diff = 0;
    }

    buckets[i] -= diff;

    if (buckets[i] < 0) {
      buckets[i] = 0;
    }

    if (heights[i] > blockingHeight) {
      blockingHeight = heights[i];
    }
  }


  let total = 0;
  for (const b of buckets) {
    total += b;
  }
  return total;
};
