import React, { useState, useMemo } from 'react';
import { Users, Heart, Award, Clock } from 'lucide-react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import DoctorCard from '@/components/DoctorCard';
import { Card, CardContent } from '@/components/ui/card';
import { mockDoctors } from '@/data/mockData';
import usePageTitle from '@/hooks/usePageTitle';
import { useNavigate } from 'react-router-dom'; // <-- Use this for React Router

const Index = () => {
  usePageTitle('HealthCare Pro - Find & Book Doctor Appointments Online');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // <-- Use this for navigation

  const filteredDoctors = useMemo(() => {
    return mockDoctors.filter(doctor =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const stats = {
    totalDoctors: mockDoctors.length,
    availableToday: mockDoctors.filter(d => d.availability === 'available').length,
    specializations: new Set(mockDoctors.map(d => d.specialization)).size,
    avgRating: (mockDoctors.reduce((sum, d) => sum + d.rating, 0) / mockDoctors.length).toFixed(1)
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Doctor
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Book appointments with qualified healthcare professionals. 
            Your health journey starts with the right doctor.
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              placeholder="Search doctors by name or specialization..."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-medical-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.totalDoctors}</div>
                <div className="text-sm text-muted-foreground">Expert Doctors</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-medical-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.availableToday}</div>
                <div className="text-sm text-muted-foreground">Available Today</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-destructive mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.specializations}</div>
                <div className="text-sm text-muted-foreground">Specializations</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.avgRating}</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Healthcare Professionals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our network of experienced doctors across various specializations. 
              All our doctors are verified and highly qualified.
            </p>
          </div>

          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">No doctors found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse all doctors.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.slice(0, 3).map((doctor) => (
                  <div key={doctor.id} className="animate-fade-in">
                    <DoctorCard doctor={doctor} />
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  className="px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition"
                  onClick={() => navigate('/find-doctors')}
                >
                  Find More Doctors
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">HealthCare Pro</h3>
              <p className="text-background/80">
                Your trusted partner in healthcare. Connect with qualified doctors 
                and book appointments with ease.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Find Doctors</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Specializations</a></li>
                <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-background/80">
                <li>📧 support@healthcarepro.com</li>
                <li>📞 (555) 123-4567</li>
                <li>📍 123 Healthcare Ave, Medical City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 HealthCare Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;