import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Status from '../../../../public/assets/status_metalka.jpg'
import Premijer from '../../../../public/assets/premijer_plus_metalka.jpg'
import Emporio from '../../../../public/assets/emporio_metalka.jpeg'
import SetQOG from '../../../../public/assets/set_q_og_metalka.jpg'
import Kombo from '../../../../public/assets/kombo_metalka.jpg'
import Kutija from '../../../../public/assets/instalacione_kutije_metalka.jpg'
import Pribor from '../../../../public/assets/elektroinstalacioni_pribor_metalka.jpg'
import Zvono from '../../../../public/assets/art-805.jpg'
import Kabel from '../../../../public/assets/Prnosne-nove2-1.jpg'
import Sklopka from '../../../../public/assets/ms-sklopka.jpg'
import MiniOG from '../../../../public/assets/mini_og_metalka.jpg'
import Razdjelnik from '../../../../public/assets/razvodne_table_metalka.jpg'
import { CategoryItem } from './Interfaces';



// Definisanje kategorija
const categories: CategoryItem[] = [
    { name: 'Status', imageSrc: Status, href: '/categories/status' },
    { name: 'Premijer+', imageSrc: Premijer, href: '/categories/premijer' },
    { name: 'Emporio', imageSrc: Emporio, href: '/categories/emporio' },
    { name: 'Set-Q OG', imageSrc: SetQOG, href: '/categories/set-q' },
    { name: 'Mini-OG', imageSrc: MiniOG, href: '/categories/mini-og' },
    { name: 'Radjelni ormari', imageSrc: Razdjelnik, href: '/categories/razdjelni-ormari' },
    { name: 'Modularni program', imageSrc: Kombo, href: '/categories/kombo' },
    { name: 'Instalacione kutije', imageSrc: Kutija, href: '/categories/kutija' },
    { name: 'Elektroinstalacioni pribor', imageSrc: Pribor, href: '/categories/pribor' },
    { name: 'Produžni kabeli', imageSrc: Kabel, href: '/categories/kabel' },
    { name: 'Kućna zvona', imageSrc: Zvono, href: '/categories/zvono' },
    { name: 'MS sklopke', imageSrc: Sklopka, href: '/categories/sklopka' },
  ];
  
  const CategoryBanner: React.FC = () => {
    return (
        <>
        <h3 className='grid align-baseline text-left text-2xl ml-7 my-10'>Izaberi kategoriju</h3>
      <div className="grid grid-cols-3 gap-5 pt-10 mx-4">
        {categories.map((category) => (
          <Link key={category.name}
                href={category.href}
                passHref
                className="block relative hover:brightness-125 hover:scale-105 transition duration-300">
            
              <Image src={category.imageSrc} 
                     alt={category.name} 
                     width={500} 
                     height={500}
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     priority={false}
                     className='object-cover rounded-xl' />
              <div 
                 className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full text-white text-center py-2 rounded-xl">{category.name}
              </div>
            
          </Link>
        ))}
      </div>
      </>
    );
  };
  
  export default CategoryBanner;