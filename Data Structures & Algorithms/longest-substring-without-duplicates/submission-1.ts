class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0;
        let set = new Set<string>();
        let max = 0;
        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            max = Math.max(max, r - l + 1);
        }
        return max;

    }
}
