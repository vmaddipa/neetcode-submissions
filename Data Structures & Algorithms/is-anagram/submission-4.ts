class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const counts = new Int32Array(26);
        for (let i = 0; i < s.length; i++) {
            counts[s[i].charCodeAt(0)-97]++;
            counts[t[i].charCodeAt(0)-97]--;
        }

        for (let count of counts) {
            if (count !== 0) return false;
        }
        return true;

    }
}
