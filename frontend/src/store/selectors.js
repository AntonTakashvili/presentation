import { createSelector } from 'reselect';

const getItemArray = (state) => state.itemArray;

export const getIsAllCheckedValue = createSelector(getItemArray, (itemArray) =>
  itemArray.every((item) => item.completed)
);

export const getItemArrayLength = createSelector(
  getItemArray,
  (itemArray) => itemArray.length
);

export const getCompletedCount = createSelector(
  getItemArray,
  (itemArray) => itemArray.filter((e) => e.completed).length
);

const getCurrentPage = (state) => state.currentPage;

export const getRenderedTasks = createSelector(
  getCurrentPage,
  getItemArray,
  (currentPage, itemArray) => {
    const start = currentPage * 15 - 15;
    const end = start + 15;
    return itemArray.slice(start, end);
  }
);
