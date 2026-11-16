import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [String],
  steps: [String],
});

export default model("Recipe", recipeSchema);