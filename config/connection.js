const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://iamnoor:iamnoor@cluster0.q3hjf.mongodb.net/Fitness_Tracker?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
