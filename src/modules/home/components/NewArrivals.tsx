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
    const collectionId = 'pcol_01HPHYV4CG516B09MMZC4NRJK4'; // ID kolekcije "status"
    // Formatiranje collection_id kao niza u query string-u
    const queryString = `collection_id[]=${collectionId}`;
  
    fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products?${queryString}`, {
      credentials: "include",
    })
    .then(response => response.json())
    .then(data => {
      setProducts(data.products || []);
    })
    .catch(error => {
      console.error('Greška prilikom dohvatanja proizvoda:', error);
    });
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
            <div className='px-6 py-4 min-h-[6rem]'>
              <div className='font-semibold text-md mb-4 mx-auto'>{product.title}</div>
             
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </Container>
  );
};

export default NewArrival;