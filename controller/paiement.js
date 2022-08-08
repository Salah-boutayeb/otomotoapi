const { Paiement } = require("../models");

const createPaiement = async (req, res) => {
  try {
    const paiement = await Paiement.create(req.body);
    return res.status(201).json({
      paiement,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllpaiements = async (req, res) => {
  try {
    const paiements = await Paiement.findAll({
      include: [],
    });
    return res.status(200).json({ paiements });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPaiementById = async (req, res) => {
  try {
    const { paiementId } = req.params;
    const paiement = await Paiement.findOne({
      where: { id: paiementId },
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
    if (paiement) {
      return res.status(200).json({ paiement });
    }
    return res
      .status(404)
      .send("Paiement with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePaiement = async (req, res) => {
  try {
    const { paiementId } = req.params;
    const [updated] = await Paiement.update(req.body, {
      where: { id: paiementId },
    });
    if (updated) {
      const updatedPaiement = await Paiement.findOne({
        where: { id: paiementId },
      });
      return res.status(200).json({ Paiement: updatedPaiement });
    }
    throw new Error("Paiement not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePaiement = async (req, res) => {
  try {
    const { paiementId } = req.params;
    const deleted = await Paiement.destroy({
      where: { id: paiementId },
    });
    if (deleted) {
      return res.status(204).send("Paiement deleted");
    }
    throw new Error("Paiement not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPaiement,
  getAllpaiements,
  getPaiementById,
  updatePaiement,
  deletePaiement,
};
