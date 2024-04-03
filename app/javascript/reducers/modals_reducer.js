import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const initialState = {
  modal: {
    props: {
      open: false,
    },
  },
};

const ModalsReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case OPEN_MODAL:
      return {
        modal: action.modal,
        type: action.type,
      };
    case CLOSE_MODAL:
      return {
        initialState,
      };
    default:
      return oldState;
  }
};

export default ModalsReducer;
