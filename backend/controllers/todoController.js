const { todoModel } = require("../models/todoModel");
const mongoose = require("mongoose");
exports.getTodo = async (req, res) => {
  const data = await todoModel.find({});
  if (data.length === 0) {
    res.json({
      message: "There is no Todo.",
    });
  }
  res.json({
    data,
  });
};

exports.addTodo = async (req, res) => {
  try {
    const todoData = req.body;
    const insertedData = await todoModel.create(todoData);
    res.json({
      message: "Todo Added successfully",
      data: insertedData,
    });
  } catch (err) {
    // console.log(err.errorResponse)
    if (err.errorResponse.errmsg.search("duplicate") !== -1)
      res.json({
        message: "This todo is already there",
      });
  }
};

exports.updateTodoById = async (req, res) => {
  const { _id, todoData } = req.body;

  try {
    // Validate _id (optional)
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).json({ message: 'Invalid todo ID' });
    }

    const updatedTodo = await todoModel.findByIdAndUpdate(
      _id,
      { todoData: todoData },
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({
      message: 'Todo updated successfully',
      data: updatedTodo,
    });
  } catch (err) {
    console.error('Error updating todo:', err);
    res.status(500).json({ message: 'Server error' });
  }
};




exports.deleteTodoById = async (req, res) => {
  const { _id } = req.body;
  try {
    todoModel
      .findByIdAndDelete({ _id })
      .then(() => {
        res.status(200).json({
          message: "Your todo is deleted successfully",
        });
      })
      .catch((err) => console.log(err));
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};


