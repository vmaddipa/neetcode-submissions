class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    let stack = "";
    const pairs = { ')': '(', '}': '{', ']': '[' };
    
    for (const char of s) {
        if (char in pairs) {
            if (stack[stack.length - 1] !== pairs[char]) return false;
            stack = stack.slice(0, -1);
        } else {
            stack += char;
        }
    }
    
    return stack.length === 0;
}
}
