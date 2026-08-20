class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[left];
        let rightMax = height[right];
        let water = 0;

        while (left < right){
            if(leftMax>rightMax){
                right--;
                rightMax = Math.max(height[right], rightMax);
                water = water + rightMax-height[right];


            } else {
                left++;
                leftMax = Math.max(height[left], leftMax);
                water = water + leftMax-height[left];
            } 
        }
        return water;
    }
}
