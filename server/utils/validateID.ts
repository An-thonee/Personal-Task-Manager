// utils is the short for utilities which refers to a collection of helper function or modules designed to perform common task on multiple functions

// These task often includes things like data validation, formatting or other repetitive operations that are used across different parts of the application

import mongoose from "mongoose";

export const validateID = (id: string): boolean => {
  return mongoose.Types.ObjectId.isValid(id);
};
