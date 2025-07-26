"use client";
import React from "react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.marginRight = "0px";
    setIsLoaded(true);
  }, []);

  const roles = ["Web Developer", "Game Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    document.body.style.marginRight = "0px";
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 h-screen relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3b82f6_0,transparent_100%)] opacity-20" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div
            className={`space-y-6 transition-all duration-800 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}>
            <h1
              className={`text-5xl md:text-6xl font-bold text-white mb-4 transition-all duration-800 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}>
              Hi, I&apos;m a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {roles[currentRoleIndex]}
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-gray-300 mb-8 transition-all duration-800 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}>
              Welcome to my portfolio. Come explore the various creative and
              innovative projects I&apos;ve developed with passion and dedication.
            </p>

            <div
              className={`space-x-4 transition-all duration-800 delay-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}>
              <a
                href="#myprojects"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 inline-block">
                View Projects
              </a>
              <a
                href="mailto:muhammadalmahdi016@gmail.com"
                className="bg-transparent border-2 border-gray-400 text-white px-8 py-3 rounded-full font-medium hover:border-gray-300 transition-all duration-300 inline-block">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
