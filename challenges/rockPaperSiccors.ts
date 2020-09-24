//https://edabit.com/challenge/jtvCv6cjHorKpmyFc 

type Games = string[][];

enum Result {
    ABIGAIL = "Abigail",
    BENSON = "Ben",
    TIE = "Tie"
}

function calculateScore(games: Games): Result
{
    const winners = games.map((match) => {

        let move: string;
        let winner: Result | null = null;

        match.forEach((item,index) => {
            if(index === 0){
                move = item;
            } else{
                winner = playMatch(move+item);
            }
        });
        return winner;
    });

    
    let p1: number = 0;
    let p2: number = 0;

    winners.forEach((winner) => {
        if(winner === Result.ABIGAIL){
            p1++;
        }else if(winner === Result.BENSON){
            p2++;
        }
    });

    if(p1 > p2){return Result.ABIGAIL;}
    if(p2 > p1){return Result.BENSON;}
    return Result.TIE;
}

function playMatch(game: string): Result{
    switch(game){
        case "RP":
            return Result.BENSON;
        case "PR":
            return Result.ABIGAIL
        case "RS":
            return Result.ABIGAIL;
        case "SR":
            return Result.BENSON;
        case "PS":
            return Result.BENSON;
        case "SP":
            return Result.ABIGAIL;
        default:
            return Result.TIE;
    }
}




console.log(
    calculateScore([["R", "P"], ["R", "S"], ["S", "P"]])
);