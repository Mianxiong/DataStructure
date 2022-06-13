/**
 * 长度为2的数组排序
 */
let sort2 = ([a, b]) => {
    if (a < b) {
        return [a, b]
    } else {
        return [b, a]
    }
}
//优化代码
let sort2 = ([a, b]) => a < b ? [a, b] : [b, a]