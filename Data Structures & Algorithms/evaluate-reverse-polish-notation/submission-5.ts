class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const nums = [];
        for (let token of tokens) {
            if (!Number.isNaN(+token)) {
                nums.push(+token);
            } else {
                const num1 = nums.pop();
                const num2 = nums.pop();

                let result;
                switch (token) {
                    case '+':
                        result = num1 + num2;
                        break;
                    case '-':
                        result = num2 - num1;
                        break;
                    case '*':
                        result = num1 * num2;
                        break;
                    case '/':
                        result = Math.trunc(num2 / num1);
                        break;
                    default:
                        break;
                }
                nums.push(result);
            }
        }
        return nums.pop();

    }
}
