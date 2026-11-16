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

export function create(req, res) {
  res.status(201).json(req.body);
}

export function update(req, res) {
  res.json({ id: req.params.id, ...req.body });
}

export function remove(req, res) {
  res.sendStatus(204);
}