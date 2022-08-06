sequelize-cli model:generate --name Category --attributes nom:String
sequelize-cli model:generate --name PiaceImage --attributes url:String,pieceId:integer
sequelize-cli model:generate --name Piece --attributes VIN:String, reference:String, description:JSON,typeVehicule:String,categoryId:integer,fournisseurId:integer,panierId:integer
sequelize-cli model:generate --name Fournisseur --attributes nom:String,type:String
sequelize-cli model:generate --name Commande --attributes dateCommande:Date ,dateLivraison:Date ,userId:integer, 
sequelize-cli model:generate --name Paiement --attributes datePaiement:Date , methode:String ,totale:String,commandeId:integer
sequelize-cli model:generate --name Panier --attributes userId:integer
sequelize-cli model:generate --name ligneCommande --attributes pieceId:integer,commandeId:integer,isDelivered:Boolean



