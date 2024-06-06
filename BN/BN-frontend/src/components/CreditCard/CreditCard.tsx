import ReactDOM from 'react-dom/client';
import { ChangeEvent, useState, useEffect} from "react";
import { BN_AdminService } from "../../services/BN_admin.service";


// Please note that this is prepared for implementaion put right now not 
// put into use so only as dummy

const CreditCardForm = () => {
        const [cardInfo, setCardInfo] = useState({
          number: '',
          name: '',
          expiry: '',
          cvc: '',
        });
      
const [cardType, setCardType] = useState("");

const getCardType = (number: any) => {
    const cardTypes = {
      Visa: /^4/,
      Mastercard: /^5[1-5]/,
      Amex: /^3[47]/,
    };
  
    //return Object.keys(cardTypes).find((type) => cardTypes[type].test(number)) || 'unknown';
  };
  

  // Use the getCardType function to set a class dynamically
  //const cardType = getCardType(cardInfo.number);




  const validateCardNumber = (number:string) => {
    // Use  algorithm Not done at this stage
  };
  
  const formatCardNumber = (number:string) => {
    // Format number for display, e.g., "1234 5678 9012 3456"
    const numberWithoutSpaces = number.replace(/\\\\s+/g, '');
    return numberWithoutSpaces.replace(/(\\\\d{4})/g, '$1 ').trim();
  };
  
  // Modify handleInputChange to include formatting
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

        // Set for testing
        setCardType("Visa")
  
    if (name === 'number') {
     
      formattedValue = formatCardNumber(value);
    }
  
    // Other validations for expiry and cvc can be added here
  
    setCardInfo({ ...cardInfo, [name]: formattedValue });
  };
  

return (
    <>
   
   <h2> Card payment with {cardType}</h2>

    <form className={`credit-card-form ${cardType}`}>
    <input
      type="text"
      name="number"
      value={cardInfo.number}
      onChange={handleInputChange}
      required
      placeholder="Card Number"
    />
    <input
      type="text"
      name="name"
      required
      value={cardInfo.name}
      onChange={handleInputChange}
      placeholder="Cardholder Name"
    />
    <input
      type="text"
      name="expiry"
      required
      value={cardInfo.expiry}
      onChange={handleInputChange}
      placeholder="Expiry Date"
    />
    <input
      type="text"
      name="cvc"
      required
      value={cardInfo.cvc}
      onChange={handleInputChange}
      placeholder="CVC"
    />
    {/* Additional inputs and elements will be added here */}

    <button>Payment</button>
  </form>

  </>
);
}

export default CreditCardForm;


