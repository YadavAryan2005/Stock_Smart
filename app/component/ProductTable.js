"use client";
import React from "react";

const ProductTable = (props) => {
  return (
    <div className="overflow-x-auto overflow-y-clip bg-white p-8 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Display Current Stock</h1>
      {props.products.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Description</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border border-gray-300">
                  {product.name}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {product.description}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {product.price}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {product.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-4 text-gray-500 md:text-2xl font-serif">
          No stock available
        </div>
      )}
    </div>
  );
};

export default ProductTable;
