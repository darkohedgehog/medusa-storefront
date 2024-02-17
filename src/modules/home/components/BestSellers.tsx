"use client"
import Container from "@modules/common/components/Container";
import Slider from "react-slick";
import NextArrow from "@modules/common/components/NextArrow";
import PrevArrow from "@modules/common/components/PrevArrow";
import React, { useEffect, useState } from 'react';
import Image from "next/image";

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
    // Ovde ide fetch zahtev ili drugi način dohvatanja podataka. Prikaz kategorije proizvoda
    fetch(`${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/product-categories?handle=merch`, {
      credentials: "include",
    })
    .then((response) => response.json())
    .then(({ product_categories }) => {
      console.log(product_categories.length)
    })
    
    const data = {
      "id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
      "created_at": "2024-02-02T20:52:43.818Z",
      "updated_at": "2024-02-02T20:52:43.818Z",
      "deleted_at": null,
      "title": "Merch",
      "handle": "merch",
      "metadata": null,
      "products": [
        {
          "id": "prod_01HNNSGQGBCRJ2VSG9TKA4Z62S",
          "created_at": "2024-02-02T20:52:44.139Z",
          "updated_at": "2024-02-02T20:52:44.139Z",
          "deleted_at": null,
          "title": "Medusa Coffee Mug",
          "subtitle": null,
          "description": "Every programmer's best friend.",
          "handle": "coffee-mug",
          "is_giftcard": false,
          "status": "published",
          "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png",
          "weight": 400,
          "length": null,
          "height": null,
          "width": null,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "collection_id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
          "type_id": null,
          "discountable": true,
          "external_id": null,
          "metadata": null,
          "profiles": [
            {
              "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
              "created_at": "2024-02-02T20:37:55.312Z",
              "updated_at": "2024-02-02T20:37:55.312Z",
              "deleted_at": null,
              "name": "Default Shipping Profile",
              "type": "default",
              "metadata": null
            }
          ],
          "profile": {
            "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
            "created_at": "2024-02-02T20:37:55.312Z",
            "updated_at": "2024-02-02T20:37:55.312Z",
            "deleted_at": null,
            "name": "Default Shipping Profile",
            "type": "default",
            "metadata": null
          },
          "profile_id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3"
        },
        {
          "id": "prod_01HNNSGQG7HWBC986BWTMFKXCP",
          "created_at": "2024-02-02T20:52:44.120Z",
          "updated_at": "2024-02-02T20:52:44.120Z",
          "deleted_at": null,
          "title": "Medusa Hoodie",
          "subtitle": null,
          "description": "Reimagine the feeling of a classic hoodie. With our cotton hoodie, everyday essentials no longer have to be ordinary.",
          "handle": "hoodie",
          "is_giftcard": false,
          "status": "published",
          "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png",
          "weight": 400,
          "length": null,
          "height": null,
          "width": null,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "collection_id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
          "type_id": null,
          "discountable": true,
          "external_id": null,
          "metadata": null,
          "profiles": [
            {
              "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
              "created_at": "2024-02-02T20:37:55.312Z",
              "updated_at": "2024-02-02T20:37:55.312Z",
              "deleted_at": null,
              "name": "Default Shipping Profile",
              "type": "default",
              "metadata": null
            }
          ],
          "profile": {
            "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
            "created_at": "2024-02-02T20:37:55.312Z",
            "updated_at": "2024-02-02T20:37:55.312Z",
            "deleted_at": null,
            "name": "Default Shipping Profile",
            "type": "default",
            "metadata": null
          },
          "profile_id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3"
        },
        {
          "id": "prod_01HNNSGQGASNB7Z2QHX01Y5EYX",
          "created_at": "2024-02-02T20:52:44.137Z",
          "updated_at": "2024-02-02T20:52:44.137Z",
          "deleted_at": null,
          "title": "Medusa Longsleeve",
          "subtitle": null,
          "description": "Reimagine the feeling of a classic longsleeve. With our cotton longsleeve, everyday essentials no longer have to be ordinary.",
          "handle": "longsleeve",
          "is_giftcard": false,
          "status": "published",
          "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/ls-black-front.png",
          "weight": 400,
          "length": null,
          "height": null,
          "width": null,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "collection_id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
          "type_id": null,
          "discountable": true,
          "external_id": null,
          "metadata": null,
          "profiles": [
            {
              "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
              "created_at": "2024-02-02T20:37:55.312Z",
              "updated_at": "2024-02-02T20:37:55.312Z",
              "deleted_at": null,
              "name": "Default Shipping Profile",
              "type": "default",
              "metadata": null
            }
          ],
          "profile": {
            "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
            "created_at": "2024-02-02T20:37:55.312Z",
            "updated_at": "2024-02-02T20:37:55.312Z",
            "deleted_at": null,
            "name": "Default Shipping Profile",
            "type": "default",
            "metadata": null
          },
          "profile_id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3"
        },
        {
          "id": "prod_01HNNSGQGBCPQ3Q7BWD4M30PFR",
          "created_at": "2024-02-02T20:52:44.116Z",
          "updated_at": "2024-02-02T20:52:44.116Z",
          "deleted_at": null,
          "title": "Medusa T-Shirt",
          "subtitle": null,
          "description": "Reimagine the feeling of a classic T-shirt. With our cotton T-shirts, everyday essentials no longer have to be ordinary.",
          "handle": "medusa-t-shirt",
          "is_giftcard": false,
          "status": "published",
          "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
          "weight": 400,
          "length": null,
          "height": null,
          "width": null,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "collection_id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
          "type_id": null,
          "discountable": true,
          "external_id": null,
          "metadata": null,
          "profiles": [
            {
              "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
              "created_at": "2024-02-02T20:37:55.312Z",
              "updated_at": "2024-02-02T20:37:55.312Z",
              "deleted_at": null,
              "name": "Default Shipping Profile",
              "type": "default",
              "metadata": null
            }
          ],
          "profile": {
            "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
            "created_at": "2024-02-02T20:37:55.312Z",
            "updated_at": "2024-02-02T20:37:55.312Z",
            "deleted_at": null,
            "name": "Default Shipping Profile",
            "type": "default",
            "metadata": null
          },
          "profile_id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3"
        },
        {
          "id": "prod_01HNNSGQKR6139Q4EXN7ZCF4NK",
          "created_at": "2024-02-02T20:52:44.260Z",
          "updated_at": "2024-02-02T20:52:44.260Z",
          "deleted_at": null,
          "title": "Medusa Shorts",
          "subtitle": null,
          "description": "Reimagine the feeling of classic shorts. With our cotton shorts, everyday essentials no longer have to be ordinary.",
          "handle": "shorts",
          "is_giftcard": false,
          "status": "published",
          "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png",
          "weight": 400,
          "length": null,
          "height": null,
          "width": null,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "collection_id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
          "type_id": null,
          "discountable": true,
          "external_id": null,
          "metadata": null,
          "profiles": [
            {
              "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
              "created_at": "2024-02-02T20:37:55.312Z",
              "updated_at": "2024-02-02T20:37:55.312Z",
              "deleted_at": null,
              "name": "Default Shipping Profile",
              "type": "default",
              "metadata": null
            }
          ],
          "profile": {
            "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
            "created_at": "2024-02-02T20:37:55.312Z",
            "updated_at": "2024-02-02T20:37:55.312Z",
            "deleted_at": null,
            "name": "Default Shipping Profile",
            "type": "default",
            "metadata": null
          },
          "profile_id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3"
        },
        {
          "id": "prod_01HNNSGQGCNQC3FQ6EJD190JNY",
          "created_at": "2024-02-02T20:52:44.128Z",
          "updated_at": "2024-02-02T20:52:44.128Z",
          "deleted_at": null,
          "title": "Medusa Sweatpants",
          "subtitle": null,
          "description": "Reimagine the feeling of classic sweatpants. With our cotton sweatpants, everyday essentials no longer have to be ordinary.",
          "handle": "sweatpants",
          "is_giftcard": false,
          "status": "published",
          "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
          "weight": 400,
          "length": null,
          "height": null,
          "width": null,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "collection_id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
          "type_id": null,
          "discountable": true,
          "external_id": null,
          "metadata": null,
          "profiles": [
            {
              "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
              "created_at": "2024-02-02T20:37:55.312Z",
              "updated_at": "2024-02-02T20:37:55.312Z",
              "deleted_at": null,
              "name": "Default Shipping Profile",
              "type": "default",
              "metadata": null
            }
          ],
          "profile": {
            "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
            "created_at": "2024-02-02T20:37:55.312Z",
            "updated_at": "2024-02-02T20:37:55.312Z",
            "deleted_at": null,
            "name": "Default Shipping Profile",
            "type": "default",
            "metadata": null
          },
          "profile_id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3"
        },
        {
          "id": "prod_01HNNSGQG9Z0AYH552KBBE6G3C",
          "created_at": "2024-02-02T20:52:44.120Z",
          "updated_at": "2024-02-02T20:52:44.120Z",
          "deleted_at": null,
          "title": "Medusa Sweatshirt",
          "subtitle": null,
          "description": "Reimagine the feeling of a classic sweatshirt. With our cotton sweatshirt, everyday essentials no longer have to be ordinary.",
          "handle": "sweatshirt",
          "is_giftcard": false,
          "status": "published",
          "thumbnail": "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
          "weight": 400,
          "length": null,
          "height": null,
          "width": null,
          "hs_code": null,
          "origin_country": null,
          "mid_code": null,
          "material": null,
          "collection_id": "pcol_01HNNSGQ5DDMWNBFHRP99TN9TJ",
          "type_id": null,
          "discountable": true,
          "external_id": null,
          "metadata": null,
          "profiles": [
            {
              "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
              "created_at": "2024-02-02T20:37:55.312Z",
              "updated_at": "2024-02-02T20:37:55.312Z",
              "deleted_at": null,
              "name": "Default Shipping Profile",
              "type": "default",
              "metadata": null
            }
          ],
          "profile": {
            "id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3",
            "created_at": "2024-02-02T20:37:55.312Z",
            "updated_at": "2024-02-02T20:37:55.312Z",
            "deleted_at": null,
            "name": "Default Shipping Profile",
            "type": "default",
            "metadata": null
          },
          "profile_id": "sp_01HNNRNKG9G1MBMHCA01PS6NC3"
        }
      ]
    };
    const fetchedProducts = data.products.map(product => ({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
    }));
    setProducts(fetchedProducts);
  }, []);

  return (
    <Container className="mt-60">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className='px-2'>
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
    </Container>
  );
};

export default BestSellers;
