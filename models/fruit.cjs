// create schema (breakdown of what our data should look like)
const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema(
    {
        name: String,
        color: String,
        readyToEat: Boolean,
    },
    {
        timestamps: true,
        
    }
)



// create Model with that Schema

// whatever we put as the collection name will be lowercased and pluralized
                           //    1. Which collection?
// 2. the schema
const Fruit = mongoose.model("Fruit", fruitSchema)


module.exports = Fruit;

