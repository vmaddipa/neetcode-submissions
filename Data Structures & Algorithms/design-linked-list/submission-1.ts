class ListNode {
    val: number;
    next: ListNode | null = null;
    prev: ListNode | null = null;

    constructor(val: number = 0) {
        this.val = val;
    }
}

class MyLinkedList {
    constructor() { }
    private head: ListNode | null = null;
    private tail: ListNode | null = null;
    size: number = 0;

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let curr = this.head;
        let i = 0;
        while (i < index && curr) {
            curr = curr.next;
            i++;
        }
        return curr?.val ?? -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const node = new ListNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        let curr = this.head;
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const node = new ListNode(val);

        if (!this.tail) {
            this.tail = node;
            this.head = node;
            this.size++;
            return;
        }

        let curr = this.tail;
        curr.next = node;
        node.prev = curr;
        this.tail = node;
        this.size++;

    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        const node = new ListNode(val);
        if (this.size < index) {
            return;
        }
        if(index === 0){
            this.addAtHead(val);
            return;
        }
        if(this.size === index){
            this.addAtTail(val);
            return;
        }

        let i = 0;
        let curr = this.head;

        while (i < index && curr) {
            curr = curr.next;
            i++;
        }
        let prev = curr.prev;
        prev.next = node;
        node.prev= prev;
        node.next = curr;
        curr.prev = node;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (!this.head) {
            return;
        }
        if(index<0 || index>=this.size) return;
        if(index===0){
            if(this.size === 1){
                this.head=null;
                this.tail= null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            this.size--;
            return;
        }
        if(index===this.size-1){
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.size--;
            return;
        }

        let i = 0;
        let curr = this.head;

        while (i < index && curr) {
            curr = curr.next;
            i++;
        }
        if(i !== index) return;

        let prev = curr.prev;
        let next = curr.next;
        prev.next = next;
        next.prev = prev;
        this.size--;
     }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
