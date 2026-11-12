/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs: Pair[]): Pair[] {
        const merge = (arr1: Pair[], arr2: Pair[])=> {
            let i=0;
            let j=0;
            let res: Pair[] = [];
            while(i<arr1.length && j< arr2.length){
                if(arr1[i].key <= arr2[j].key){
                    res.push(arr1[i]);
                    i++;
                } else {
                    res.push(arr2[j]);
                    j++;
                }
            }
            while(i<arr1.length){
                res.push(arr1[i]);
                i++;
            }
            while(j<arr2.length){
                res.push(arr2[j]);
                j++;
            }
            return res;
        };
        const sort = (pairs: Pair[], l:number, r: number) => {
            if (pairs.length <= 1) return pairs;
            if(r-l <= 0) return pairs.slice(l, r+1);

            let mid = Math.floor((l+r)/2);
            const sorted1 = sort(pairs, l, mid);
            const sorted2 = sort(pairs, mid+1, r);
            return merge(sorted1, sorted2);
        };
        return sort(pairs, 0, pairs.length-1);
    }
}
