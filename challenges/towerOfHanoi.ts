//https://edabit.com/challenge/3ZtykTsx3GSoPHyBb

function towerHanoi(discs: number): number {
    let count = 1;
    let result: number = 2;

    while(count < discs){
        result*=2;
        count++;
    }

    return discs ? (result-1) : 0;
}

console.log(
    towerHanoi(0)
);