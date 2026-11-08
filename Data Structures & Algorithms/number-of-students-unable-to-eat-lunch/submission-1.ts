class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        while (sandwiches.length) {
            const topStudentPref = students[0];
            const topSandwich = sandwiches[0];
            if (topStudentPref === topSandwich) {
                students.shift();
                sandwiches.shift();
            } else {
                students.shift();
                students.push(topStudentPref);
            }
            if (!students.includes(sandwiches[0])) {
                break;
            }
        }
        return sandwiches.length;
    }
}
