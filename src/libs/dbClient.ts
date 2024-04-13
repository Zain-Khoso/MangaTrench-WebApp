// Lib Imports.
import mongoose, { Schema, model, Model } from 'mongoose';

// Types.
type MangaCollection = {
  _id?: string;
  ChapterNum: string;
  pages: string[];
};

// Schema.
const schema = new Schema<MangaCollection>({
  _id: {
    type: String,
    required: false,
  },
  ChapterNum: {
    type: String,
    required: true,
  },
  pages: {
    type: [String],
    required: true,
  },
});

// This function accepts a string as its one and only parameter.
// Then uses this string as the name of the model to return.
export const getModel = function (
  collectionName: string
): Model<MangaCollection> {
  if (mongoose.modelNames().includes(collectionName))
    return mongoose.models[collectionName];

  return model<MangaCollection>(collectionName, schema, collectionName);
};

// This function gets all the collection names inside of mongodb.
export const getCollectionNames = async function (): Promise<string[]> {
  // If a connection a not already stablished then first stablish a connection.
  if (!mongoose?.connection?.readyState) await connectToMongodb();

  const collections = await mongoose.connection.listCollections();
  return collections.map((item) => item.name);
};

// This function connects to mongodb via a connection string in the env variables.
// And it returns nothing back.
export const connectToMongodb = async function () {
  // If there is already a connection stablished then return.
  if (mongoose.connection.readyState) return;

  // Connecting to mongodb.
  try {
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (err) {
    throw new Error('Unable to connect to mongodb.');
  }
};
