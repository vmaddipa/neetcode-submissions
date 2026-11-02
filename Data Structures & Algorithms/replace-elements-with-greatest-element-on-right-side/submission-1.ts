class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let rightMax = arr[arr.length -1];
        arr[arr.length-1]= -1;
        for(let j= arr.length - 2;j>=0; j--){
            let temp = arr[j];
            arr[j]=rightMax;
            rightMax = Math.max(temp, rightMax);
        }
        return arr;
    }
}
