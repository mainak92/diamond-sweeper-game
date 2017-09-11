import {
  TOGGLE_CELL
} from '../actions';

const grid = (state, action) => {
  switch (action.type) {
    case TOGGLE_CELL:
      /**
       * Copy cells.
       */
      const cells = [...state.cells];
      const {x, y} = action;
      const val = cells[y * state.width + x];
      /**
       * Toggle the value.
       */
      cells[y * state.width + x] = val === 1 ? "true" : "false";
      /**
       * Return the next state.
       */
      return {
        ...state,
        cells
      };
    default:
      return state;
  }
};

export default grid;
