class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result: string[][] = [];
        const map = new Map<string, string[]>();
        for(let str of strs){
            const sortedStr = str.split('').sort().join('');
            const res = (map.get(sortedStr) ?? []);
            res.push(str)
            map.set(sortedStr, res);
        }
        let keys = map.keys();
        for(let key of keys){
            result.push(map.get(key));
        }
        return result;
    }
}
