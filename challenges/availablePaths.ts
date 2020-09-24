function paths(n: number): number {
    
    let result = 1;
    let step = 1;

    while(step < n){
        result*=step+1;
        step++;
    }

    return result;
}

console.log(
    paths(9)
);