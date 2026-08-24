const mongoose = require('mongoose');
require('dotenv').config();
const Resource = require('./models/Resource');

const mockResources = [
  {
    name: 'City Care Hospital',
    category: 'Hospital',
    contactNumber: '+91 9876543210',
    availableUnits: 12,
    location: {
      type: 'Point',
      coordinates: [77.6321, 27.4924], // [longitude, latitude]
      address: 'Mathura Junction Road'
    }
  },
  {
    name: 'LifeLine Oxygen Depot',
    category: 'Oxygen Supplier',
    contactNumber: '+91 9812345678',
    availableUnits: 45,
    location: {
      type: 'Point',
      coordinates: [77.6732, 27.5011],
      address: 'NH-19 Highway'
    }
  },
  {
    name: 'Apex Blood Bank',
    category: 'Blood Bank',
    contactNumber: '+91 9998887776',
    availableUnits: 8,
    location: {
      type: 'Point',
      coordinates: [77.5840, 28.3200],
      address: 'Greater Noida Sector 1'
    }
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Resource.deleteMany(); // Clear old data
    await Resource.insertMany(mockResources);
    console.log('✅ Emergency Resources Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error Seeding Data: ${error.message}`);
    process.exit(1);
  }
};

seedData();