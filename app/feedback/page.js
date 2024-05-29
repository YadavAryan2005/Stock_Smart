"use client";
import { React, useState, useEffect } from "react";
import Feedback from "../component/Feedback";
import { redirect } from "next/navigation";
function feedback() {
  const [auth, setauth] = useState(localStorage.getItem("auth"));
  return (
    <div className="px-2">
      {auth === null ? redirect("../login") : <Feedback />}
    </div>
  );
}

export default feedback;
