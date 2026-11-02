class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for(let i=0; i<arr.length; i++){
            let maxR = 0;
            for(let j=i+1; j<arr.length; j++){
                maxR = Math.max(arr[j], maxR);
            }
            arr[i]=maxR;
        }
        arr[arr.length-1]=-1;
        return arr;

    }
}
