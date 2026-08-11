class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let cleanedString = s.toLowerCase().replace(/\W/g, '');
        for (let i = 0, j = cleanedString.length - 1; i < Math.floor(cleanedString.length/2); i++, j--) {
            if(cleanedString[i] !== cleanedString[j]){
                return false;
            }

        }
        return true;
    }
}
