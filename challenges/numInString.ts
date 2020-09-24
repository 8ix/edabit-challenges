function numInStr(arr: string[]){
    const regex = RegExp('[0-9]');
    return arr.filter(function(string: string){
        return regex.test(string);
    })
}

console.log(
numInStr(["1a", "a", "2b", "b"]) //➞ ["1a", "2b"]
);

numInStr(["abc", "abc10"]) //➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) //➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) //➞ ["test1"]