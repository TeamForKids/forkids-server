import mongoose from "mongoose";
import config from "../config";
import Event from "../models/Event";
import Parking from "../models/Parking";
import Place from "../models/Place";
import TopPlace from "../models/TopPlace";

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);

        mongoose.set('autoCreate', true);

        console.log("Mongoose Connected ...");
  
        Parking.createCollection().then(function (collection) {
            console.log("Parking Collection is created!");
        });

        Place.createCollection().then(function (collection) {
            console.log("Place Collection is created!");
        });

        TopPlace.createCollection().then(function (collection) {
            console.log("TopPlace Collection is created!");
        });
    
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;