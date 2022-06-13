/**
 * 任意长度数组求最小值
 */
let min = (numbers) => {
    return min(
        [numbers[0],min(numbers.slice(1))]
    )
}
