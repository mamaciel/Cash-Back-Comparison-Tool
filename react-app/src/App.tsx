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
      {/*<AnnualFee />*/}
      <ComparisonTable />
    </>
  );
}
export default App;
