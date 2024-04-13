"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Head from 'next/head';


export default function Hero ()  {
  const [images, setImages] = useState<string[]>([]); // Inicijalizacija kao prazan niz

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error(`Greška: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.images) {
          setImages(data.images);
        }
      } catch (error) {
        console.error('Greška prilikom dobavljanja slika:', error);
      }
    };
  
    fetchImages();
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
    <>
      <Head>
        <link rel="preload" href={images[0]} as="image" />
      </Head>
      <div>
        <Slider {...settings}>
          {images?.map((url, index) => (
            <Link href="/" key={index}>
              <Image
                src={url}
                alt="Hero"
                width={1920}
                height={1080}
                priority={index === 0}
                className="w-full max-h-[650px] object-cover"
              />
              <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20" />
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};
