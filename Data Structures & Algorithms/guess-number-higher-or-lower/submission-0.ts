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
        let dfs = (start: number, end: number) => {
            let mid = Math.floor((start + end) / 2);
            const res = guess(mid);
            if (res === 0) return mid;

            if (res < 0) {
                return dfs(start, mid-1);
            }
            else {
                return dfs(mid+1, end);
            }
        };
        return dfs(1, n);

    }
}
