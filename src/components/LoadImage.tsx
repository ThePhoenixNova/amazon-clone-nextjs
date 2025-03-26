"use client"
import React, { useState } from "react";
import Image from "next/image";
//import something here for interactivity
//new import
//ssh key
interface LoadAndZoomImageProps {
  imgSrc: string;
  zoomLevel?: number;
  magnifierSize?: number;
}

const LoadAndZoomImage: React.FC<LoadAndZoomImageProps> = ({
  imgSrc,
  zoomLevel = 3,
  magnifierSize = 400,
}) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [imageSize, setImageSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [loading, setLoading] = useState(true);

  const loadImage = async () => {
    const random = Math.floor(Math.random() * 5 * 5) * 100;
    await new Promise((resolve: any) => setTimeout(resolve, random));
    setLoading(false);
  };

  React.useEffect(() => {
    loadImage();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setPosition({ x, y });
    setImageSize({ width, height });
  };

  const handleMouseLeave = () => {
    setPosition(null);
  };

  return (
    <div
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width: 500, height: 500, cursor: position ? "zoom-in" : "default",}} // Ensuring the div size matches the Image size
    >
      {loading ? (
        <div className="flex justify-center items-center w-full h-full">
          <p>Loading image...</p>
        </div>
      ) : (
        <Image
          src={imgSrc}
          alt="Product"
          width={500}
          height={500}
          className="object-cover rounded-md"
        />
      )}

      {!loading && position && (
        <div
          style={{
            backgroundPosition: `${-position.x * zoomLevel + magnifierSize}px ${-position.y * zoomLevel + magnifierSize / 2}px`,
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: `${imageSize.width * zoomLevel}px ${imageSize.height * zoomLevel}px`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "white",
            right: -860,
            top: -12,
          }}
          className="absolute w-[850px] h-[600px] shadow border rounded"
        />
      )}
    </div>
  );
};

export default LoadAndZoomImage;
