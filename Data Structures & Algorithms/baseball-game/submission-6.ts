class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record: number[] = [];
        let sum = 0;
        for (let operation of operations) {
            if (operation === 'C') {
                const removedRecord = record.pop();
                sum -= removedRecord!;
            }
            else if (operation === 'D') {
                const elem = record[record.length - 1] * 2;
                record.push(elem);
                sum += elem;
            } else if (operation === '+') {
                const prev = record[record.length - 1];
                const prev2 = record[record.length - 2];
                const newSum = prev + prev2;
                record.push(newSum);
                sum += (newSum)
            } else {
                const val = Number(operation);
                record.push(val);
                sum += val;
            }

        }
        return sum;
    }
}
