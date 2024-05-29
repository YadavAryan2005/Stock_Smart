import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
export async function POST(request) {
  const uri = "mongodb://localhost:27017/";
  const client = new MongoClient(uri);
  try {
    const data = await request.json();
    const database = client.db("stock-management-system");
    const products = await database.collection("product");
    const product = await products.find(data).toArray();
    console.log(product);
    return NextResponse.json(product);
  } finally {
    await client.close();
  }
}
