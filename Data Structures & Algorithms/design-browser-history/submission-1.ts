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
        let i=0;
        while(i<steps && this.curr){
            const next = this.curr.next;
            if(!next) break;
            this.curr = next;
            i++;
        }
        return this.curr.homepage ?? ''
    }
}
