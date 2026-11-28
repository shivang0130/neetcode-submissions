class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map = new Map();

        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

             // If character exists in current window
            if (map.has(char) && map.get(char) >= left) {

                // Jump left directly after previous occurrence
                left = map.get(char) + 1;
            }

            // Store latest character index
            map.set(char, right);

            // Calculate maximum window length
            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }

        return maxLength;

    }
}
