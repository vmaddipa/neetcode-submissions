class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = '';
        for(let str of strs){
            res = res+`${str.length}#${str}`;

        }
        console.log(res)
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const strs: string[] = [];
        let index = 0;
        while(index < str.length){
            const delim = str.indexOf('#', index); 
            const len = Number.parseInt(str.slice(index, delim));
            if(!Number.isInteger(len)) return strs;
            strs.push(str.slice(delim+1, delim+len+1));
            index=delim+len+1;
        }

        return strs;
    }
}
