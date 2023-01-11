import Image from "next/image"
import picture1 from '../../../public/tree-736885__480.jpeg'

export default function Invoices() {
  return (
    
    <Image
    src={picture1}
    alt='Picture of the author'
    width={200} 
    height={200} 
    blurDataURL="data:..." 
    placeholder="blur" // Optional blur-up while loading
  />
  )
}