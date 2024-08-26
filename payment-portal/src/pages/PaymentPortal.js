import LeftPaymentPortal1 from "../components/LeftPaymentPortal1";
import "./PaymentPortal.css";

const PaymentPortal = () => {
  return (
    <div className="payment-portal">
      <LeftPaymentPortal1 />
      <div className="card-details-form-wrapper">
        <div className="card-details-form">
          <h2 className="payment-details">Payment details</h2>
          <b className="payment-details1">Payment details</b>
          <div className="payment-portals">
            <div className="card">
              <div className="card1" />
              <img
                className="vector-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="card2">Card</div>
            </div>
            <button className="paypal">
              <div className="gpay" />
              <img className="logospaypal-icon" alt="" src="/logospaypal.svg" />
              <div className="paypal-wrapper">
                <a className="paypal2">PayPal</a>
              </div>
            </button>
            <button className="g-pay">
              <div className="gpay" />
              <img
                className="flat-color-iconsgoogle"
                alt=""
                src="/flatcoloriconsgoogle.svg"
              />
              <div className="pay-wrapper">
                <div className="pay">Pay</div>
              </div>
            </button>
          </div>
          <div className="card-details-input-fields">
            <div className="card-details-input-labels">
              <b className="name-on-card">Name on card</b>
            </div>
            <div className="card-details-input-containers">
              <input className="raghav" placeholder="raghav" type="text" />
            </div>
          </div>
          <div className="card-details-input-fields1">
            <div className="card-details-input-labels">
              <b className="card-details">Card details</b>
            </div>
            <div className="card-detilas-main-frame">
              <div className="cd-top">
                <div className="pay-wrapper">
                  <div className="div">4135 3456 6578 3345</div>
                </div>
                <img
                  className="formkitvisa-icon"
                  loading="lazy"
                  alt=""
                  src="/formkitvisa.svg"
                />
              </div>
              <div className="dropdown-values">
                <div className="cd-left">
                  <input className="input" placeholder="12/24" type="text" />
                </div>
                <div className="cd-right">
                  <div className="dropdown-value-right">
                    <b className="b">821</b>
                  </div>
                  <img
                    className="heroiconscredit-card-solid"
                    alt=""
                    src="/heroiconscreditcardsolid.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-details-input-fields">
            <div className="card-details-input-labels">
              <b className="country">
                <p className="country1">Country</p>
              </b>
            </div>
            <div className="country-frame">
              <div className="india-wrapper">
                <div className="india">
                  <p className="country1">India</p>
                </div>
              </div>
              <img
                className="eparrow-down-icon"
                loading="lazy"
                alt=""
                src="/eparrowdown.svg"
              />
            </div>
          </div>
          <div className="card-details-input-fields">
            <div className="card-details-input-labels">
              <b className="billing-address">billing address</b>
            </div>
            <div className="ba-main-frame">
              <div className="cd-top1">
                <div className="mumbai">Mumbai</div>
                <img
                  className="eparrow-down-icon"
                  loading="lazy"
                  alt=""
                  src="/eparrowdown.svg"
                />
              </div>
              <div className="cd-down">
                <input className="input1" placeholder="3004" type="text" />
              </div>
            </div>
          </div>
          <button className="subscribe">
            <div className="sub" />
            <a className="subscribe1">subscribe</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPortal;
