const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a resource/facility name'],
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Hospital', 'Oxygen Supplier', 'Blood Bank', 'Ambulance']
  },
  contactNumber: {
    type: String,
    required: true
  },
  availableUnits: {
    type: Number,
    default: 0
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  // GeoJSON Location Format
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    // IMPORTANT: GeoJSON array order is ALWAYS [longitude, latitude]
    coordinates: {
      type: [Number],
      required: true
    },
    address: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create 2dsphere index for real-time geospatial/distance calculations
ResourceSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Resource', ResourceSchema);