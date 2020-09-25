function changeEnough(
    change: [number,number,number,number],
    amountDue: number
): boolean {

    let total: number = 0;

    const rates = [
        0.25,
        0.10,
        0.05,
        0.01
    ];

   change.forEach((coins: number, index: number) => {
     total+= coins*rates[index];
   });

   return total >= amountDue;
}

console.log(
    changeEnough([30, 40, 20, 5], 12.55)
);
