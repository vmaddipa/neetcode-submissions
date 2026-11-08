class Solution {
    countStudents(students: number[], sandwiches: number[]): number {
        // count[0] for sandwich 0, count[1] for sandwich 1
        const count = [0, 0];
        for (const student of students) {
            count[student]++;
        }

        for (const sandwich of sandwiches) {
            if (count[sandwich] === 0) {
                // No remaining student wants this sandwich
                break;
            }
            count[sandwich]--;
        }

        return count[0] + count[1];
    }
}