class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let studentsWanting0 = 0;
        let studentsWanting1 = 0;
        for (let student of students) {
            if (student === 0) {
                studentsWanting0++;
            } else {
                studentsWanting1++;
            }
        }

        let i = 0;
        while (i < sandwiches.length) {
            if (sandwiches[i] === 0) {
                if (studentsWanting0 > 0) {
                    studentsWanting0--;

                } else {
                    break;
                }
            } else if (sandwiches[i] === 1) {
                if (studentsWanting1 > 0) {
                    studentsWanting1--;
                } else {
                    break;
                }
            }
            i++;
        }
        return studentsWanting1 + studentsWanting0;
    }
}
