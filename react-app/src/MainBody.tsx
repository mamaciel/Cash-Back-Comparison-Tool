import React, { useState, ChangeEvent } from "react";
import styles from "./styling/MainBody.module.css";
import CreditCardData from "./CreditCardData";
import CreditCardSelectBox from "./Components/CreditCardSelects";
import { SelectChangeEvent } from "@mui/material";
import * as outsideFunctions from "./CreditCardCalculations";
import SpendingCategoryFields from "./Components/SpendingInputFields";
import CardInfoTable from "./Components/CardInfoTable";

const textFieldStyles = {
  width: "140px",
  color: "black",
  margin: "5px",
};

const labelStyles = {
  color: "black",
};

const MainBody = () => {
  interface CreditCard {
    name: string;
    image: string;
    cashBack: string;
    annualFee: string;
    pros: string[];
    cons: string[];
    bonusOffer: string;
    more: string;
  }

  // Tracks which credit cards were selected in the dropdown selections
  const [selectedCreditCards, setSelectedCreditCards] = useState([
    "Bank of America Customized Cash Rewards",
    "Wells Fargo Active Cash",
    "American Express Blue Cash Preferred",
  ]);

  // Create a mapping object for card data
  const cardDataMap: { [key: string]: CreditCard } = {};
  CreditCardData.forEach((card) => {
    cardDataMap[card.name] = card;
  });

  // Filter card data based on selectedCreditCards
  const selectedCardData = selectedCreditCards.map(
    (cardName) => cardDataMap[cardName]
  );

  const cardNames = selectedCardData.map((card) => card.name);
  const annualFees = selectedCardData.map((card) => card.annualFee);
  const bonusOffers = selectedCardData.map((card) => card.bonusOffer);
  const cashBack = selectedCardData.map((card) => card.cashBack);
  const pros = selectedCardData.map((card) => card.pros);
  const cons = selectedCardData.map((card) => card.cons);
  const more = selectedCardData.map((card) => card.more);
  const imageURLs = selectedCardData.map((card) => card.image);

  const [spendingInputs, setSpendingInputs] = useState({
    groceries: 0.0,
    gas: 0.0,
    onlineShopping: 0.0,
    dining: 0.0,
    travel: 0.0,
    drugStores: 0.0,
    homeImprovement: 0.0,
  });

  // State variable to store the total value
  const [totalValue1, setTotalValue1] = useState(0);
  const [totalValue2, setTotalValue2] = useState(0);
  const [totalValue3, setTotalValue3] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = outsideFunctions.Calculator(
      spendingInputs,
      selectedCreditCards
    );
    setTotalValue1(results[0]);
    setTotalValue2(results[1]);
    setTotalValue3(results[2]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const floatValue = value !== "" ? parseFloat(value) : 0;
    setSpendingInputs((prevSpendingInputs) => ({
      ...prevSpendingInputs,
      [id]: floatValue,
    }));
  };

  const ccNameChange = (e: SelectChangeEvent<string>) => {
    const updatedIndex = parseInt(e.target.name.slice(-1)) - 1; // Extract the index from the name (select1 -> 0, select2 -> 1, select3 -> 2)
    const updatedValue = e.target.value;
    setTotalValue1(0);
    setTotalValue2(0);
    setTotalValue3(0);

    setSelectedCreditCards((prevSelectedCreditCards) => {
      const newSelectedCreditCards = [...prevSelectedCreditCards];
      newSelectedCreditCards[updatedIndex] = updatedValue;
      return newSelectedCreditCards;
    });
  };

  const categories = [
    { id: "groceries", label: "Groceries" },
    { id: "gas", label: "Gas" },
    { id: "onlineShopping", label: "Online Shopping" },
    { id: "dining", label: "Dining" },
    { id: "travel", label: "Travel" },
    { id: "drugStores", label: "Drug Stores" },
    { id: "homeImprovement", label: "Home Improvement" },
  ];

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <h2>Spending</h2>
            <p>Please enter your monthly average spending for each category.</p>

            <form onSubmit={handleSubmit}>
              <SpendingCategoryFields
                categories={categories}
                onChange={handleInputChange}
                inputProps={{ min: 0, step: "any" }}
                labelStyles={labelStyles}
                textFieldStyles={textFieldStyles}
              />

              <div className={styles.submitButtonContainer}>
                <button className={styles.submitButton} type="submit">
                  Calculate
                </button>
              </div>
            </form>

            <table>
              <tbody>
                <tr>
                  <td>Aprox. Yearly Cash Back: ${totalValue1.toFixed(2)}</td>
                  <td>Aprox. Yearly Cash Back: ${totalValue2.toFixed(2)}</td>
                  <td>Aprox. Yearly Cash Back: ${totalValue3.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <p className={styles.disclaimer}>
              <i>
                *Disclaimer: These cash back estimates are calculated using the
                listed cash back rewards. For example, a 2% cash back card is
                calculated by multiplying your monthly category spending x 0.02
                x 12 months. These rewards may change, please refer to the
                bank's official pages for the most accurate information!*
              </i>
            </p>

            <h2>Credit Card</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.selectionRow}>
                    <CreditCardSelectBox
                      value={selectedCreditCards[0]}
                      onChange={ccNameChange}
                      name="select1"
                    />
                    <CreditCardSelectBox
                      value={selectedCreditCards[1]}
                      onChange={ccNameChange}
                      name="select2"
                    />
                    <CreditCardSelectBox
                      value={selectedCreditCards[2]}
                      onChange={ccNameChange}
                      name="select3"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <table className={styles.table}>
              <tbody>
                <tr>
                  {imageURLs.map((URL, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <img src={URL} />
                    </td>
                  ))}
                </tr>
                <tr>
                  {cardNames.map((name, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.cellContent}>
                        <strong>{name}</strong>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <CardInfoTable title="Annual Fee" data={annualFees} />
            <CardInfoTable title="Bonus Offer" data={bonusOffers} />
            <CardInfoTable title="Cash Back" data={cashBack} />

            <h2>Pros</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  {pros.map((pros, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.cellContent}>
                        <ul>
                          {pros.map((pro, proIndex) => (
                            <li className={styles.bulletPoint} key={proIndex}>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <h2>Cons</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  {cons.map((cons, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.cellContent}>
                        <ul>
                          {cons.map((con, conIndex) => (
                            <li className={styles.bulletPoint} key={conIndex}>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <CardInfoTable title="Additional Info" data={more} />
            <div className={styles.bottom}>
              <p>
                <strong>
                  If you have any questions, concerns, or suggestions for
                  improvement please email mamaciel2022@gmail.com
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
