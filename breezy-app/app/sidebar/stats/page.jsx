import Image from 'next/image';
import picture1 from '../../../public/pexels-pixabay-268533.jpeg';

export default function Stats() {
  return (
    <Image
      src={picture1}
      alt='Picture of the author'
      width={200} 
      height={200} 
      blurDataURL="data:..." 
      placeholder="blur" // Optional blur-up while loading
    />
  );
}
