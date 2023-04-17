"use client";
import React, { useState } from "react";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TeoTheCoach: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return <div></div>;
};

export default TeoTheCoach;
