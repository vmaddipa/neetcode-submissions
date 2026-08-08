class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const product = nums.reduce((acc, num) => num * acc, 1);
        const zeroCount = nums.reduce((acc, num) => {
            if (num === 0) {
                return acc + 1;
            }
            return acc
        }, 0);
        if (zeroCount > 1) return new Array(nums.length).fill(0);

        return nums.map((num) => {
            if (num !== 0) {
                return product / num;
            } else {
                const productExcludingZero = nums.reduce((acc, num) => {
                    console.log(acc);
                    if (num === 0) return acc;
                    return acc * num;
                }, 1);
                return productExcludingZero;
            }
        });
    }
}
