function tree(height: number): string[] {
    
    const branchIcon = "£";
    const background = "!";
    let treeWidth = 1;

    let tree = [];
    let spaces = height-1;

    while(height > tree.length){
        tree.push(
            background.repeat(spaces) +
            branchIcon.repeat(treeWidth) +
            background.repeat(spaces)
        );

        treeWidth = (treeWidth+1)%2 == 0 ? treeWidth+2 :treeWidth+1;
        spaces = spaces-1;
    }
    return tree;
}

console.log(
    tree(50)
);


