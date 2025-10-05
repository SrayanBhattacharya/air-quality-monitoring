import React from "react";
import type { IconType } from "react-icons";

interface MetricCardProps {
  title: string;
  value: number | string;
  icon: IconType;
  color?: string; // default icon color
  alert?: boolean; // true if threshold exceeded
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  color = "text-blue-500",
  alert = false,
}) => {
  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow bg-white ${
        alert ? "border-2 border-red-500" : ""
      }`}
    >
      <div className={`p-3 rounded-full bg-gray-100 ${color}`}>
        <Icon size={24} />
      </div>
      <div className="ml-4">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default MetricCard;
