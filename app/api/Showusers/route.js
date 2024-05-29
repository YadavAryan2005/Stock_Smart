import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function GET(request) {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);
  try {
    const database = client.db("stock-management-system");
    const users = await database.collection("users");
    const user = await users.find().toArray();
    console.log(user);
    return NextResponse.json(user);
  } finally {
    await client.close();
  }
}
