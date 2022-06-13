/**
 * 三个数找出较小的那个
 */
 let minOf2 = ([a, b]) => a < b ? a : b
 let minOf3 = ([a,b,c]) => {
     return minOf2([a,minOf2([b,c])])
 }
//  let minOf3 = ([a,b,c]) => {
//      return minOf2([a,minOf2([b,c])])
//  }
 let minOf4 = ([a,b,c,d]) => {
     return minOf2([a,minOf3([b,c,d])])
 } 
 //任意长度数组求最小值，都可以通过minOf2实现