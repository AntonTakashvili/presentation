export const actionTypes = {
  addItem: 'Set_ItemArray',
  deleteSelected: 'Delete_Selected',
  editTask: 'Edit_Task',
  changeCurrentPage: 'Change_Current_Page',
  toggleCompleted: 'Toggle_Completed',
  selectAll: 'Select_All',
  deleteTask: 'Delete_Task',
  unSelectAll: 'unSelect_All',
  setItemArray: 'Set_Item_Array',
};

export const addItemAction = (text, id) => ({
  type: actionTypes.addItem,
  text,
  id,
});

export const deleteSelectedAction = () => ({
  type: actionTypes.deleteSelected,
});

export const editTaskAction = (id, editedText) => ({
  type: actionTypes.editTask,
  id,
  editedText,
});

export const changeCurrentPageAction = (e) => ({
  type: actionTypes.changeCurrentPage,
  page: Number(e.target.textContent),
});

export const toggleCompletedAction = (id) => ({
  type: actionTypes.toggleCompleted,
  id,
});

export const selectAllAction = () => ({
  type: actionTypes.selectAll,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const unSelectAllAction = () => ({
  type: actionTypes.unSelectAll,
});

export const setItemArrayAction = (db) => ({
  type: actionTypes.setItemArray,
  db,
});
