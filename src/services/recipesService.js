import recipe from "../models/recipe.js";

export function getAll() { return recipe.find(); }

export function getById(id) { return recipe.findById(id); }

export function create(data) { return recipe.create(data); }

export function update(id, data) {
  return recipe.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

export function remove(id) { return recipe.findByIdAndDelete(id); }

export default { getAll, getById, create, update, remove };