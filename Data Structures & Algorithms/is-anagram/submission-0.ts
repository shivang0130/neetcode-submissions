class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length){
            return false;
        }
        let sHash = new Map<string, number>();

        for(let char of s){
            const currentCount = sHash.get(char) || 0;
            sHash.set(char,currentCount + 1);
        }

        for(let char of t){
            const currentCount = sHash.get(char);
            if(!currentCount){
                return false;
            }
            sHash.set(char,currentCount - 1);
        }

        return true;
    }
}
