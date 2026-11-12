/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let start = 0;
        let end =n;
        while(start<=end){
            const mid = start+Math.floor((end-start)/2);
            const res = guess(mid);
            if(res===0) return mid;

            if(res<0){
                end = mid-1;
            } else {
                start = mid+1;
            }
        }
        return -1;

    }
}
