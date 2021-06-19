const express = require("express");
const {
  getAll,
  addItem,
  deleteItem,
  editItem,
  toggleCompleted,
  selectAll,
  unSelectAll,
  deleteSelected,
} = require("../controllers/todoControllers.js");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("/getAll", checkAuth, getAll);
router.post("/add", checkAuth, addItem);
router.delete("/delete_:id", checkAuth, deleteItem);
router.put("/edit_:id", checkAuth, editItem);
router.put("/toggleCompleted_:id", checkAuth, toggleCompleted);
router.put("/selectAll", checkAuth, selectAll);
router.put("/unSelectAll", checkAuth, unSelectAll);
router.post("/deleteSelected", checkAuth, deleteSelected);

module.exports = router;
