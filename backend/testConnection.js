import mongoose from 'mongoose';
import { config } from './config.js';

const testConnection = async () => {
  try {
    console.log('🔍 Testing database connection...');
    console.log(`📡 MongoDB URL: ${config.MONGO_URL}`);
    
    // Test connection
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Database connection successful!');
    console.log(`🏠 Host: ${mongoose.connection.host}`);
    console.log(`📊 Database: ${mongoose.connection.name}`);
    console.log(`🔌 Port: ${mongoose.connection.port}`);
    
    // Test if we can perform operations
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`📁 Collections found: ${collections.length}`);
    collections.forEach(collection => {
      console.log(`  - ${collection.name}`);
    });
    
    await mongoose.connection.close();
    console.log('🔌 Connection closed successfully');
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\n💡 Troubleshooting tips:');
    console.log('1. Make sure MongoDB is running');
    console.log('2. Check if the MongoDB URL is correct');
    console.log('3. Verify network connectivity');
    console.log('4. Check MongoDB authentication if required');
    process.exit(1);
  }
};

testConnection(); 