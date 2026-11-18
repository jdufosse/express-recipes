import recipeService from "../services/recipeService.js";

export async function getAll(req, res) {
  const recipes = await recipeService.getAll();
  res.json(recipes); // Récupérer toutes les recettes
}

export async function getById(req, res) {
  const { id } = req.params;
  const recipe = await recipeService.getById(id);

  if (!recipe) {
    return res.status(404).json({ error: "Recette introuvable" });
  }

  res.json(recipe); // Récupérer une recette par son ID
}

export async function create(req, res) {
  await recipeService.create(req.body);
  res.status(201).json(req.body);
}

export async function update(req, res) {
  await recipeService.update(req.params.id, req.body);
  res.json({ id: req.params.id, ...req.body });
}

export async function remove(req, res) {
  await recipeService.delete(req.params.id)
  res.sendStatus(204);
}