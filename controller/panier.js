const { Panier } = require("../models");

const createPanier = async (req, res) => {
  try {
    const panier = await Panier.create(req.body);
    return res.status(201).json({
      panier,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPaniers = async (req, res) => {
  try {
    const Paniers = await Panier.findAll({
      include: [],
    });
    return res.status(200).json({ Paniers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPanierById = async (req, res) => {
  try {
    const { panierId } = req.params;
    const panier = await Panier.findOne({
      where: { id: panierId },
      include: [],
    });
    if (panier) {
      return res.status(200).json({ anier });
    }
    return res.status(404).send("Panier with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePanier = async (req, res) => {
  try {
    const { panierId } = req.params;
    const [updated] = await Panier.update(req.body, {
      where: { id: panierId },
    });
    if (updated) {
      const updatedPanier = await Panier.findOne({
        where: { id: panierId },
      });
      return res.status(200).json({ Panier: updatedPanier });
    }
    throw new Error("Panier not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePanier = async (req, res) => {
  try {
    const { panierId } = req.params;
    const deleted = await Panier.destroy({
      where: { id: panierId },
    });
    if (deleted) {
      return res.status(204).send("Panier deleted");
    }
    throw new Error("Panier not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPanier,
  getAllPaniers,
  getPanierById,
  updatePanier,
  deletePanier,
};
