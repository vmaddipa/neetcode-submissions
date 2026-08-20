class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        while(left < right){
            const height = Math.min(heights[left], heights[right]);
            max = Math.max(max, height * (right - left));
            if(heights[left]> heights[right]){
                right--;
            } else if (heights[left]<heights[right]){
                left++
            } else {
                right--;
                left++;
            }

        }
        return max;
    }
}
