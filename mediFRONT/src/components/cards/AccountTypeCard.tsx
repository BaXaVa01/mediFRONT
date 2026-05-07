import React from 'react';
import { Link } from 'react-router-dom';

interface AccountTypeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
}

export const AccountTypeCard: React.FC<AccountTypeCardProps> = ({ title, description, icon, to }) => {
  return (
    <Link 
      to={to}
      className="flex flex-col items-center justify-center p-6 bg-white border-2 border-[#E6CBB8]/30 rounded-2xl hover:border-[#5A9BD4] hover:shadow-lg transition-all cursor-pointer h-full"
    >
      <div className="mb-4 text-[#5A9BD4]">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#1C365C] mb-2">{title}</h3>
      <p className="text-sm text-center text-[#4A628A]">{description}</p>
    </Link>
  );
};
