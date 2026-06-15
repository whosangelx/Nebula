const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Song = require('./models/Song');

dotenv.config();

const clearDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔌 Conectado ao MongoDB...");

    // APAGA TODAS AS MÚSICAS
    await Song.deleteMany({});
    
    console.log(`🧹 Banco de dados limpo!`);
    console.log(`🚀 Agora use o botão 'Subir Música' no site para enviar seus arquivos.`);
    
    process.exit();
  } catch (err) {
    console.error("❌ Erro:", err);
    process.exit(1);
  }
};

clearDB();