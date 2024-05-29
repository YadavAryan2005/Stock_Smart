import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function POST(request) {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);
  try {
    const f = await request.json();
    const database = client.db("stock-management-system");
    const feedbacks = await database.collection("feedback");
    const feedback = await feedbacks.insertOne(f);
    console.log(feedback);
    return NextResponse.json(feedback);
  } finally {
    await client.close();
  }
}
