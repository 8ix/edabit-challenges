function arrayOfMultiples (num: number, length: number): number[] {

    let results: number[] = [];
    let currentLength: number = 0;
    
    while(currentLength < length){
        results[currentLength] = num * (currentLength + 1);
        currentLength++;
    }
    return results;
}

console.log(
    arrayOfMultiples(5,5)
)