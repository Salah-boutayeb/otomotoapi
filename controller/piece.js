const { Piece } = require("../models");
Piece
const createPiece = async (req, res) => {
  try {
    const Piece = await Piece.create(req.body);
    return res.status(201).json({
      Piece,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPieces = async (req, res) => {
  try {
    const Pieces = await Piece.findAll({
      include: [],
    });
    return res.status(200).json({ Pieces });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPieceById = async (req, res) => {
  try {
    const { PieceId } = req.params;
    const Piece = await Piece.findOne({
      where: { id: PieceId },
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
    if (Piece) {
      return res.status(200).json({ Piece });
    }
    return res
      .status(404)
      .send("Piece with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePiece = async (req, res) => {
  try {
    const { PieceId } = req.params;
    const [updated] = await Piece.update(req.body, {
      where: { id: PieceId },
    });
    if (updated) {
      const updatedPiece = await Piece.findOne({
        where: { id: PieceId },
      });
      return res.status(200).json({ Piece: updatedPiece });
    }
    throw new Error("Piece not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePiece = async (req, res) => {
  try {
    const { PieceId } = req.params;
    const deleted = await Piece.destroy({
      where: { id: PieceId },
    });
    if (deleted) {
      return res.status(204).send("Piece deleted");
    }
    throw new Error("Piece not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPiece,
  getAllPieces,
  getPieceById,
  updatePiece,
  deletePiece,
};
