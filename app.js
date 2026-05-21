const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");

app.get("/", (req, res) => {
    res.send("Hello World!");

})
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});
app.get("/test",async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Calicut",
        country: "India",
    });
    await sampleListing.save();
    console.log("Sample listing saved");
    res.send("Sample listing saved");
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});

