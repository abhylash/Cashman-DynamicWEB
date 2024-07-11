import React from 'react';
import hdfc from '../assets/images/hdfc.png';
import axis from '../assets/images/Axis.png';
import sbi from '../assets/images/sbi.png';
import rbl from '../assets/images/rbl.png';
import IndusInd from '../assets/images/IndusInd.png';
import stdchart from '../assets/images/stdchart.png';

const CreditCards = () => {
  return (
    <section className="work section" id="creditcards">
      <h2 className="section-title">Credit Cards</h2>
      <div className="work__container bd-grid">
        <div className="work__img">
          <img src={hdfc} alt="Credit1" />
          <h2>HDFC Bank</h2>
          <p>HDFC Bank offers a wide range of credit cards catering to various needs such as travel, shopping, dining, and more. Their cards come with attractive rewards, cashback offers, and exclusive privileges. With HDFC Bank credit cards, customers can enjoy benefits like complimentary lounge access, fuel surcharge waivers, and milestone rewards. Additionally, HDFC Bank provides excellent customer service and hassle-free online account management.</p>
        </div>
        <div className="work__img">
          <img src={axis} alt="Credit2" />
          <h2>Axis Bank</h2>
          <p>Axis Bank provides credit cards with benefits like cashback, rewards points, travel privileges, and discounts on dining and shopping. They offer a diverse range of cards suitable for different lifestyles and preferences. Axis Bank credit cards come with features such as zero lost card liability, emergency card replacement, and easy EMI options for big-ticket purchases. Customers can also enjoy exclusive discounts and offers on partner merchants.</p>
        </div>
        <div className="work__img">
          <img src={sbi} alt="Credit3" />
          <h2>SBI Bank</h2>
          <p>State Bank of India (SBI) offers credit cards with features such as cashback, rewards, travel benefits, and fuel surcharge waivers. Their cards cater to individuals with varying spending habits and preferences. SBI credit cards provide additional perks such as complimentary insurance coverage, easy payment options, and personalized credit limits. With a wide acceptance network both domestically and internationally, SBI credit cards are a convenient choice for customers.</p>
        </div>
        <div className="work__img">
          <img src={rbl} alt="Credit4" />
          <h2>RBL Bank</h2>
          <p>RBL Bank offers a range of credit cards with benefits like reward points, cashback, travel privileges, and lifestyle discounts. They have cards tailored for different needs, including shopping, dining, and entertainment. RBL Bank credit cards come with features such as zero lost card liability, fuel surcharge waivers, and contactless payments. Customers can also enjoy exclusive offers and discounts on partner merchants, making RBL Bank credit cards a valuable addition to their wallet.</p>
        </div>
        <div className="work__img">
          <img src={IndusInd} alt="Credit5" />
          <h2>IndusInd Bank</h2>
          <p>IndusInd Bank provides credit cards with benefits such as reward points, cashback, travel perks, and dining discounts. Their cards are designed to cater to diverse needs, offering features like zero lost card liability, fuel surcharge waivers, and concierge services. IndusInd Bank credit cards come with additional privileges such as complimentary insurance coverage and access to exclusive events. With a range of options, customers can choose a card that best suits their lifestyle and preferences.</p>
        </div>
        <div className="work__img">
          <img src={stdchart} alt="Credit6" />
          <h2>Standard Chartered Bank</h2>
          <p>Standard Chartered Bank offers credit cards with benefits such as cashback, rewards, travel privileges, and dining discounts. Their cards are designed to cater to various needs, providing features like zero lost card liability, easy EMI conversion, and contactless payments. Standard Chartered Bank credit cards come with additional perks such as complimentary insurance coverage, airport lounge access, and exclusive offers on partner merchants. Customers can enjoy a seamless banking experience with their comprehensive credit card solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default CreditCards;
