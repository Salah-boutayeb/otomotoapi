const { Panier } = require("../models");
Panier
const createPanier = async (req, res) => {
  try {
    const Panier = await Panier.create(req.body);
    return res.status(201).json({
      Panier,
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
    const { PanierId } = req.params;
    const Panier = await Panier.findOne({
      where: { id: PanierId },
      include: [
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
    if (Panier) {
      return res.status(200).json({ Panier });
    }
    return res
      .status(404)
      .send("Panier with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePanier = async (req, res) => {
  try {
    const { PanierId } = req.params;
    const [updated] = await Panier.update(req.body, {
      where: { id: PanierId },
    });
    if (updated) {
      const updatedPanier = await Panier.findOne({
        where: { id: PanierId },
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
    const { PanierId } = req.params;
    const deleted = await Panier.destroy({
      where: { id: PanierId },
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
