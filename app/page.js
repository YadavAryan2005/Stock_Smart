"use client";
import Image from "next/image";
import Nav from "./component/Nav";
import Product from "./component/Product";
import ProductTable from "./component/ProductTable";
import { useEffect, useState } from "react";
import Search from "./component/Search";
import Login from "./component/Login";
import { redirect } from "next/navigation";
export default function Home() {
  const [auth, setauth] = useState(localStorage.getItem("auth"));
  const [product, setproduct] = useState([]);
  async function show123() {
    const data = await fetch("./api/mongo", {
      method: "POST",
      headers: {
        Content_Type: "application/json",
      },
      body: JSON.stringify({ uid: auth }),
    });
    const result = await data.json();
    setproduct(result);
  }
  useEffect(() => {
    if (auth === null) {
      redirect("./login");
    } else {
      async function show() {
        const data = await fetch("./api/mongo", {
          method: "POST",
          headers: {
            Content_Type: "application/json",
          },
          body: JSON.stringify({ uid: auth }),
        });
        const result = await data.json();
        setproduct(result);
      }
      show();
    }
  }, []);

  return (
    <main>
      <div className="p-2 sm:px-10">
        <Search products={product} />
        <Product show123={show123} />
        <ProductTable products={product} />
      </div>
    </main>
  );
}
