import React from 'react';
import styled from 'styled-components';
import Logo from '../image/comfylogo.png';
import phone from '../image/telephone.png';
import login from '../image/login.png';
import cart from '../image/cart.png';
import { Link } from 'react-router-dom';
const Decoration = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 500;

  * {
    box-sizing: border-box;
  }
  nav {
    padding: 8px 40px 8px 40px;
    height: 64px;
    background-color: #cb925d;
    display: flex;
    margin: 0;
    justify-content: space-between;
  }

  .logo {
    height: 100%;
    margin: 0;
  }

  ul {
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
  }

  li {
    margin-right: 2.5rem;
    line-height: 1;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;

    & > div {
      display: flex;
      margin-left: 1rem;
      align-items: center;
      height: 100%;
    }
    .right-icon {
      width: 25px;
      height: 25px;
    }

    label {
      padding-left: 5px;
      line-height: 1;
    }

    .cart {
      padding-right: 1rem;
      border-right: 1px solid black;
    }
  }
  .product {
    text-decoration: none;
    color: black;
  }

  .contact-us {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .btncontact,
  .btnlogin {
    text-decoration: none;
    color: black;
  }

  .btncontact:hover {
    text-decoration: none;
  }

  .btnlogin:hover {
    text-decoration: none;
  }
`;

function Navbar() {
  return (
    <Decoration>
      <nav>
        <div className="left">
          <a className="logo" href="/homepage">
            <img className="logo" src={Logo} alt="logo" />
          </a>
          <ul className="nav-product">
            {/* <li><a className="product" href="/allproducts">All Product</a></li>
                <li><a className="product" href="/localproducts">Local Coffee Bean</a></li>
                <li><a className="product" href="/importproducts">Imported Coffee Bean</a></li> */}
          </ul>
        </div>

        <div className="right">
          <div className="contact-us">
            <a href="/contact">
              <img className="right-icon" src={phone} alt="phone" />
            </a>
            <label>
              <a className="btncontact" href="/contact">
                Contact us
              </a>
            </label>
          </div>

          <div className="cart">
            <a href="/cart">
              <img className="right-icon" src={cart} alt="cart" />
            </a>
          </div>
          <div className="login">
            <a href="/login">
              <img className="right-icon" src={login} alt="login" />
            </a>
            <label>
              <a className="btnlogin" href="/login">
                Log - in
              </a>
            </label>
          </div>
        </div>
      </nav>
    </Decoration>
  );
}

export default Navbar;
