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
    quickSort(pairs: Pair[]): Pair[] {
        let helper = (pairs: Pair[], l: number, r: number)=> {
            if(l>=r) return;

            let left = l;
            let pivot = pairs[r].key;
            for(let i=l; i<r; i++){
                if(pairs[i].key < pivot){
                    let temp = pairs[left];
                    pairs[left]=pairs[i];
                    pairs[i]=temp;
                    left++;
                }
            }
            let temp = pairs[left];
            pairs[left]=pairs[r];
            pairs[r]=temp;

            helper(pairs, l, left-1);
            helper(pairs, left+1, r);
        };
        helper(pairs, 0, pairs.length-1);
        return pairs;
    }
}
