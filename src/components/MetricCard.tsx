import React from "react";
import type { IconType } from "react-icons";

interface MetricCardProps {
  title: string;
  value: number | string;
  icon: IconType;
  color?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  color = "text-blue-500",
}) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow">
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
