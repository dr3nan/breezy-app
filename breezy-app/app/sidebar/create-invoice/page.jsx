import Image from 'next/image';
import picture1 from '../../../public/pexels-anjana-c-674010.jpeg';

export default function CreateInvoice() {
  return (
    <div>
      <Image
        src={picture1}
        alt='Picture of the author'
        width={200}
        height={200}
        blurDataURL='data:...'
        placeholder='blur'
      />
    </div>
  );
}
