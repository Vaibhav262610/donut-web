import React from "react";
import Header from "./components/Header";
import Mid from "./components/Mid";
import Footer from "./components/Footer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Donut } from "./components/Donut";

const App = () => {
  return (
    <>
      <div className="h-screen absolute top-0 w-full">
        <div className="fixed h-screen w-full">
        <Canvas shadows>
          <ambientLight intensity={2} />
          {/* <OrbitControls /> */}
          <Donut />
        </Canvas>
        </div>
      </div>
      <Header />
      <Mid />
      <Footer />
    </>
  );
};

export default App;
