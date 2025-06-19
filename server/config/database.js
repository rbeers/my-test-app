const mongoose = require('mongoose');

const connectDB = async () => {
  const maxRetries = 5;
  let retries = 0;

  const attemptConnection = async () => {
    try {
      const conn = await mongoose.connect('mongodb://localhost:27017/todo-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });

      console.log(`📦 MongoDB Connected: ${conn.connection.host}`);
      return true;
    } catch (error) {
      retries++;
      console.log(`❌ MongoDB connection attempt ${retries} failed: ${error.message}`);
      
      if (retries < maxRetries) {
        console.log(`🔄 Retrying in 3 seconds... (${retries}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, 3000));
        return attemptConnection();
      } else {
        console.error('❌ Failed to connect to MongoDB after multiple attempts');
        console.error('💡 Make sure Docker Desktop is running and MongoDB container is started');
        process.exit(1);
      }
    }
  };

  await attemptConnection();
};

module.exports = connectDB; 