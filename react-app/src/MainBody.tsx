import React, { useState, ChangeEvent } from "react";
import styles from "./MainBody.module.css";
import CreditCardData from "./CreditCardData";
import CreditCardSelectBox from "./CreditCardSelects";
import { InputAdornment, TextField, SelectChangeEvent } from "@mui/material";
import * as outsideFunctions from "./CreditCardCalculations";

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
    groceries: 800.0,
    gas: 100.0,
    onlineShopping: 60.0,
    dining: 300.0,
    travel: 40.0,
    drugStores: 20.0,
    homeImprovement: 40.0,
  });

  // State variable to store the total value
  const [totalValue1, setTotalValue1] = useState(0);
  const [totalValue2, setTotalValue2] = useState(0);
  const [totalValue3, setTotalValue3] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(spendingInputs);
    console.log("The value of dining is:" + spendingInputs.dining);
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
    setSpendingInputs((prevSpendingInputs) => ({
      ...prevSpendingInputs,
      [id]: parseFloat(value), // Convert input string to a number (float)
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

  return (
    <>
      <div className={styles.pageContainer}>
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <h2>Spending</h2>
            <p>Please enter your monthly average spending for each category.</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.categoriesContainer}>
                <div className={styles.spendingCategories}>
                  <TextField
                    id="groceries"
                    label="Groceries"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                    value={800}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    style={textFieldStyles}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="gas"
                    label="Gas"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                    value={100}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    style={textFieldStyles}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="onlineShopping"
                    label="Online Shopping"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                    value={60}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    style={textFieldStyles}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="dining"
                    label="Dining"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                    value={300}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    style={textFieldStyles}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="travel"
                    label="Travel"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                    value={40}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    style={textFieldStyles}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="drugStores"
                    label="Drug Stores"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                    value={20}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    style={textFieldStyles}
                    onChange={handleInputChange}
                  />

                  <TextField
                    id="homeImprovement"
                    label="Home Improvement"
                    variant="outlined"
                    size="small"
                    placeholder="0"
                    value={40}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                      inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
                    }}
                    InputLabelProps={{
                      style: labelStyles,
                    }}
                    style={textFieldStyles}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

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
                      <img src={URL + ".png"} />
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

            <h2>Annual Fee</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  {annualFees.map((fee, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.cellContent}>{fee}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <h2>Bonus Offer</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  {bonusOffers.map((fee, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.cellContent}>{fee}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <h2>Cash Back</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  {cashBack.map((cashback, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.cellContent}>{cashback}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

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

            <h2>Additional Info</h2>

            <table className={styles.table}>
              <tbody>
                <tr>
                  {more.map((moreInfo, index) => (
                    <td
                      className={`${styles.column} ${
                        index === 1 ? styles.borderTd : ""
                      }`}
                      key={index}
                    >
                      <div className={styles.cellContent}>{moreInfo}</div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
