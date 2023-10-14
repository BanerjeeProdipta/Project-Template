import React from "react";

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="border w-60 border-gray-600 rounded-b">
      <img src={image} alt="campaign banner" className="w-60" />

      <div className="p-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="font-sm">14-Oct-2023</p>
        </div>

        <a href="/campaign/1" className="text-sm text-green-600">
          Details
        </a>
      </div>
    </div>
  );
};

export default Card;
