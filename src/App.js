import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreditCards from './components/CreditCards';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';
//import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import TermsOfService from './components/TermsofService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import Security from './components/Security';
import Disclaimer from './components/Disclaimer';
//import ExpenseTracker from './components/ExpenseTracker';
//import IncomeCalculator from './components/IncomeCalculator';
//import SavingsCalculator from './components/SavingsCalculator';
//import InvestmentCalculator from './components/InvestmentCalculator';
//import FinancialGoalsPlanner from './components/FinancialGoalsPlanner';




//import Login from './components/Login';
//import Signup from './components/Signup';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/creditcards" element={<CreditCards />} />
            <Route path="/services" element={<Services />} />
            <Route path="/features" element={<Features />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
      
         
            
        
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
