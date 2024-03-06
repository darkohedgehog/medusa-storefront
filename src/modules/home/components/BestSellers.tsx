"use client"
import Container from "@modules/common/components/Container";
import Slider from "react-slick";
import NextArrow from "@modules/common/components/NextArrow";
import PrevArrow from "@modules/common/components/PrevArrow";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import ProductModal from "./ProductModal";

// Definicija interfejsa za proizvod
interface Product {
  id: string;
  title: string;
  thumbnail: string; // Pretpostavka je da svaki proizvod ima thumbnail
}

const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([]); // Promenljiva stanja za proizvode
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
    const collectionId = 'pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ'; // ID kolekcije 
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

  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


  return (
    <Container className="mt-60">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className='px-2' onClick={() => setSelectedProduct(product)}>
            <div className='rounded-xl overflow-hidden shadow-lg'>
              <Image src={product.thumbnail}
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
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Container>
  );
};

export default BestSellers;
