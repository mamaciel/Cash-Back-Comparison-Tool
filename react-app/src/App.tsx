//import { useState } from 'react'
import "./App.css";
import ComparisonTable from "./ComparisonTable.tsx";
import AnnualFee from "./Rows/AnnualFee.tsx";
import Header from "./Header.tsx";
import BonusOffer from "./Rows/BonusOffer.tsx";

function App() {
  return (
    <>
      <Header />
      <h2>Annual Fee</h2>
      <AnnualFee />
      {/* <ComparisonTable /> */}
      <h2>Bonus Offer</h2>
      <BonusOffer />
      <h2>Cash Back</h2>
    </>
  );
}

export default App;
