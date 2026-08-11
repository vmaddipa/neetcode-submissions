class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowSet: Array<Set<string>> = [];
        const colSet: Array<Set<string>> = [];
        const boxSet: Array<Set<string>> = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                const num = board[i][j];
                if (num === '.') continue;

                const boxIndex = (Math.floor(i / 3) * 3) + (Math.floor(j / 3));
                rowSet[i] = rowSet[i] || new Set();
                colSet[j] = colSet[j] || new Set();
                boxSet[boxIndex] = boxSet[boxIndex] || new Set();

                // Combined check
                if (rowSet[i].has(num) || colSet[j].has(num) || boxSet[boxIndex].has(num)) {
                    return false;
                }
                rowSet[i].add(num);
                colSet[j].add(num);

                boxSet[boxIndex].add(num);

            }
        }
        return true;
    }
}
