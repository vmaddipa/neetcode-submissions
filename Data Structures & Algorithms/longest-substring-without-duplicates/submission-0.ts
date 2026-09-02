class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if (s.length < 2) return s.length;

        let l = 0;
        let set = new Set<string>(s[0]);
        let max = 0;
        for (let r = 1; r < s.length; r++) {
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
