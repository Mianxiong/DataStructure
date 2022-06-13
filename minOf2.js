/**
 * 两个数找出较小的那个
 */
//第一版
// let minOf2 = (numbers) => {
//     if (numbers[0] < numbers[1]) {
//         return number[0]
//     } else {
//         return number[1]
//     }
// }
//优化代码
// let minOf2 = numbers => numbers[0] < numbers[1] ? numbers[0] : numbers[1]

//再优化代码，这种写法叫做析构赋值
let minOf2 = ([a, b]) => a < b ? a : b 

console.log(minOf2([1,2]))
console.log(minOf2.call(null,[1,2]))

//现成API
Math.min(1,2) //1
Math.min.call(null,1,2)
Math.min.apply(null,[1,2])

//实际上Math只是一个普通对象
//这是唯一的特例：首字母大写是构造函数