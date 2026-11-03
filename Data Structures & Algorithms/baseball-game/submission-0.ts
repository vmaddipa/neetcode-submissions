class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const record:number[] = [];
        for(let operation of operations){
            const num = Number(operation);
            if(!Number.isNaN(num)){
                record.push(+operation);
            }
            else if(operation === 'C'){
                record.pop();
            }
            else if(operation === 'D' && record.length){
                record.push(record[record.length-1]*2);
            } else if(operation === '+' && record.length){
                const prev = record[record.length - 1];
                const prev2 = record[record.length - 2];
                record.push(prev+ prev2);
            }
        }
        console.log(record, 'record');
        return record.reduce((r, acc)=> r+acc, 0);

    }
}
