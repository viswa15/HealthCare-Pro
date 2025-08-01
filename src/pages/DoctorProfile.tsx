import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockDoctors } from '@/data/mockData';
import Header from '@/components/Header';
import usePageTitle from '@/hooks/usePageTitle';

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const doctor = mockDoctors.find(d => d.id === id);

  // Set dynamic page title based on doctor
  usePageTitle(doctor ? `${doctor.name} - ${doctor.specialization} | HealthCare Pro` : 'Doctor Profile | HealthCare Pro');

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Doctor Not Found</h1>
            <Button onClick={() => navigate('/')} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'Available Today';
      case 'busy':
        return 'Busy Today';
      case 'on-leave':
        return 'On Leave';
      default:
        return 'Unknown';
    }
  };

  const getAvailabilityVariant = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'available' as const;
      case 'busy':
        return 'busy' as const;
      case 'on-leave':
        return 'on-leave' as const;
      default:
        return 'default' as const;
    }
  };

  const availableSlots = doctor.timeSlots.filter(slot => slot.isAvailable);
  const groupedSlots = availableSlots.reduce((acc, slot) => {
    if (!acc[slot.date]) {
      acc[slot.date] = [];
    }
    acc[slot.date].push(slot);
    return acc;
  }, {} as Record<string, typeof availableSlots>);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate('/')} 
          variant="outline" 
          className="mb-6 hover:bg-secondary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Doctors
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Information */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-medical-light-blue mx-auto md:mx-0"
                  />
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{doctor.name}</h1>
                    <p className="text-xl text-primary font-semibold mb-3">{doctor.specialization}</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Star className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="font-medium">{doctor.rating} Rating</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-5 w-5 mr-2" />
                        <span>{doctor.experience} Years Experience</span>
                      </div>
                    </div>
                    
                    <Badge variant={getAvailabilityVariant(doctor.availability)} className="mb-4">
                      {getAvailabilityText(doctor.availability)}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Education & About
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Education</h3>
                    <p className="text-muted-foreground">{doctor.education}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">About</h3>
                    <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Booking */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Available Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                {doctor.availability === 'on-leave' ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Dr. {doctor.name.split(' ')[1]} is currently on leave and not accepting appointments.
                    </p>
                    <Badge variant="on-leave">On Leave</Badge>
                  </div>
                ) : availableSlots.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      No available appointments at the moment.
                    </p>
                    <Badge variant="busy">Fully Booked</Badge>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(groupedSlots).map(([date, slots]) => (
                      <div key={date} className="space-y-2">
                        <h4 className="font-semibold text-foreground">
                          {new Date(date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {slots.map((slot) => (
                            <Button
                              key={slot.id}
                              variant="outline"
                              size="sm"
                              onClick={() => navigate(`/book-appointment/${doctor.id}?date=${slot.date}&time=${slot.time}`)}
                              className="hover:bg-primary hover:text-primary-foreground"
                            >
                              {slot.time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <Button 
                      onClick={() => navigate(`/book-appointment/${doctor.id}`)}
                      className="w-full bg-gradient-primary hover:bg-primary-hover text-white mt-6"
                    >
                      Book Appointment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  Clinic Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    <strong>Address:</strong><br />
                    123 Medical Center Dr.<br />
                    Healthcare Plaza, Suite 200<br />
                    Medical City, MC 12345
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Hours:</strong> Mon-Fri 8:00 AM - 6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;