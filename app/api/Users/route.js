import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function POST(request) {
  const url = "mongodb://localhost:27017/";
  const client = new MongoClient(url);
  try {
    const cli = await request.json();
    const database = await client.db("stock-management-system");
    const users = await database.collection("users");
    const user = await users.insertOne(cli);
    console.log(user);
    return NextResponse.json(user);
  } finally {
    await client.close();
  }
}
