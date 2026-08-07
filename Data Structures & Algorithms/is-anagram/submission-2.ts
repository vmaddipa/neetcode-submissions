class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const letterCountMap = new Map<string, number>();
        for (let letter of s) {
            letterCountMap.set(letter, (letterCountMap.get(letter) ?? 0) + 1);
        }

        for (let letter of t) {
            letterCountMap.set(letter, (letterCountMap.get(letter) ?? 0) - 1);
        }

        for (let letter of letterCountMap.keys()) {
            if (letterCountMap.get(letter) !== 0) {
                return false;
            }
        }
        return true;

    }
}
