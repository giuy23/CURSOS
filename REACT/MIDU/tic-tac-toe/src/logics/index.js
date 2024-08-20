export const saveGameInStorage = ({board, turn}) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};
export const resetGameFromStorage = () => {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
};
