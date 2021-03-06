import React from 'react';
import styled from 'styled-components';
import Path from '../component/Path';
import Adminproduct from '../component/Adminproduct.js';
import Uploadimg2 from '../component/Uploadimg2.js';

const Decoration = styled.div`
  padding-top: 64px;

  .container {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 80%;
  }

  .productamount {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
      text-align: justify;
    }
  }
  .productdetail {
    width: 600px;
  }

  .productchoice {
    margin: 0 auto;
    background-color: #f8f8f8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 900px;
    width: 90%;
  }
  .col-left {
    flex: 60%;
  }

  .col-right {
    flex: 40%;

    h1 {
      position: relative;
      top: 10px;
      margin: 0 0 0 15px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
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
    justify-content: flex-end;

    .price {
      font-size: 24px;
      font-weight: 700;
      padding: 25px 15px 25px 15px;
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
`;

function Updatedproduct() {
  return (
    <Decoration>
      <Path />
      <div className="container">
        <div className="col-left">
          <div className="productfigure">
            <Uploadimg2 />
            <div className="productamount">
              <button className="btnsub">-</button>
              <p>1</p>
              <button className="btnadd">+</button>
            </div>
            <div className="productdetail">
              <h3>Product details</h3>
              <Adminproduct />
            </div>
          </div>
          <div className="col-right">
            <div className="productchoice">
              <div className="name">
                <h1>Doi Mon Chong</h1>
              </div>
              <div className="processing">
                <form>
                  <div className="topic">
                    <span>Coffee processing</span>
                    <span className="specific">*</span>
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="wetprocess" name="coffeeprocessing" value="wetprocess" />
                    <label for="wetprocess">Washed / Wet process</label>
                    <br />
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="dryprocess" name="coffeeprocessing" value="naturalprocess" />
                    <label for="dryprocess">Natural/ Dry process</label>
                    <br />
                  </div>

                  <div className="controlinput">
                    <input type="radio" id="honeyprocess" name="coffeeprocessing" value="honeyprocess" />
                    <label for="honeyprocess">Honey process</label>
                  </div>
                </form>
              </div>
              <div className="roasting">
                <form>
                  <div className="topic">
                    <span>Roasting Level</span>
                    <span className="specific">*</span>
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="light" name="roastinglevel" value="lightroast" />
                    <label for="light">Light roast</label>
                    <br />
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="medium" name="roastinglevel" value="mediumroast" />
                    <label for="medium">Medium roast</label>
                    <br />
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="dark" name="roastinglevel" value="darkroast" />
                    <label for="dark">Dark roast</label>
                  </div>
                </form>
              </div>
              <div className="grinding">
                <form>
                  <div className="topic">
                    <span>Grind Level</span>
                    <span className="specific">*</span>
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="whole" name="grindlevel" value="wholebean" />
                    <label for="whole">Whole bean</label>
                    <br />
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="fined" name="grindlevel" value="finedground" />
                    <label for="fined">Fined ground</label>
                    <br />
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="dark" name="grindlevel" value="mediumground" />
                    <label for="dark">Medium ground</label>
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="dark" name="grindlevel" value="coarseground" />
                    <label for="dark">Coarse ground</label>
                  </div>
                </form>
              </div>
              <div className="weighing">
                <form>
                  <div className="topic">
                    <span>Weight</span>
                    <span className="specific">*</span>
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="100" name="weight" value="100gram" />
                    <label for="100">100 grams</label>
                    <br />
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="250" name="weight" value="250gram" />
                    <label for="250">250 grams</label>
                    <br />
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="500" name="weight" value="500gram" />
                    <label for="500">500 grams</label>
                  </div>
                  <div className="controlinput">
                    <input type="radio" id="1000" name="weight" value="1kilogram" />
                    <label for="1000">1 kilogram</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Decoration>
  );
}

export default Updatedproduct;
