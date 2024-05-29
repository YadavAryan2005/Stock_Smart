"use client";
import React, { useState } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";
function Login() {
  const [auth, setauth] = useState(localStorage.getItem("auth"));
  async function storeclients(e) {
    try {
      const responce = await fetch("../api/Users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(e),
      });
      if (responce.ok) {
        const res = await responce.json();
        localStorage.setItem("auth", res.insertedId);
        setauth(localStorage.getItem("auth"));
        alert("login successfully");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert("Login failed due to network issue");
    }
  }
  return auth != null ? (
    redirect("//")
  ) : (
    <div className="min-h-[84vh] flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img
          src="google-logo.png"
          alt="Google Logo"
          className="w-24 mx-auto mb-4"
        />
        <GoogleOAuthProvider clientId="631948561584-2q28c13trdhq6p71bi38umnbf6o3jmos.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              storeclients(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default Login;
