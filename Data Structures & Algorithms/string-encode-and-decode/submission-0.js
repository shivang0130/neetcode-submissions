class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded="";
        for(let str of strs){
            encoded += str.length + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded=[];
        let i=0;

        while(i < str.length){
            let delimmeterIndex = str.indexOf('#',i);

            // Extract the length
            let lengthOfWord = Number(str.substring(i, delimmeterIndex));

            let start = delimmeterIndex + 1;

            let word = str.substring(start, start + lengthOfWord);

            decoded.push(word);

            i= start + lengthOfWord;

        }

        return decoded;
    }
}
