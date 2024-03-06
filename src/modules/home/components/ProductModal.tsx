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
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        {product.description && <p>{product.description}</p>}
        <button onClick={onClose} style={{ marginTop: '10px' }}>Zatvori</button>
      </div>
    </div>
  );
}

export default ProductModal;
