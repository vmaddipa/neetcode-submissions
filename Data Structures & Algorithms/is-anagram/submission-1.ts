class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const sLetterCountMap = new Map<string, number>();
        const tLetterCountMap = new Map<string, number>();
        for (let letter of s) {
            sLetterCountMap.set(letter, (sLetterCountMap.get(letter) ?? 0) + 1);
        }

        for (let letter of t) {
            tLetterCountMap.set(letter, (tLetterCountMap.get(letter) ?? 0) + 1);
        }

        for (let letter of sLetterCountMap.keys()) {
            if (sLetterCountMap.get(letter) !== tLetterCountMap.get(letter)) {
                return false;
            }
        }
        return true;

    }
}
