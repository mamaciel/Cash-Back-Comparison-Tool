import React, { useState, ChangeEvent, ReactNode, useEffect } from "react";
import styles from "./MainBody.module.css";
import CreditCardData from "./CreditCardData";
import {
  InputAdornment,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

//import * from "./assets/" as images;

const MainBody = () => {
  const cardNames = CreditCardData.map((card) => card.name);
  const annualFees = CreditCardData.map((card) => card.annualFee);
  const bonusOffers = CreditCardData.map((card) => card.bonusOffer);
  const cashBack = CreditCardData.map((card) => card.cashBack);
  const pros = CreditCardData.map((card) => card.pros);
  const more = CreditCardData.map((card) => card.more);
  const imageURLs = CreditCardData.map((card) => card.image);

  const [spendingInputs, setSpendingInputs] = useState({
    groceries: 0,
    gas: 0,
    onlineShopping: 0,
    dining: 0,
    travel: 0,
    drugStores: 0,
    homeImprovement: 0,
  });

  // State variable to store the total value
  const [totalValue, setTotalValue] = useState(0);

  const [ccName1, setCCName1] = useState("");
  const [ccName2, setCCName2] = useState("");
  const [ccName3, setCCName3] = useState("");

  const textFieldStyles = {
    width: "140px",
    color: "black",
    margin: "5px",
  };

  const labelStyles = {
    color: "black",
    fontSize: "17px",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(spendingInputs);
    console.log("The value of dining is:" + spendingInputs.dining);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSpendingInputs((prevSpendingInputs) => ({
      ...prevSpendingInputs,
      [id]: parseFloat(value), // Convert input string to a number (float)
    }));
  };

  const ccNameChange = (e: SelectChangeEvent<string>) => {
    if (e.target.name === "select1") {
      setCCName1(e.target.value);
    } else if (e.target.name === "select2") {
      setCCName2(e.target.value);
    } else {
      setCCName3(e.target.value);
    }
  };

  // useEffect(() => {
  //   console.log("This is " + ccName1);
  // }, [ccName1]);

  return (
    <>
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
                <br />
                <button className={styles.submitButton} type="submit">
                  Calculate
                </button>
              </div>
            </div>
          </form>

          <p>Total Value: ${totalValue.toFixed(2)}</p>
          <h2>Credit Card</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            <Box sx={{ minWidth: 100, maxWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ccName1}
                  label="Name"
                  onChange={ccNameChange}
                  name="select1"
                >
                  <MenuItem value={"boa"}>
                    BofA Customized Cash Rewards
                  </MenuItem>
                  <MenuItem value={"Fargo"}>Wells Fargo Active Cash</MenuItem>
                  <MenuItem value={"Blue Cash"}>
                    American Express Blue Cash Preferred
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 100, maxWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label2">Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label2"
                  id="demo-simple-select2"
                  value={ccName2}
                  label="Name"
                  onChange={ccNameChange}
                  name="select2"
                >
                  <MenuItem value={"boa"}>
                    BofA Customized Cash Rewards
                  </MenuItem>
                  <MenuItem value={"Fargo"}>Wells Fargo Active Cash</MenuItem>
                  <MenuItem value={"Blue Cash"}>
                    American Express Blue Cash Preferred
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 100, maxWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Name</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={ccName3}
                  label="Name"
                  onChange={ccNameChange}
                  name="select3"
                >
                  <MenuItem value={"boa"}>
                    BofA Customized Cash Rewards
                  </MenuItem>
                  <MenuItem value={"Fargo"}>Wells Fargo Active Cash</MenuItem>
                  <MenuItem value={"Blue Cash"}>
                    American Express Blue Cash Preferred
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
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
