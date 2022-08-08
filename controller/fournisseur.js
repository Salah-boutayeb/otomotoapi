const { Fournisseur, Piece } = require("../models");

const createFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.create(req.body);
    return res.status(201).json({
      fournisseur,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllFournisseur = async (req, res) => {
  try {
    const fournisseurs = await Fournisseur.findAll({
      include: [
        {
          model: Piece,
        },
      ],
    });
    return res.status(200).json({ fournisseurs });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getFournisseurById = async (req, res) => {
  try {
    const { fournisseurId } = req.params;
    const fournisseur = await Fournisseur.findOne({
      where: { id: fournisseurId },
      include: [
        { model: Piece },
        /* {
          model: models.Comment,
          as: "comments",
          include: [
            {
              model: models.User,
              as: "author",
            },
          ],
        },
        {
          model: models.User,
          as: "author",
        }, */
      ],
    });
    if (fournisseur) {
      return res.status(200).json({ fournisseur });
    }
    return res
      .status(404)
      .send("Fournisseur with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateFournisseur = async (req, res) => {
  try {
    const { fournisseurId } = req.params;
    const [updated] = await Fournisseur.update(req.body, {
      where: { id: fournisseurId },
    });
    if (updated) {
      const updatedFournisseur = await Fournisseur.findOne({
        where: { id: fournisseurId },
      });
      return res.status(200).json({ Fournisseur: updatedFournisseur });
    }
    throw new Error("Fournisseur not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteFournisseur = async (req, res) => {
  try {
    const { fournisseurId } = req.params;
    const deleted = await Fournisseur.destroy({
      where: { id: fournisseurId },
    });
    if (deleted) {
      return res.status(204).send("Fournisseur deleted");
    }
    throw new Error("Fournisseur not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createFournisseur,
  getAllFournisseur,
  getFournisseurById,
  updateFournisseur,
  deleteFournisseur,
};
