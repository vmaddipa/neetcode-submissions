class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);
        const stack: [number, number][] = [];

        for (let i = 0; i < temperatures.length; i++) {
            const curr = temperatures[i];


            while (stack.length > 0 && stack[stack.length - 1][0] < curr) {
                const [, prevIndex] = stack.pop();
                result[prevIndex] = i - prevIndex;
            }

            stack.push([curr, i]);

        }
        return result;

    }
}
