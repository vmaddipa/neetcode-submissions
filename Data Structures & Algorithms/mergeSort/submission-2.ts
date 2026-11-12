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
    mergeSort(pairs: Pair[]): Pair[] {
        return this.mergeSortHelper(pairs, 0, pairs.length - 1);
    }

    private mergeSortHelper(pairs: Pair[], s: number, e: number): Pair[] {
        // Base case: 0 or 1 element is already sorted
        if (s >= e) {
            return pairs;
        }

        const m = Math.floor((s + e) / 2);

        // Sort the left and right halves in-place
        this.mergeSortHelper(pairs, s, m);
        this.mergeSortHelper(pairs, m + 1, e);

        // Merge the two sorted halves back into `pairs`
        this.merge(pairs, s, m, e);

        return pairs;
    }

    private merge(arr: Pair[], s: number, m: number, e: number): void {
        // Copy the two sorted halves into temporary arrays
        const L: Pair[] = [];
        const R: Pair[] = [];

        for (let i = s; i <= m; i++) L.push(arr[i]);
        for (let j = m + 1; j <= e; j++) R.push(arr[j]);

        let i = 0; // Pointer for L
        let j = 0; // Pointer for R
        let k = s; // Pointer for writing back into arr

        // Merge back into arr[s...e]
        while (i < L.length && j < R.length) {
            // Using <= maintains stability
            if (L[i].key <= R[j].key) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy remaining elements
        while (i < L.length) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < R.length) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}