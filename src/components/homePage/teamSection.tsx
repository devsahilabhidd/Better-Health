import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: 'https://i.ibb.co/PrHkLzW/dev.jpg',
    name: 'Devender ',
    position: 'Product Manager',
    description:
      'Devender ensures that our vision aligns with user needs, overseeing the project from concept to completion and bringing strategic insight to the team.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/devender-singh-rathore/',
      },
    ],
  },
  {
    imageUrl: 'https://i.ibb.co/BC71sZx/sahil.jpg',
    name: 'Sahil',
    position: 'Frontend Developer',
    description:
      'Sahil brings the user interface to life, crafting intuitive and engaging designs that improve user experience and accessibility.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/sahil-quraishi-b40287264/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/sahilq312/?hl=en',
      },
    ],
  },
  {
    imageUrl: 'https://i.ibb.co/1T9ffr6/abhinav.jpg',
    name: 'Abhinav',
    position: 'Tech Lead',
    description:
      'Abhinav leads our development efforts, making crucial technical decisions and guiding the team in building scalable and robust solutions.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/abhinavmalviya58/',
      },

      {
        name: 'Instagram',
        url: 'https://www.instagram.com/abhinavmalviya58/?hl=en',
      },
    ],
  },
  {
    imageUrl: 'https://i.ibb.co/KFGfF7s/photo.jpg',
    name: 'Danish',
    position: 'Backend Developer',
    description:
      'Maintains backend systems to keep everything running smoothly.',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/danish-deshmukh-3255082a8/',
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Linkedin':
        return <Linkedin size='20' />;

      case 'Facebook':
        return <Facebook size='20' />;

      case 'Instagram':
        return <Instagram size='20' />;
    }
  };

  return (
    <section id='team' className='container py-24 sm:py-32 p-3'>
      <h2 className='text-3xl md:text-4xl font-bold'>
        <span className=' text-app-primary bg-clip-text'>Our Dedicated </span>
        Team
      </h2>

      <p className='mt-4 mb-10 text-xl text-muted-foreground'>
        We are a team of innovators and health enthusiasts committed to creating
        smarter, healthier lifestyles for everyone. With a diverse background in
        tech and wellness, we strive to deliver personalized solutions that fit
        your unique needs.
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
        {teamList.map(
          ({
            imageUrl,
            name,
            position,
            description,
            socialNetworks,
          }: TeamProps) => (
            <Card
              key={name}
              className='bg-muted/50 relative mt-8 flex flex-col justify-center items-center'
            >
              <CardHeader className='mt-8 flex justify-center items-center pb-2'>
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
                />
                <CardTitle className='text-center'>{name}</CardTitle>
                <CardDescription className='text-primary'>
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className='text-center pb-2'>
                <p>{description}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel='noreferrer noopener'
                      href={url}
                      target='_blank'
                      className={buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      })}
                    >
                      <span className='sr-only'>{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
