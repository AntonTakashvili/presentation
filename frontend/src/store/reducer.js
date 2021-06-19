import { actionTypes } from './actions';

const initialState = {
  itemArray: [],
  currentPage: 1,
};

const reducer = (state = initialState, payload) => {
  switch (payload.type) {
    case actionTypes.addItem:
      let updatedCurrentPage = state.currentPage;
      const lastPage = Math.ceil(state.itemArray.length / 15);
      const isRemainder = state.itemArray.length % 15;

      if (!isRemainder) {
        updatedCurrentPage =
          state.currentPage === 0 ? state.currentPage + 1 : lastPage + 1;
      }

      if (state.currentPage !== lastPage) {
        const shouldCreateNewPage = !isRemainder;
        updatedCurrentPage = lastPage + shouldCreateNewPage;
      }

      return {
        ...state,
        itemArray: [
          ...state.itemArray,
          { text: payload.text, completed: false, _id: payload.id },
        ],
        currentPage: updatedCurrentPage,
      };

    case actionTypes.deleteSelected: {
      const modifiedItemArray = state.itemArray.filter(
        (item) => !item.completed
      );

      return {
        ...state,
        itemArray: modifiedItemArray,
        currentPage:
          modifiedItemArray.length / 15 < state.currentPage
            ? Math.ceil(modifiedItemArray.length / 15)
            : state.currentPage,
      };
    }

    case actionTypes.editTask:
      return {
        ...state,
        itemArray: state.itemArray.map((item) => {
          if (item._id === payload.id) {
            return { ...item, text: payload.editedText };
          }

          return item;
        }),
      };

    case actionTypes.changeCurrentPage:
      return {
        ...state,
        currentPage: payload.page,
      };

    case actionTypes.toggleCompleted: {
      return {
        ...state,
        itemArray: state.itemArray.map((item) =>
          item._id === payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    }

    case actionTypes.selectAll: {
      return {
        ...state,
        itemArray: state.itemArray.map((item) => ({
          ...item,
          completed: true,
        })),
      };
    }

    case actionTypes.unSelectAll: {
      const modifiedItemArray = state.itemArray.map((item) => ({
        ...item,
        completed: false,
      }));

      return {
        ...state,
        itemArray: modifiedItemArray,
      };
    }

    case actionTypes.deleteTask: {
      const lastPage = Math.ceil(state.itemArray.length / 15);
      let updatedCurrentPage = state.currentPage;

      const modifiedItemArray = state.itemArray.filter(
        (item) => item._id !== payload.id
      );

      if (
        !(modifiedItemArray.length % 15) &&
        modifiedItemArray.length > 14 &&
        state.currentPage !== 1 &&
        state.currentPage === lastPage
      ) {
        updatedCurrentPage = state.currentPage - 1;
      }

      return {
        itemArray: modifiedItemArray,
        currentPage: updatedCurrentPage,
      };
    }

    case actionTypes.setItemArray: {
      return {
        ...state,
        itemArray: payload.db,
      };
    }

    default:
      return state;
  }
};

export default reducer;
