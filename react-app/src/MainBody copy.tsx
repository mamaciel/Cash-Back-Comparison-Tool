import React, { useState, useEffect } from "react";
import styles from "./MainBody.module.css";
import CreditCardData from "./CreditCardData";
import { InputAdornment, TextField } from "@mui/material";

//import * from "./assets/" as images;

const MainBody = () => {
  const cardNames = CreditCardData.map((card) => card.name);
  const annualFees = CreditCardData.map((card) => card.annualFee);
  const bonusOffers = CreditCardData.map((card) => card.bonusOffer);
  const cashBack = CreditCardData.map((card) => card.cashBack);
  const pros = CreditCardData.map((card) => card.pros);
  const more = CreditCardData.map((card) => card.more);
  const imageURLs = CreditCardData.map((card) => card.image);

  const [groceries, setGroceries] = useState(0);
  const [gas, setGas] = useState(0);
  const [onlineShopping, setOnlineShopping] = useState(0);
  const [dining, setDining] = useState(0);
  const [travel, setTravel] = useState(0);
  const [drugStores, setDrugStores] = useState(0);
  const [homeImprovement, setHomeImprovement] = useState(0);

  // Function to update the total value based on spending categories
  const updateTotal = () => {
    const total =
      parseFloat(groceries.toString() || "0") +
      parseFloat(gas.toString() || "0") +
      parseFloat(onlineShopping.toString() || "0") +
      parseFloat(dining.toString() || "0") +
      parseFloat(travel.toString() || "0") +
      parseFloat(drugStores.toString() || "0") +
      parseFloat(homeImprovement.toString() || "0");
    setTotalValue(total);
  };

  // State variable to store the total value
  const [totalValue, setTotalValue] = useState(0);

  // Function to handle onChange event for each spending category input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "groceries":
        setGroceries(parseFloat(value));
        break;
      case "gas":
        setGas(parseFloat(value));
        break;
      case "onlineShopping":
        setOnlineShopping(parseFloat(value));
        break;
      case "dining":
        setDining(parseFloat(value));
        break;
      case "travel":
        setTravel(parseFloat(value));
        break;
      case "drugStores":
        setDrugStores(parseFloat(value));
        break;
      case "homeImprovement":
        setHomeImprovement(parseFloat(value));
        break;
      default:
        break;
    }
    // Call the updateTotal function to recalculate the total value
  };

  useEffect(() => {
    // Call the updateTotal function whenever any of the spending category state variables change
    updateTotal();
  }, [
    groceries,
    gas,
    onlineShopping,
    dining,
    travel,
    drugStores,
    homeImprovement,
  ]);

  const textFieldStyles = {
    width: "140px",
    color: "black",
    margin: "5px",
  };

  const labelStyles = {
    color: "black",
    fontSize: "17px",
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <h2>Spending</h2>
          <p>Please enter your monthly average spending for each category.</p>
          <div className={styles.categoriesContainer}>
            <div className={styles.spendingCategories}>
              <TextField
                id="groceries"
                label="Groceries"
                variant="outlined"
                size="small"
                placeholder="0"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
                }}
                InputLabelProps={{
                  style: labelStyles,
                }}
                style={textFieldStyles}
                onInput={handleInputChange} // Add onChange event to each input field
              />

              <TextField
                id="gas"
                label="Gas"
                variant="outlined"
                size="small"
                placeholder="0"
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
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
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
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
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
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
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
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
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
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
                type="number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  inputProps: { min: 0 },
                }}
                InputLabelProps={{
                  style: labelStyles,
                }}
                style={textFieldStyles}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <p>Total Value: ${totalValue.toFixed(2)}</p>
          <h2>Credit Card</h2>

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
                    <div className={styles.cellContent}>{name}</div>
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
                    <div className={styles.cellContent}>{pros}</div>
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
    </>
  );
};

export default MainBody;
