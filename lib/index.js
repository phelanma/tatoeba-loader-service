const MongoDriver = require('mongodb-driver');

const {
  DB_COLLECTION, 
  DB_WRITE_OPTIONS = {upsert: true},
  DB_URL
} = process.env;

// initialize
const repo = new MongoDriver();
repo.createWriteStream(
  DB_COLLECTION, 
  DB_WRITE_OPTIONS
  { upsert: true }
);


repo.connect(DB_URL);