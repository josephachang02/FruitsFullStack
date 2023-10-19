// create schema (breakdown of what our data should look like)
/* eslint-disable no-undef */
const mongoose = require('mongoose');

const veggieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            
        },
        color: String,
        readyToEat: Boolean,
        age: Number,
        isHealthy: Boolean,
    },
    {
        timestamps: true,
        
    }
)



// create Model with that Schema

// whatever we put as the collection name will be lowercased and pluralized
                           //    1. Which collection?
// 2. the schema
const Veggie = mongoose.model("Veggie", veggieSchema)


module.exports = Veggie;
