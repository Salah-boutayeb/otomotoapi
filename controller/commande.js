const { Commande, Piece } = require("../models");

const createCommande = async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    return res.status(201).json({
      commande,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCommandes = async (req, res) => {
  try {
    const commandes = await Commande.findAll({
      include: [],
    });
    res.append("X-Total-Count", commandes.length);
    res.append("Access-Control-Expose-Headers", "X-Total-Count");
    return res.status(200).json({ commandes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCommandeById = async (req, res) => {
  try {
    const { commandeId } = req.params;
    const commande = await Commande.findOne({
      where: { id: commandeId },
      include: [],
    });
    if (commande) {
      return res.status(200).json({ commande });
    }
    return res
      .status(404)
      .send("Commande with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCommande = async (req, res) => {
  try {
    const { commandeId } = req.params;
    const [updated] = await Commande.update(req.body, {
      where: { id: commandeId },
    });
    if (updated) {
      const updatedCommande = await Commande.findOne({
        where: { id: commandeId },
      });
      return res.status(200).json({ Commande: updatedCommande });
    }
    throw new Error("Commande not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCommande = async (req, res) => {
  try {
    const { commandeId } = req.params;
    const deleted = await Commande.destroy({
      where: { id: commandeId },
    });
    if (deleted) {
      return res.status(204).send("Commande deleted");
    }
    throw new Error("Commande not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createCommande,
  getAllCommandes,
  getCommandeById,
  updateCommande,
  deleteCommande,
};
