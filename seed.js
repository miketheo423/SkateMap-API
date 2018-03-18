const db = require('./models');

let spotList = [
  {
    name: "Polejammer",
    description: 'Sick freakin polejam',
    images: [],
    userId: 1234,
    features: ['polejam', 'flatledges'],
    coordinate: {
      latitude: 0,
      longitude: 2
    }
  },
  {
    name: "Bees Knees",
    description: 'Rad spot bruh',
    images: [],
    userId: 1234,
    features: ['halfpipe', 'flatledges'],
    coordinate: {
      latitude: 2222,
      longitude: 7284
    }
  }
];

db.Spot.remove({}, (err, res) => {
  if(err) return console.log("Error: " + err);
  console.log('All Spots Deleted');
});

db.Spot.create(spotList, (err, spot) => {
  if(err) return console.log("Error: " + err);
  console.log("New spot was created", spot._id);
  process.exit();
});