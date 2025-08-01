import mongoose from "mongoose";
import { config } from "../config.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`✅ Database connected: ${conn.connection.host}`);
    console.log(`📊 Database name: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ Database connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ Database disconnected');
    });
    
    // Graceful shutdown
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('🔄 Database connection closed through app termination');
      process.exit(0);
    });
    
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
    process.exit(1);
  }
};
