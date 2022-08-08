const { Piece, Category, PieceImage } = require("../models");

const createPiece = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.status(201).json({
    mssg: "thank u",
  });
  /* try {
    const piece = await Piece.create(req.body);
    const images = await PieceImage.create({
      pieceId: piece.id,
      url: req.body.image,
    });
    return res.status(201).json({
      piece,
      images,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } */
};

const getAllpieces = async (req, res) => {
  try {
    const pieces = await Piece.findAll({
      include: [{ model: PieceImage }],
    });
    const images = pieces.PieceImages;
    console.log(images);
    return res.status(200).json({ pieces });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getPieceById = async (req, res) => {
  try {
    const { pieceId } = req.params;
    const piece = await Piece.findOne({
      where: { id: pieceId },
      include: [
        { model: PieceImage },
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

    console.log(piece.PieceImages);
    if (piece) {
      return res.status(200).json({ piece });
    }
    return res.status(404).send("Piece with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePiece = async (req, res) => {
  try {
    const { pieceId } = req.params;
    const [updated] = await Piece.update(req.body, {
      where: { id: pieceId },
    });
    if (updated) {
      const updatedPiece = await Piece.findOne({
        where: { id: pieceId },
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
    const { pieceId } = req.params;
    const deleted = await Piece.destroy({
      where: { id: pieceId },
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
  getAllpieces,
  getPieceById,
  updatePiece,
  deletePiece,
};
