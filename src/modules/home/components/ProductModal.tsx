import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Product {
    id: string;
    title: string;
    thumbnail: string;
    description?: string; // Pretpostavka da opis može biti neobavezan
  }
  

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        maxWidth: '500px',
        width: '100%',
      }}>
        <h2 
           className='mb-2 mx-auto text-gray-400'>
            {product.title}
        </h2>
        <Image 
            src={product.thumbnail}
            alt={product.title} 
            style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} 
            width={500} 
            height={200} />
        {product.description && <p>{product.description}</p>}
        <div className='flex items-center justify-center gap-x-32 mx-auto'>
        <button 
         onClick={onClose} 
         className='flex items-center justify-center mt-2 outline-none cursor-pointer w-20 h-10 rounded-3xl border-2 border-solid transition-all ease-in text-sm font-semibold text-[#606060] shadow-sm bg-button-gradient hover:shadow-custom-normal active:shadow-custom-active-focus focus:shadow-custom-active-focus'>
          Zatvori
        </button>
        <Link href={`/collections/merch`}>
          <button 
          className='flex items-center justify-center mt-2 outline-none cursor-pointer w-20 h-10 rounded-3xl border-2 border-solid transition-all ease-in text-sm font-semibold text-[#606060] shadow-sm bg-button-gradient hover:shadow-custom-normal active:shadow-custom-active-focus focus:shadow-custom-active-focus'>
            Više...
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
