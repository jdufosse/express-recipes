import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  ingredients: [String],
  steps: [String],
});

export default model("Recipe", recipeSchema);