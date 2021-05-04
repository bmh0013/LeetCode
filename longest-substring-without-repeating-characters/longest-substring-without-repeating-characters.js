/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let result = 0;
  
  if (!s.length) {
    return result;
  } else if ( s.length === 1 ) {
    return 1;
  }
  
  let storage = [];
  for (let i = 0; i < s.length; i++) {
    storage.push( s[i] )
    for (let j = i + 1; j < s.length; j++) {
      if ( !storage.includes( s[j] ) ) {
        storage.push( s[j] )
      } else {
        break;
      }
    }
    
    if (storage.length) {
      result = result < storage.length ? storage.length : result;
      storage = [];
    }
  }
  
  return result;
};