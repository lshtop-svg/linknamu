import { MongoClient, type Collection } from "mongodb";

type ClickDoc = { _id: string; count: number };

const globalForMongo = globalThis as unknown as {
  mongoClient?: Promise<MongoClient>;
};

// MONGODB_URI가 없으면 null을 반환해 클릭 집계 없이도 페이지가 동작하게 한다
export async function getClicksCollection(): Promise<Collection<ClickDoc> | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  globalForMongo.mongoClient ??= new MongoClient(uri).connect();
  const client = await globalForMongo.mongoClient;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
