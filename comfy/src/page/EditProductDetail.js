import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Path from '../component/Path';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from '../config/axios';
import { OrderContext } from '../contexts/orderContext';
import { AuthContext } from '../contexts/authContext';
import { validateInput, validateProductOption } from '../services/validation';
import { getToken } from '../services/localStorage';
const Decoration = styled.div`
  padding-top: 64px;

  .container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 80%;
  }

  .product-amount {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 500px;
    border-bottom: 1px solid black;

    button {
      width: 45px;
      height: 40px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      border: none;
      background-color: #c4c4c4;
    }

    .btnadd {
      background-color: #eecb14;
    }

    p {
      margin: 20px 20px 15px 20px;
      font-size: 24px;
    }
  }
  .product-detail {
    max-width: 500px;
    font-size: 14px;
  }

  .product-choice {
    margin: 0 auto;
    max-width: 500px;
    background-color: #f8f8f8;
    margin-left: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    width: 90%;
  }

  h1 {
    position: relative;
    top: 10px;
    margin: 0 0 0 15px;
    /* text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  }

  form {
    margin: 30px 0 20px 20px;
  }

  .topic {
    display: flex;
    margin-bottom: 10px;

    span {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
    }
    .specific {
      color: red;
      font-size: 12px;
    }
  }

  .specific {
    color: lime;
    font-weight: 300;
    font-size: 8px;
    padding-left: 5px;
  }

  .controlinput {
    margin: 10px 7px;
  }

  label {
    padding-left: 10px;
  }
  .totalprice {
    display: flex;
    justify-content: flex-start;

    .price {
      font-size: 24px;
      font-weight: 700;
      padding: 20px 15px 20px 15px;
    }
  }

  .btn-group {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .btn {
      text-decoration: none;
      margin-right: 20px;
      color: whitesmoke;
      background: #204d48;
      border: 2px solid #204d48;
      padding: 8px 16px;
      border-radius: 8px;
    }

    .btnaddtocart {
      background-color: #204d48;
      color: whitesmoke;
      border-radius: 8px;
      font-family: Roboto;
      font-style: normal;
      padding: 0 16px;
      font-size: 16px;
    }
  }

  .btnaddtocart:hover {
    background-color: #245855;
  }
  .btn:hover {
    background-color: #245855;
  }
  .image-size {
    width: 500px;
    height: 400px;
  }

  .option-text-active {
    color: black;
  }

  .option-text-inactive {
    color: lightgray;
  }
  @media (max-width: 1110px) {
    .container {
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      width: 80%;
    }

    .col-right {
      max-width: 500px;
    }

    .product-choice {
      margin: 0;
      padding: 0;
      background: none;
      box-shadow: none;
    }

    h1 {
      margin: 0;
    }
    .btn-group {
      justify-content: flex-start;
    }

    .product-detail {
      padding-bottom: 10px;
      border-bottom: 1px solid black;
    }

    form {
      margin-left: 0px;
    }
  }
`;

function EditProductDetail() {
  const { setCartItem } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const { productId, cartId } = useParams();
  const history = useHistory();
  const INITAIL_PRODUCROPTION = {
    roast: '',
    grind: '',
    weight: '',
    price: 0,
    skuId: '',
    amount: 1,
    productId: productId,
    userId: user.id,
  };
  const [error, setError] = useState({});
  const [product, setProduct] = useState({});
  const [productOption, setProductOption] = useState(INITAIL_PRODUCROPTION);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/products/${productId}`);
      setProduct(res.data.products);
      const res2 = await axios.get(`/carts/${cartId}`);
      setProductOption(res2.data.cart);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setProductOption((cur) => {
      const idx = product?.Skus?.findIndex(
        (item) => item.id == productOption.skuId
      );

      let price;
      switch (productOption.weight) {
        case '100': {
          price = product?.Skus?.[idx].price * 1;
          break;
        }
        case '250': {
          price = product?.Skus?.[idx].price * 2.5;
          break;
        }
        case '500': {
          price = product?.Skus?.[idx].price * 5 * 0.95;
          break;
        }
        case '1000': {
          price = product?.Skus?.[idx].price * 10 * 0.85;
          break;
        }
        default: {
          price = 0;
        }
      }
      return {
        ...cur,
        price: price,
      };
    });
  }, [productOption.skuId]);

  const handleChangeOptions = (e) => {
    const errMessage = validateInput(e.target.name, e.target.value);
    setError((cur) => ({ ...cur, [e.target.name]: errMessage }));
    const idx = product.Skus.findIndex(
      (item) => item.id == productOption.skuId
    );

    if (e.target.name === 'weight') {
      setProductOption((cur) => {
        let price;
        switch (e.target.value) {
          case '100': {
            price = product?.Skus?.[idx].price * 1;
            break;
          }
          case '250': {
            price = product?.Skus?.[idx].price * 2.5;
            break;
          }
          case '500': {
            price = product?.Skus?.[idx].price * 5 * 0.95;
            break;
          }
          case '1000': {
            price = product?.Skus?.[idx].price * 10 * 0.85;
            break;
          }
          default: {
            price = 0;
          }
        }
        return {
          ...cur,
          [e.target.name]: e.target.value,
          price: price,
        };
      });
    } else {
      setProductOption((cur) => ({ ...cur, [e.target.name]: e.target.value }));
    }

    if (e.target.name === 'skuId') {
      setProductOption((cur) => ({ ...cur, [e.target.name]: +e.target.value }));
    }
  };

  const handleClickAddAmount = () => {
    setProductOption((cur) => ({
      ...cur,
      amount: cur.amount + 1,
    }));
  };
  const handleClickDownAmount = () => {
    if (productOption.amount > 1) {
      setProductOption((cur) => ({ ...cur, amount: cur.amount - 1 }));
    }
  };

  const handleUpdateCart = async (e) => {
    e.preventDefault();
    try {
      const errMessage = validateProductOption(productOption);
      setError(errMessage);
      console.log('submit', productOption);
      // const res = await axios.put('/carts', productOption, {
      //   headers: { authorization: `Bearer ${getToken()}` },
      // });
      const res = await axios.put(`/carts/${cartId}`, productOption);
      alert('done');
      // console.log(res.data.cart);
      //   setCartItem((cur) => [...cur, res.data.cart]);
      //   history.push('/cart');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Decoration>
      <Path />
      <div className="container">
        <div className="col-left">
          <div className="product-figure">
            <img
              className="image-size"
              src={product?.imageUrl}
              alt="productfigue"
            />
          </div>
          <div className="product-amount">
            <button className="btnsub" onClick={handleClickDownAmount}>
              -
            </button>
            <p>{productOption.amount}</p>
            <button className="btnadd" onClick={handleClickAddAmount}>
              +
            </button>
          </div>
          <div className="product-info">
            <h3>Product details</h3>
            <div className="product-detail">{product?.description}</div>
          </div>
        </div>
        <div className="col-right">
          <div className="product-choice">
            <div className="product-name">
              <h1>{product?.name}</h1>
            </div>
            <div className="processing">
              <form>
                <div className="topic">
                  <span>Coffee processing</span>
                  {error.skuId && <span className="specific">กรุณาระบุ</span>}
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="wetprocess"
                    name="skuId"
                    value={product?.Skus?.[0].id}
                    disabled={!product?.Skus?.[0].status ? true : false}
                    onChange={handleChangeOptions}
                    checked={productOption.skuId === product?.Skus?.[0].id}
                  />
                  <label
                    className={`option-text-${
                      product?.Skus?.[0].status ? 'active' : 'inactive'
                    }`}
                    htmlFor="wetprocess"
                  >
                    Washed / Wet process
                  </label>
                  <br />
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="dryprocess"
                    name="skuId"
                    value={product?.Skus?.[1].id}
                    disabled={!product?.Skus?.[1].status ? true : false}
                    onChange={handleChangeOptions}
                    checked={productOption.skuId === product?.Skus?.[1].id}
                  />
                  <label
                    htmlFor="dryprocess"
                    className={`option-text-${
                      product?.Skus?.[1].status ? 'active' : 'inactive'
                    }`}
                  >
                    Natural/ Dry process
                  </label>
                  <br />
                </div>

                <div className="controlinput">
                  <input
                    type="radio"
                    id="honeyprocess"
                    name="skuId"
                    value={product?.Skus?.[2].id}
                    disabled={!product?.Skus?.[2].status ? true : false}
                    onChange={handleChangeOptions}
                    checked={productOption.skuId === product?.Skus?.[2].id}
                  />
                  <label
                    htmlFor="honeyprocess"
                    className={`option-text-${
                      product?.Skus?.[2].status ? 'active' : 'inactive'
                    }`}
                  >
                    Honey process
                  </label>
                </div>
              </form>
            </div>
            <div className="roasting">
              <form>
                <div className="topic">
                  <span>Roasting Level</span>
                  {error.roast && <span className="specific">กรุณาระบุ</span>}
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="light"
                    name="roast"
                    value="light"
                    onChange={handleChangeOptions}
                    checked={productOption.roast === 'light'}
                  />
                  <label htmlFor="light">Light roast</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="medium"
                    name="roast"
                    value="medium"
                    onChange={handleChangeOptions}
                    checked={productOption.roast === 'medium'}
                  />
                  <label htmlFor="medium">Medium roast</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="dark"
                    name="roast"
                    value="dark"
                    onChange={handleChangeOptions}
                    checked={productOption.roast === 'dark'}
                  />
                  <label htmlFor="dark">Dark roast</label>
                </div>
              </form>
            </div>
            <div className="grinding">
              <form>
                <div className="topic">
                  <span>Grind Level</span>
                  {error.grind && <span className="specific">กรุณาระบุ</span>}
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="whole"
                    name="grind"
                    value="wholebean"
                    onChange={handleChangeOptions}
                    checked={productOption.grind === 'wholebean'}
                  />
                  <label htmlFor="whole">Whole bean</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="fined"
                    name="grind"
                    value="finedground"
                    onChange={handleChangeOptions}
                    checked={productOption.grind === 'finedground'}
                  />
                  <label htmlFor="fined">Fined ground</label>
                  <br />
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="dark"
                    name="grind"
                    value="mediumground"
                    onChange={handleChangeOptions}
                    checked={productOption.grind === 'mediumground'}
                  />
                  <label htmlFor="dark">Medium ground</label>
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="dark"
                    name="grind"
                    value="coarseground"
                    onChange={handleChangeOptions}
                    checked={productOption.grind === 'coarseground'}
                  />
                  <label htmlFor="dark">Coarse ground</label>
                </div>
              </form>
            </div>
            <div className="weighing">
              <form>
                <div className="topic">
                  <span>Weight</span>
                  {error.weight && <span className="specific">กรุณาระบุ</span>}
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="100"
                    name="weight"
                    value="100"
                    onChange={handleChangeOptions}
                    disabled={productOption.skuId ? false : true}
                    checked={productOption.weight === '100'}
                  />
                  <label
                    htmlFor="100"
                    className={`option-text-${
                      productOption.skuId ? 'active' : 'inactive'
                    }`}
                  >
                    100 grams
                  </label>
                  <br />
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="250"
                    name="weight"
                    value="250"
                    onChange={handleChangeOptions}
                    disabled={productOption.skuId ? false : true}
                    checked={productOption.weight === '250'}
                  />
                  <label
                    htmlFor="250"
                    className={`option-text-${
                      productOption.skuId ? 'active' : 'inactive'
                    }`}
                  >
                    250 grams
                  </label>
                  <br />
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="500"
                    name="weight"
                    value="500"
                    onChange={handleChangeOptions}
                    disabled={productOption.skuId ? false : true}
                    checked={productOption.weight === '500'}
                  />
                  <label
                    htmlFor="500"
                    className={`option-text-${
                      productOption.skuId ? 'active' : 'inactive'
                    }`}
                  >
                    500 grams
                  </label>
                </div>
                <div className="controlinput">
                  <input
                    type="radio"
                    id="1000"
                    name="weight"
                    value="1000"
                    onChange={handleChangeOptions}
                    disabled={productOption.skuId ? false : true}
                    checked={productOption.weight === '1000'}
                  />
                  <label
                    className={`option-text-${
                      productOption.skuId ? 'active' : 'inactive'
                    }`}
                    htmlFor="1000"
                  >
                    1 kilogram
                  </label>
                </div>
              </form>
            </div>
            <div className="totalprice">
              <div className="price">Price</div>
              <div className="price">
                {(productOption?.price * productOption.amount).toFixed(2)}
              </div>
              <div className="price">Baht</div>
            </div>
            <div className="btn-group">
              <Link to={'/allproducts'} className="btn">
                Continue Shopping
              </Link>
              <button className="btnaddtocart" onClick={handleUpdateCart}>
                Update Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Decoration>
  );
}

export default EditProductDetail;