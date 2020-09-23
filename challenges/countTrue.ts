function countTrue(arr: boolean[]) {
    
    let count = 0;

    arr.forEach(result => {
        if(result){
            count++;
        }
    });
    return count;
}


countTrue([true, false, false, true, false]);

countTrue([false, false, false, false]);

countTrue([]);