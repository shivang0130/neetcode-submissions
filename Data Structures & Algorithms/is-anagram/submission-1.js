class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }
        let sHash = new Map();

        for(let char of s){
            const currCount = sHash.get(char) || 0;
            sHash.set(char,currCount+1);
        }

        for(let char of t){
            const currCount = sHash.get(char);
            if(!currCount){
                return false;
            }
            sHash.set(char,currCount - 1);
        }

        return true;

    }
}
