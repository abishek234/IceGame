const K = "KeyK";
const A = "KeyA";
const N = "KeyN";
const R = "KeyR";

/**
 * @param {{ direction: string; }} player
 * @param {string} keyName
 */
export function changeDirection(player, keyName) {
  if (keyName === K) player.direction = "UP";
  else if (keyName === N) player.direction = "DOWN";
  else if (keyName === A) player.direction = "RIGHT";
  else if (keyName === R) player.direction = "LEFT";
}

/**
 * @param {string} keyName
 * @param {{ id?: string; name?: string; isBreaker?: boolean; x: any; y: any; direction?: string; }} player
 * @param {number} boardSize
 */
export function playerMove(keyName, player, boardSize) {
  if (keyName === K && player.x > 0) player.x--;
  else if (keyName === N && player.x < boardSize - 1) player.x++;
  else if (keyName === A && player.y > 0) player.y--;
  else if (keyName === R && player.y < boardSize - 1) player.y++;
}

/**
 * @param {{ id?: string; name?: string; isBreaker?: boolean; x: any; y: any; direction: any; }} player
 * @param {number[][] | { [x: string]: number; }[]} board
 * @param {{ (row: any, col: any): void; (arg0: number, arg1: number): void; }} handleBreak
 */
export function breakIce(player, board, handleBreak) {
  if (player.direction === "UP" && board[player.x - 1][player.y] === 1)
    handleBreak(player.x - 1, player.y);
  else if (player.direction === "DOWN" && board[player.x + 1][player.y] === 1)
    handleBreak(player.x + 1, player.y);
  else if (player.direction === "RIGHT" && board[player.x][player.y - 1] === 1)
    handleBreak(player.x, player.y - 1);
  else if (player.direction === "LEFT" && board[player.x][player.y + 1] === 1)
    handleBreak(player.x, player.y + 1);
}

/**
 * @param {string} keyName
 * @param {{ id?: string; name?: string; isBreaker?: boolean; x: any; y: any; direction?: string; }} player
 * @param {string | any[]} board
 */
export function breakerMove(keyName, player, board) {
  const boardSize = board.length;
  if (keyName === K && player.x > 0 && board[player.x - 1][player.y] === 0)
    player.x--;
  else if (
    keyName === N &&
    player.x < boardSize - 1 &&
    board[player.x + 1][player.y] === 0
  )
    player.x++;
  else if (keyName === A && player.y > 0 && board[player.x][player.y - 1] === 0)
    player.y--;
  else if (
    keyName === R &&
    player.y < boardSize - 1 &&
    board[player.x][player.y + 1] === 0
  )
    player.y++;
}
