/**
    Given two binary strings, return their sum (also a binary string).
    
    For example,
    a = "11"
    b = "1"
    Return "100".
**/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let aLen = a.length, bLen = b.length, res = '', carry = 0
  if (aLen >= bLen) {
      while(aLen) {
          if (bLen) {
              let sum = Number(a[--aLen]) + Number(b[--bLen]) + carry
              carry = 0
              if (sum >= 2)  {
                  carry = 1
              }  
              res = sum % 2 + res
          } else {
            let t =  a[--aLen]
            if (carry && t === '1') {
                res = '0' + res
                carry = 1
            } else if (carry && t ==='0') {
                res = '1' + res
                carry = 0
            } else {
                res = t + res
            }
          }
      }
  } else {
      while(bLen) {
          if (aLen) {
              let sum = Number(a[--aLen]) + Number(b[--bLen]) + carry
              carry = 0
              if (sum >= 2)  {
                  carry = 1
              }  
              res = sum % 2 + res
          } 
          else {
            let t = b[--bLen]
            if (carry && t === '1') {
                res = '0' + res
                carry = 1
            } else if (carry && t === '0') {
                res = '1' + res
                carry = 0
            } else {
                res = t + res
            }
          }
      }
  }
    if (carry)
        res = '1' + res
    return res
};
