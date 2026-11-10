class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        const memo = new Map<number, number>();
        const dfs= (i: number): number => {
        if(i<=1) return 1;

        if(memo.has(i)) return memo.get(i)!;

        const result = dfs(i-1)+dfs(i-2);
        memo.set(i, result);
        return result;
        }

        return dfs(n);
    }
}
