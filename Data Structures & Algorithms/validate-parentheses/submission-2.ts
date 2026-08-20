class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const map = new Map<string, string>([[']', '['], [')', '('], ['}', '{']]);
        for(let l of s){
            if(l==='(' || l==='{'||l==='['){
                stack.push(l);
            } else {
                let prevLetter = stack.pop();
                if(!prevLetter || prevLetter!==map.get(l)) return false; 
            }
        }
        return stack.length === 0;
    }
}
