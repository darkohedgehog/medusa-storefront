"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

interface Product {
  thumbnail: string | undefined;
  title: string;
  id: number;
  name: string;
  image: string;
}


export const Hero = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const collectionId = 'pcol_01HRST2NT75Z26MEN3KJF2278W'; // ID kolekcije
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
  
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        <p
          style={
            i === dotActive
              ? { color: "black", fontWeight: "600" }
              : { color: "white", fontWeight: "600" }
          }
        >
          {" "}
          0{i + 1}
        </p>
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots: any) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i: any) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };



  return (
    <div>
      <Slider {...settings}>
      {products?.map((product) => (
        <Link href={"/"} key={product.id}>
        <Image
         src={product.thumbnail as string} 
         alt="Hero" 
         width={2000} 
         height={2000}
         priority={true}
         className="w-full max-h-[650px] object-cover" />
         <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" />
       </Link>
         
      ))}
      </Slider>
    </div>
  );
};
