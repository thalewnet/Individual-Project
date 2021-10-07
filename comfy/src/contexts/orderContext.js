import { createContext, useState } from 'react';

const OrderContext = createContext();

function OrderProvider({ children }) {
  const [shipment, setShipment] = useState({
    address: '',
    province: '',
    district: '',
    subdistrict: '',
    zipcode: '',
    phonenumber: '',
    comment: '',
  });

  const [productOption, setProductOption] = useState({
    skuId: '',
    amount: '',
    productId: '',
    roast: '',
    grind: '',
    weight: '',
    price: '',
    userId: '',
  });
  const [checkOutItems, setCheckOutItems] = useState([]); // item selected and record with ID
  // console.log(checkOutItems);
  return (
    <OrderContext.Provider
      value={{
        shipment,
        setShipment,
        checkOutItems,
        setCheckOutItems,
        productOption,
        setProductOption,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };