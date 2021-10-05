function searchInsert(nums: number[], target: number): number {

  let i: number = 0;

  nums.forEach((num, y) => {
    if (target > num) {
      i = y + 1
      return i
    }
  })

  return i
};