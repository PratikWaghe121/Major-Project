const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main()
.then((es) => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
})

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner: "65aa262cb90aa45519992a08"}));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");

};

initDB();