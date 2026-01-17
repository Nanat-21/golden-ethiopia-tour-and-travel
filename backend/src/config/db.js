const mongoose = require('mongoose');
 
const connectDB = async () => {
  try {
    // Attempt to connect using the URI from your .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // Success Message
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📂 Connected to Database: ${conn.connection.name}`);
  } catch (err) {
    // Error Message - shows exactly why the connection failed
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    
    // Exit process with failure code (1)
    process.exit(1);
  }
};

module.exports = connectDB;
