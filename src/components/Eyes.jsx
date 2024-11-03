import { useEffect, useState } from "react";

export default function Eyes() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const maxDistance = 15; 
      const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);

      const angle = Math.atan2(deltaY, deltaX);
      const translateX = Math.cos(angle) * distance;
      const translateY = Math.sin(angle) * distance;

      setPosition({ x: translateX, y: translateY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="relative w-full bg-center bg-cover h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-1/2 left-1/2 flex gap-10 -translate-x-1/2 -translate-y-1/2">
          
          {/* Left Eye */}
          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-black relative">
              <div
                className="w-4 h-4 rounded-full bg-white absolute"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`
                }}
              ></div>
            </div>
          </div>

          <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-white">
            <div className="w-2/3 h-2/3 flex items-center justify-center rounded-full bg-black relative">
              <div
                className="w-4 h-4 rounded-full bg-white absolute"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`
                }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
