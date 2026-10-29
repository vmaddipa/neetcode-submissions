class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m = matrix.length;
        const n = matrix[0].length;
        let start = 0;
        let end = m*n - 1;
        while(start<=end){
            const mid = Math.floor(end+(start-end)/2);
            const row = Math.floor(mid/n);
            const col = mid % n;
            const val = matrix[row][col];

            if(val===target) return true;
            if(val<target){
                start = mid+1;
            } else {
                end = mid - 1;
            }
        }
        return false;
    }
}
