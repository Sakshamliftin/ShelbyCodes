import PropTypes from "prop-types";
import "./LeftPaymentPortal1.css";

const LeftPaymentPortal1 = ({ className = "" }) => {
  return (
    <div className={`left-payment-portal1 ${className}`}>
      <h2 className="billing-summary2">Billing Summary</h2>
      <div className="membership1">membership</div>
      <div className="rupee">
        <div className="price1">$20.00</div>
        <div className="price-duration">
          <h3 className="per-year1">
            <p className="per1">per</p>
            <p className="per1">year</p>
          </h3>
        </div>
      </div>
      <div className="info-12">
        <div className="info-1-inner" />
        <div className="total-due-today-label">
          <h3 className="subtotal1">subtotal</h3>
          <div className="promo-code-input">
            <div className="discount1">$20.00</div>
          </div>
        </div>
        <div className="add-promotion-code1">Add promotion code</div>
      </div>
      <div className="info-2">
        <div className="info-2-child" />
        <h3 className="total-due-today1">Total due today</h3>
        <div className="promo-code-input">
          <div className="discount1">$20.00</div>
        </div>
      </div>
    </div>
  );
};

LeftPaymentPortal1.propTypes = {
  className: PropTypes.string,
};

export default LeftPaymentPortal1;
