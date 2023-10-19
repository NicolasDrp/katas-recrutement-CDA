let size = 8;
let board = "";
for (let i = 1; i < size + 1; i++) {
    for (let y = 1; y < size + 1; y++) {
        if (i % 2 == 0) {
            if (y % 2 == 0) {
                board = board + "#";
            } else {
                board = board + " ";
            }
        } else {
            if (y % 2 == 0) {
                board = board + " ";
            } else {
                board = board + "#";
            }
        }
    }
    board = board + "\n"
}
console.log(board);