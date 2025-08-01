import { useState } from 'react';
import { mockDoctors } from '@/data/mockData';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import DoctorCard from '@/components/DoctorCard';
import usePageTitle from '@/hooks/usePageTitle';

const DOCTORS_PER_PAGE = 6;

const FindDoctors = () => {
  usePageTitle('Find Doctors - HealthCare Pro');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(DOCTORS_PER_PAGE);

  const filteredDoctors = mockDoctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleDoctors = filteredDoctors.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + DOCTORS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Find Your Doctor
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Search and connect with qualified healthcare professionals
          </p>
          
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search doctors by name or specialization..."
          />
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {visibleDoctors.length} of {filteredDoctors.length} doctors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No doctors found matching your search criteria.
            </p>
          </div>
        )}

        {filteredDoctors.length > visibleDoctors.length && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition"
              onClick={handleLoadMore}
            >
              Load More Doctors
            </button>
          </div>
        )}

        {filteredDoctors.length > 0 && filteredDoctors.length <= visibleDoctors.length && (
          <div className="text-center mt-8 text-muted-foreground">
            No more doctors left.
          </div>
        )}
      </main>
    </div>
  );
};

export default FindDoctors;