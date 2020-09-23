enum Balance {
    LEFT = "left",
    RIGHT = "right",
    BALANCED = "balanced"
}

function seesaw(num: number): Balance {
    if(typeof num === "string" || typeof num === "number"){
        const numberLength: number = num.toString().length;
        let fulcrum: boolean | number = Math.abs(numberLength % 2) == 1;

        const length: number = fulcrum ? (numberLength)-1 : numberLength;
        const split: number = length / 2;

        const numbersArr: string[] = num.toString().split('');

        let count = 0;
        let left: string = "";
        let right: string = "";

        numbersArr.forEach(digit => {
            if(fulcrum && count === split){
                fulcrum = +digit;
            }else if(count < split){
                left+= digit;
            }else{
                right+= digit;
            }
            count++;
        })

        if(+left > +right){
            return Balance.LEFT;
        }

        if(+right > +left){
            return Balance.RIGHT;
        }
        return Balance.BALANCED;
    }
    return Balance.BALANCED;
}

console.log(
    seesaw(
        111
    )
);