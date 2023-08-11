var findAverage = function (nums) {
    return nums.reduce( ( current, total ) => current += total, 0) / nums.length
  }