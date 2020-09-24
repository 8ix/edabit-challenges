enum Message {
    FOUND = 'Boom!',
    MISSING = 'there is no 7 in the array'
}

function sevenBoom(arr: number[]): Message  {
    const rule = RegExp('[7]');
    return rule.test(arr.join()) ? Message.FOUND : Message.MISSING;
}

console.log(
    sevenBoom([1, 2, 3, 4, 5, 6, 7]) //➞ "Boom!"
);

console.log(
    sevenBoom([8, 6, 33, 100]) //➞ "there is no 7 in the array"
);

console.log(
    sevenBoom([2, 55, 60, 97, 86]) //➞ "Boom!"
);