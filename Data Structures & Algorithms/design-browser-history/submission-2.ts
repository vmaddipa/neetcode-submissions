class ListNode {
   homepage: string;
   prev: ListNode|null;
   next: ListNode|null;
   constructor(homepage:string, prev:ListNode|null=null, next:ListNode|null=null){
    this.homepage = homepage;
    this.prev = prev;
    this.next = next;
   }
}
class BrowserHistory {
    curr: ListNode;
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
       this.curr = new ListNode(homepage)
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const curr = this.curr;
        const node = new ListNode(url, curr, null);
        this.curr.next = node;
        this.curr = node;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(steps>0 && this.curr.prev){
            this.curr = this.curr.prev;
            steps--;
        }
        return this.curr.homepage;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while(steps>0 && this.curr.next){
            this.curr = this.curr.next;
            steps--;
        }
        return this.curr.homepage;
    }
}
