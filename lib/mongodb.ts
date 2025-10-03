import { MongoClient } from "mongodb";

if(!process.env.MONGODB_URI) {
    throw new Error("Please add your MONGODB_URI to .env.local.");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(uri ,options);
clientPromise = client.connect();

export default clientPromise;