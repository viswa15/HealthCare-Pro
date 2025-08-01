import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { mockDoctors } from '@/data/mockData';
import { AppointmentForm } from '@/types';
import Header from '@/components/Header';
import usePageTitle from '@/hooks/usePageTitle';

const BookAppointment = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const preSelectedDate = searchParams.get('date') || '';
  const preSelectedTime = searchParams.get('time') || '';
  
  const doctor = mockDoctors.find(d => d.id === id);
  
  // Set dynamic page title based on doctor
  usePageTitle(doctor ? `Book Appointment with ${doctor.name} | HealthCare Pro` : 'Book Appointment | HealthCare Pro');
  
  const [formData, setFormData] = useState<AppointmentForm>({
    patientName: '',
    patientEmail: '',
    date: preSelectedDate,
    time: preSelectedTime
  });
  
  const [errors, setErrors] = useState<Partial<AppointmentForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const validateForm = (): boolean => {
    const newErrors: Partial<AppointmentForm> = {};
    
    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }
    
    if (!formData.patientEmail.trim()) {
      newErrors.patientEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.patientEmail)) {
      newErrors.patientEmail = 'Please enter a valid email address';
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment with ${doctor.name} has been confirmed for ${new Date(formData.date).toLocaleDateString()} at ${formData.time}.`,
      duration: 5000,
    });
  };

  const handleInputChange = (field: keyof AppointmentForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const availableSlots = doctor.timeSlots.filter(slot => slot.isAvailable);
  const availableDates = [...new Set(availableSlots.map(slot => slot.date))];
  const availableTimesForDate = formData.date 
    ? availableSlots.filter(slot => slot.date === formData.date).map(slot => slot.time)
    : [];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card className="text-center shadow-medical bg-gradient-card">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-medical-green mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-foreground mb-4">
                  Appointment Confirmed!
                </h1>
                <div className="space-y-2 text-muted-foreground mb-6">
                  <p><strong>Doctor:</strong> {doctor.name}</p>
                  <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                  <p><strong>Time:</strong> {formData.time}</p>
                  <p><strong>Patient:</strong> {formData.patientName}</p>
                  <p><strong>Email:</strong> {formData.patientEmail}</p>
                </div>
                <div className="space-y-3">
                  <Button 
                    onClick={() => navigate(`/doctor/${doctor.id}`)}
                    variant="outline"
                    className="w-full"
                  >
                    View Doctor Profile
                  </Button>
                  <Button 
                    onClick={() => navigate('/')}
                    className="w-full bg-gradient-primary hover:bg-primary-hover text-white"
                  >
                    Back to Doctors
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate(`/doctor/${doctor.id}`)} 
          variant="outline" 
          className="mb-6 hover:bg-secondary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Doctor Profile
        </Button>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medical bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Book Appointment</CardTitle>
              <div className="text-center">
                <p className="text-muted-foreground">
                  Schedule your appointment with <span className="font-semibold text-primary">{doctor.name}</span>
                </p>
                <p className="text-sm text-muted-foreground">{doctor.specialization}</p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="patientName" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Patient Name *
                    </Label>
                    <Input
                      id="patientName"
                      type="text"
                      value={formData.patientName}
                      onChange={(e) => handleInputChange('patientName', e.target.value)}
                      placeholder="Enter your full name"
                      className={errors.patientName ? 'border-destructive' : ''}
                    />
                    {errors.patientName && (
                      <p className="text-sm text-destructive">{errors.patientName}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="patientEmail" className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="patientEmail"
                      type="email"
                      value={formData.patientEmail}
                      onChange={(e) => handleInputChange('patientEmail', e.target.value)}
                      placeholder="Enter your email"
                      className={errors.patientEmail ? 'border-destructive' : ''}
                    />
                    {errors.patientEmail && (
                      <p className="text-sm text-destructive">{errors.patientEmail}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      Appointment Date *
                    </Label>
                    <Select
                      value={formData.date}
                      onValueChange={(value) => {
                        handleInputChange('date', value);
                        handleInputChange('time', ''); // Reset time when date changes
                      }}
                    >
                      <SelectTrigger className={errors.date ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select a date" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDates.map(date => (
                          <SelectItem key={date} value={date}>
                            {new Date(date).toLocaleDateString('en-US', { 
                              weekday: 'long', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.date && (
                      <p className="text-sm text-destructive">{errors.date}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      Appointment Time *
                    </Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => handleInputChange('time', value)}
                      disabled={!formData.date}
                    >
                      <SelectTrigger className={errors.time ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimesForDate.map(time => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.time && (
                      <p className="text-sm text-destructive">{errors.time}</p>
                    )}
                  </div>
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:bg-primary-hover text-white py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;