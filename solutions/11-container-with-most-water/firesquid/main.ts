function maxArea(height: number[]): number {
  let max = 0;

  let i = 0;
  let j = height.length - 1;

  while (j > i) {
    const area = (j - i) * Math.min(height[i], height[j]);

    if (area > max) {
      max = area;
    }

    if (height[j] > height[i]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}
