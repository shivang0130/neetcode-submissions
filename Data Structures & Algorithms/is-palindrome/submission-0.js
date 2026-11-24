class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            
        s = s.replaceAll(' ','');
        s = s.replaceAll(/[^a-zA-Z0-9 ]/g, '').toLowerCase();

        let start=0,end=s.length-1;

        while(start<end){
            if(s[start]!==s[end]){
                return false;
            }
            start++;
            end--;
        }

        return true;

    }
}
