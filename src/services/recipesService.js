import Recipe from "../models/recipe.js";

export function getAll() { return Recipe.find(); }

export function getById(id) { return Recipe.findById(id); }

export function create(data) { return Recipe.create(data); }

export function update(id, data)  {     return Recipe.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });     }

export function remove(id) { return Recipe.findByIdAndDelete(id); }