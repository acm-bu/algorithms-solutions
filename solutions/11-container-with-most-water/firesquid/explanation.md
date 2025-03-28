
This is another problem using the two pointers technique. See 125 Valid Palindrome if you're stuck on this one.

# Intuition
Let's first just think about how to calculate the capacity of any given `i`, `j` where `j` is the latter index. The width would of course just be difference between `j` and `i`, while we can see the height would be the *minimum* between `height[i]` and `height[j]`. Therefore we can state:

```
area = (j - i) * min(height[i], height[j]);
```

Our goal is to find the `i`, `j` such that this area is maximized;

# Brute Force

We can do a brute force solution by testing every possible `i`, `j` pair and finding the maximum:

```ts
function maxArea(height: number[]): number {
    let max = 0;
    // we only go to height.length - 1 since we don't need to test the
    // last one with itself
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let area = (j - i) * Math.min(height[i], height[j]);

            if (area > max) {
                max = area;
            }
        }
    }

    return max;
};
```

This will get us an accepted answer, but it's O(n^2). We can do better.


# Finding Something Better
What we would like is an algorithm in O(n) time. To do this we start by placing `i` and `j` at the first and last index. We then work inwards, only moving one index at a time. Since each move will have a smaller width, we can know that the only way we get a bigger area is by having a bigger height, and therefore each iteration *we only move the index pointing to the lower height*. Here's what that looks like:

```ts
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
```
