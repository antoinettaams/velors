import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Since it's a mono-product site, we redirect listing to the single product page
    navigate('/product', { replace: true });
  }, [navigate]);

  return null;
};

export default Products;