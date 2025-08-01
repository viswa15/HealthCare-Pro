import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Doctor } from '@/types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();

  const getAvailabilityText = (availability: Doctor['availability']) => {
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

  const getAvailabilityVariant = (availability: Doctor['availability']) => {
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

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-medical-light-blue"
            />
            <div className="absolute -bottom-1 -right-1">
              <Badge variant={getAvailabilityVariant(doctor.availability)} className="text-xs">
                {getAvailabilityText(doctor.availability)}
              </Badge>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
              {doctor.name}
            </h3>
            <p className="text-primary font-medium mb-2">{doctor.specialization}</p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="font-medium">{doctor.rating}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{doctor.experience} years</span>
              </div>
            </div>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <GraduationCap className="h-4 w-4 mr-1" />
              <span className="truncate">{doctor.education}</span>
            </div>
            
            <Button 
              onClick={() => navigate(`/doctor/${doctor.id}`)}
              className="w-full bg-gradient-primary hover:bg-primary-hover text-white"
              disabled={doctor.availability === 'on-leave'}
            >
              {doctor.availability === 'on-leave' ? 'Currently Unavailable' : 'View Profile & Book'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;