const { ligneCommande, Piece } = require("../models");

const createligneCommande = async (req, res) => {
  try {
    const lignecommande = await ligneCommande.create(req.body);
    return res.status(201).json({
      lignecommande,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllligneCommandes = async (req, res) => {
  try {
    const lignecommandes = await ligneCommande.findAll({
      include: [
        {
          model: Piece,
        },
      ],
    });
    res.append("X-Total-Count", lignecommandes.length);
    res.append("Access-Control-Expose-Headers", "X-Total-Count");
    return res.status(200).json({ lignecommandes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getligneCommandeById = async (req, res) => {
  try {
    const { lignecommandeId } = req.params;
    const lignecommande = await ligneCommande.findOne({
      where: { id: lignecommandeId },
      include: [],
    });
    if (lignecommande) {
      return res.status(200).json({ lignecommande });
    }
    return res
      .status(404)
      .send("ligneCommande with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateligneCommande = async (req, res) => {
  try {
    const { lignecommandeId } = req.params;
    const [updated] = await ligneCommande.update(req.body, {
      where: { id: lignecommandeId },
    });
    if (updated) {
      const updatedligneCommande = await ligneCommande.findOne({
        where: { id: lignecommandeId },
      });
      return res.status(200).json({ ligneCommande: updatedligneCommande });
    }
    throw new Error("ligneCommande not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteligneCommande = async (req, res) => {
  try {
    const { lignecommandeId } = req.params;
    const deleted = await ligneCommande.destroy({
      where: { id: lignecommandeId },
    });
    if (deleted) {
      return res.status(204).send("ligneCommande deleted");
    }
    throw new Error("ligneCommande not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createligneCommande,
  getAllligneCommandes,
  getligneCommandeById,
  updateligneCommande,
  deleteligneCommande,
};
