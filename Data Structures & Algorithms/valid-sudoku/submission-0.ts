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
                if(num === '.') continue;

                const boxIndex = (Math.floor(i / 3) * 3) + (Math.floor(j / 3));
                if(!rowSet[i]){
                    rowSet[i]=new Set<string>();
                }
                 if(!colSet[j]){
                    colSet[j]=new Set<string>();
                }
                 if(!boxSet[boxIndex]){
                    boxSet[boxIndex]=new Set<string>();
                }

                if (rowSet[i].has(num)) {
                    return false;
                }
                if (colSet[j].has(num)) {
                    return false
                }
                if (boxSet[boxIndex].has(num)) {
                    return false
                }
                rowSet[i].add(num);
                colSet[j].add(num);

                boxSet[boxIndex].add(num);

            }
        }
        return true;
    }
}
