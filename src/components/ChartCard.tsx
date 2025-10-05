import React from "react";

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  alert?: boolean;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children, alert }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow bg-white ${
        alert ? "border-2 border-red-500" : ""
      }`}
    >
      <h2 className="text-gray-700 font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
};

export default ChartCard;
