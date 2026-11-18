import recipesService from "../services/recipesService.js";

export function getAll(req, res) {
  res.json([]); // Récupérer toutes les recettes
}

export async function getById(req, res) {
  const { id } = req.params;
  const recipe = await recipesService.getById(id);

  if (!recipe) {
    return res.status(404).json({ error: "Recette introuvable" });
  }

  res.json(recipe); // Récupérer une recette par son ID
}

export async function create(req, res) {
  await recipesService.create(req.body);
  res.status(201).json(req.body);
}

export async function update(req, res) {
  await recipesService.update(req.params.id, req.body);
  res.json({ id: req.params.id, ...req.body });
}

export async function remove(req, res) {
  await recipesService.delete(req.params.id)
  res.sendStatus(204);
}