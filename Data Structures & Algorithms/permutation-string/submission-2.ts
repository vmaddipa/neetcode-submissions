class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;
        const s1Count = new Array(26).fill(0);  // For s1
        const s2Count = new Array(26).fill(0);  // For the sliding window in s2
        // Count characters in s1 and the first window of s2
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }
        if (matches === 26) {
            return true;
        }
        let l = 0;  // left pointer

        for (let r = s1.length; r < s2.length; r++) {
            // Add new character on the right
            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0);
            s2Count[index]++;

            // Update matches based on the new count
            if (s1Count[index] === s2Count[index]) {
                matches++;  // We matched this character
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;  // We went from matching to not matching
            }

            // Remove character on the left
            index = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2Count[index]--;

            // Update matches based on the removed count
            if (s1Count[index] === s2Count[index]) {
                matches++;  // We matched this character
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;  // We went from matching to not matching
            }

            l++;  // Move left pointer forward

            // Check if we found a match
            if (matches === 26) {
                return true;
            }
        }

        return false;  // No permutation found    
    }
}
