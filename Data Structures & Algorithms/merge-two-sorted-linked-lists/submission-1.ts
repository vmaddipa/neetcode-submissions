/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1 && !list2) return null;
        if (!list1) return list2;
        if (!list2) return list1;
        
        let sortedList: ListNode | null = null;
        if (list1 && list2 && list1.val < list2?.val) {
            sortedList = list1;
            list1 = list1?.next;
        } else {
            sortedList = list2;
            list2 = list2?.next;
        }
        const head = sortedList;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                sortedList.next = list1;
                list1 = list1.next;
            } else {
                sortedList.next = list2;
                list2 = list2.next;
            }
            sortedList = sortedList.next;
        }
        sortedList.next = list1 !== null ? list1 : list2;
        return head;

    }
}
