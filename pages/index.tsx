import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(()=>{
    if(!vantaEffect){
      setVantaEffect(BIRDS({el:myRef.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: "transparent",
  color1: "#272b2d",
  color2: "#7df59a",
  colorMode: "lerpGradient",
  birdSize: 0.60,
  wingSpan: 31.00,
  speedLimit: 7.00,
  separation: 35.00,
  alignment: 18.00,
  cohesion: 40.00,
  quantity: 5.00}))
    }
    return ()=>{
      if(vantaEffect) vantaEffect.destroy()
    }
  },[vantaEffect])
  return (
    <main
      className={`h-screen w-max-full p-0 container ${inter.className}`}
    >
      <div className="min-h-full container w-full scale-10" ref={myRef}>
        <h1 className="self-center"> Welcome to my Portfolio </h1>
      </div>

    </main>
  );
}
