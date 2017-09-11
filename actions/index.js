export const TOGGLE_CELL = 'TOGGLE_CELL';

export const toggleCell = ({x, y}) => ({
  type: TOGGLE_CELL,
  x,
  y
});
