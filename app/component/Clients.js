"use client";

import React, { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setclients] = useState([]);
  useEffect(() => {
    async function show() {
      const data = await fetch("../api/Showusers");
      const result = await data.json();
      setclients(result);
    }
    show();
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8">
        Our Clients
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={"" + client.picture}
              alt={client.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-900">
              {client.name}
            </h2>
            <p className="text-gray-600">{client.email}</p>
            <button
              className="mt-4 text-blue-500 hover:underline"
              onClick={() => {
                alert(
                  "This information is private you can email the client for any additoinal information thank you!"
                );
              }}
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
