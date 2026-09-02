class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0;
        let freq = {};
        let maxFreq = 0;
        let result = 0;

        for (let r = 0; r < s.length; r++) {
            freq[s[r]] = (freq[s[r]] ?? 0) + 1;
            maxFreq = Math.max(maxFreq, freq[s[r]]);
            const currWinSize = r - l + 1;
            if (currWinSize - maxFreq > k) {
                freq[s[l]]--;
                l++;
            }

            result = Math.max(result, r - l + 1);

        }
        return result;
    }
}
