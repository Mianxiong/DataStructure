/**
 * 长度为3的数组排序
 */
let sort2 = ([a, b]) => a < b ? [a, b] : [b, a]
let min = (numbers) => {
    if(numbers.length > 2) {
        return min(
            [numbers[0],min(numbers.slice(1))]
        )
    } else {
        return Math.min.apply(null,numbers)
    }
}
let minIndex = (numbers) => numbers.indexOf(min(numbers))
let sort3 = (numbers) => {
    let index = minIndex(numbers)
    let min = numbers[index]
    numbers.splice(index,1)
    return [min].concat(sort2(numbers))
}
console.log(sort3([100,-1,3]))
let sort4 = (numbers) => {
    let index = minIndex(numbers)
    // console.log('index',index)
    let min = numbers[index]
    numbers.splice(index,1)
    return [min].concat(sort3(numbers))
}
console.log(sort4([100,1,2,-2]))