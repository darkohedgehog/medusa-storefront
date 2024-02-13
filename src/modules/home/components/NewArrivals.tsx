"use client";
import Container from "@modules/common/components/Container";
import Slider from "react-slick";
import NextArrow from "@modules/common/components/NextArrow";
import PrevArrow from "@modules/common/components/PrevArrow";
import React, { useEffect, useState } from 'react';
import Image from "next/image";


interface Product {
  thumbnail: string | undefined;
  title: string;
  id: number;
  name: string;
  image: string;
}



const NewArrival = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  useEffect(() => {
    // Funkcija za dohvat proizvoda sa Medusa backend-a
    fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products?`, {
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
     //console.log(data); 
     setProducts(data.products || []); // Dodao sam || [] kao fallback
    })

  }, []);

  

 
 

  return (
    <Container className="-mt-60">
    <Slider {...settings}>
      {products?.map((product) => (
        <div key={product.id} className='px-2'>
          <div className='rounded-xl overflow-hidden shadow-lg'>
          <Image src={product.thumbnail as string}
               alt={product.title}
               width={500}
               height={500}
               className='w-full'
               priority={true}
               />
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2 mx-auto'>{product.title}</div>
             
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </Container>
  );
};

export default NewArrival;