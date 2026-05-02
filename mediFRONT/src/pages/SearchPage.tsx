import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockDoctors } from '../utils/mockData';
import DoctorCard from '../components/cards/DoctorCard';
import SearchMap from '../components/map/SearchMap';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const locationQuery = searchParams.get('loc');

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] bg-slate-50">
      {/* Left Side: Doctor List */}
      <div className="w-full lg:w-[40%] p-4 lg:p-6 lg:overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Doctores disponibles</h1>
          <p className="text-slate-500">{mockDoctors.length} especialistas encontrados</p>
        </div>
        
        <div className="flex flex-col gap-4">
          {mockDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>

      {/* Right Side: Sticky Map */}
      <div className="w-full lg:w-[60%] h-[400px] lg:h-[calc(100vh-64px)] lg:sticky lg:top-16 self-start">
        <div className="h-full p-0 lg:p-4">
          <SearchMap doctors={mockDoctors} targetLocation={locationQuery} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
