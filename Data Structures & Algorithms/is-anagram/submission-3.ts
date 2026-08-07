class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const counts = new Int32Array(26);
        const getIndex = (char:string)=> char.charCodeAt(0)- 'a'.charCodeAt(0);
        for(let i=0; i<s.length; i++){
        counts[getIndex(s[i])]++;
        counts[getIndex(t[i])]--;
        }

        for(let count of counts){
            if(count !== 0) return false;
        }
        return true;

    }
}
