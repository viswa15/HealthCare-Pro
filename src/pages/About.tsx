import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Clock, Award } from 'lucide-react';
import usePageTitle from '@/hooks/usePageTitle';

const About = () => {
  usePageTitle('About Us - HealthCare Pro');

  const stats = [
    { icon: Users, label: 'Doctors', value: '500+' },
    { icon: Heart, label: 'Patients Served', value: '10,000+' },
    { icon: Clock, label: 'Years of Service', value: '15+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
  ];

  const values = [
    {
      title: 'Patient-Centered Care',
      description: 'We put our patients at the heart of everything we do, ensuring personalized and compassionate healthcare services.'
    },
    {
      title: 'Medical Excellence',
      description: 'Our team of qualified healthcare professionals is committed to delivering the highest standards of medical care.'
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative approaches to improve patient outcomes and experiences.'
    },
    {
      title: 'Accessibility',
      description: 'Making quality healthcare accessible and convenient for everyone through our digital platform.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About HealthCare Pro
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting patients with qualified healthcare professionals through innovative technology 
            and compassionate care. Your health is our priority.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
              To revolutionize healthcare accessibility by providing a seamless digital platform 
              that connects patients with qualified healthcare professionals. We strive to make 
              quality healthcare convenient, affordable, and accessible to everyone, regardless 
              of their location or circumstances.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              Our dedicated team consists of healthcare professionals, technology experts, 
              and customer service specialists who work tirelessly to ensure you receive 
              the best possible care. From our experienced doctors to our innovative 
              development team, everyone at HealthCare Pro is committed to improving 
              your healthcare experience.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;