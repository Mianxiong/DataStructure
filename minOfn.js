let min = (numbers) => {
    if(numbers.length > 2) {
        return min(
            [numbers[0],min(numbers.slice(1))]
        )
    } else {
        return Math.min.apply(null,numbers)
    }
}
console.log(min([3,11,34,1,0,-1,-3,320]))