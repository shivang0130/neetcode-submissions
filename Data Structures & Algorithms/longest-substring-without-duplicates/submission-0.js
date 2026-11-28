class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();

        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {

            // Remove duplicate characters
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            // Add current character
            set.add(s[right]);

            // Calculate maximum window length
            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }

        return maxLength;

    }
}
