// import React, { useState, ChangeEvent } from "react";
// import styles from "./MainBody.module.css";
// import CreditCardData from "./CreditCardData";
// import CreditCardSelectBox from "./Components/CreditCardSelects";
// import { InputAdornment, TextField, SelectChangeEvent } from "@mui/material";

// const textFieldStyles = {
//   width: "140px",
//   color: "black",
//   margin: "5px",
// };

// const labelStyles = {
//   color: "black",
//   fontSize: "17px",
// };

// const MainBody = () => {
//   interface CreditCard {
//     name: string;
//     image: string;
//     cashBack: string;
//     annualFee: string;
//     pros: string;
//     bonusOffer: string;
//     more: string;
//   }

//   const [selectedCreditCards, setSelectedCreditCards] = useState([
//     "Bank of America Customized Cash Rewards",
//     "Wells Fargo Active Cash",
//     "American Express Blue Cash Preferred",
//   ]);

//   // Create a mapping object for card data
//   const cardDataMap: { [key: string]: CreditCard } = {};
//   CreditCardData.forEach((card) => {
//     cardDataMap[card.name] = card;
//   });

//   // Filter card data based on selectedCreditCards
//   const selectedCardData = selectedCreditCards.map(
//     (cardName) => cardDataMap[cardName]
//   );
//   console.log(cardDataMap);
//   //console.log(selectedCreditCards);
//   const cardNames = selectedCardData.map((card) => card.name);
//   const annualFees = selectedCardData.map((card) => card.annualFee);
//   const bonusOffers = selectedCardData.map((card) => card.bonusOffer);
//   const cashBack = selectedCardData.map((card) => card.cashBack);
//   const pros = selectedCardData.map((card) => card.pros);
//   const more = selectedCardData.map((card) => card.more);
//   const imageURLs = selectedCardData.map((card) => card.image);
//   //console.log("These are the" + cardNames[0], cardNames[1], cardNames[2]);

//   const [spendingInputs, setSpendingInputs] = useState({
//     groceries: 0,
//     gas: 0,
//     onlineShopping: 0,
//     dining: 0,
//     travel: 0,
//     drugStores: 0,
//     homeImprovement: 0,
//   });

//   // State variable to store the total value
//   const [totalValue, setTotalValue] = useState(0);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(spendingInputs);
//     console.log("The value of dining is:" + spendingInputs.dining);
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     setSpendingInputs((prevSpendingInputs) => ({
//       ...prevSpendingInputs,
//       [id]: parseFloat(value), // Convert input string to a number (float)
//     }));
//   };

//   const ccNameChange = (e: SelectChangeEvent<string>) => {
//     const updatedIndex = parseInt(e.target.name.slice(-1)) - 1; // Extract the index from the name (select1 -> 0, select2 -> 1, select3 -> 2)
//     const updatedValue = e.target.value;
//     console.log(updatedIndex, updatedValue);

//     setSelectedCreditCards((prevSelectedCreditCards) => {
//       const newSelectedCreditCards = [...prevSelectedCreditCards];
//       newSelectedCreditCards[updatedIndex] = updatedValue;
//       console.log("This is the new array: " + newSelectedCreditCards);
//       return newSelectedCreditCards;
//     });
//   };

//   return (
//     <>
//       <div className={styles.tableContainer}>
//         <div className={styles.tableWrapper}>
//           <h2>Spending</h2>
//           <p>Please enter your monthly average spending for each category.</p>
//           <form onSubmit={handleSubmit}>
//             <div className={styles.categoriesContainer}>
//               <div className={styles.spendingCategories}>
//                 <TextField
//                   id="groceries"
//                   label="Groceries"
//                   variant="outlined"
//                   size="small"
//                   placeholder="0"
//                   type="number"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">$</InputAdornment>
//                     ),
//                     inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
//                   }}
//                   InputLabelProps={{
//                     style: labelStyles,
//                   }}
//                   style={textFieldStyles}
//                   onChange={handleInputChange}
//                 />

//                 <TextField
//                   id="gas"
//                   label="Gas"
//                   variant="outlined"
//                   size="small"
//                   placeholder="0"
//                   type="number"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">$</InputAdornment>
//                     ),
//                     inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
//                   }}
//                   InputLabelProps={{
//                     style: labelStyles,
//                   }}
//                   style={textFieldStyles}
//                   onChange={handleInputChange}
//                 />

//                 <TextField
//                   id="onlineShopping"
//                   label="Online Shopping"
//                   variant="outlined"
//                   size="small"
//                   placeholder="0"
//                   type="number"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">$</InputAdornment>
//                     ),
//                     inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
//                   }}
//                   InputLabelProps={{
//                     style: labelStyles,
//                   }}
//                   style={textFieldStyles}
//                   onChange={handleInputChange}
//                 />

//                 <TextField
//                   id="dining"
//                   label="Dining"
//                   variant="outlined"
//                   size="small"
//                   placeholder="0"
//                   type="number"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">$</InputAdornment>
//                     ),
//                     inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
//                   }}
//                   InputLabelProps={{
//                     style: labelStyles,
//                   }}
//                   style={textFieldStyles}
//                   onChange={handleInputChange}
//                 />

//                 <TextField
//                   id="travel"
//                   label="Travel"
//                   variant="outlined"
//                   size="small"
//                   placeholder="0"
//                   type="number"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">$</InputAdornment>
//                     ),
//                     inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
//                   }}
//                   InputLabelProps={{
//                     style: labelStyles,
//                   }}
//                   style={textFieldStyles}
//                   onChange={handleInputChange}
//                 />

//                 <TextField
//                   id="drugStores"
//                   label="Drug Stores"
//                   variant="outlined"
//                   size="small"
//                   placeholder="0"
//                   type="number"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">$</InputAdornment>
//                     ),
//                     inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
//                   }}
//                   InputLabelProps={{
//                     style: labelStyles,
//                   }}
//                   style={textFieldStyles}
//                   onChange={handleInputChange}
//                 />

//                 <TextField
//                   id="homeImprovement"
//                   label="Home Improvement"
//                   variant="outlined"
//                   size="small"
//                   placeholder="0"
//                   type="number"
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">$</InputAdornment>
//                     ),
//                     inputProps: { min: 0, step: "any" }, //Step "any" allows for float values in textfield
//                   }}
//                   InputLabelProps={{
//                     style: labelStyles,
//                   }}
//                   style={textFieldStyles}
//                   onChange={handleInputChange}
//                 />
//                 <br />
//                 <button className={styles.submitButton} type="submit">
//                   Calculate
//                 </button>
//               </div>
//             </div>
//           </form>

//           <p>Total Value: ${totalValue.toFixed(2)}</p>
//           <h2>Credit Card</h2>
//           <div
//             style={{ display: "flex", gap: "140px", justifyContent: "center" }}
//           >
//             <CreditCardSelectBox
//               value={selectedCreditCards[0]}
//               onChange={ccNameChange}
//               name="select1"
//             />
//             <CreditCardSelectBox
//               value={selectedCreditCards[1]}
//               onChange={ccNameChange}
//               name="select2"
//             />
//             <CreditCardSelectBox
//               value={selectedCreditCards[2]}
//               onChange={ccNameChange}
//               name="select3"
//             />
//           </div>

//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 {imageURLs.map((URL, index) => (
//                   <td
//                     className={`${styles.column} ${
//                       index === 1 ? styles.borderTd : ""
//                     }`}
//                     key={index}
//                   >
//                     <img src={URL + ".png"} />
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 {cardNames.map((name, index) => (
//                   <td
//                     className={`${styles.column} ${
//                       index === 1 ? styles.borderTd : ""
//                     }`}
//                     key={index}
//                   >
//                     <div className={styles.cellContent}>{name}</div>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>

//           <h2>Annual Fee</h2>

//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 {annualFees.map((fee, index) => (
//                   <td
//                     className={`${styles.column} ${
//                       index === 1 ? styles.borderTd : ""
//                     }`}
//                     key={index}
//                   >
//                     <div className={styles.cellContent}>{fee}</div>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>

//           <h2>Bonus Offer</h2>

//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 {bonusOffers.map((fee, index) => (
//                   <td
//                     className={`${styles.column} ${
//                       index === 1 ? styles.borderTd : ""
//                     }`}
//                     key={index}
//                   >
//                     <div className={styles.cellContent}>{fee}</div>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>

//           <h2>Cash Back</h2>

//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 {cashBack.map((cashback, index) => (
//                   <td
//                     className={`${styles.column} ${
//                       index === 1 ? styles.borderTd : ""
//                     }`}
//                     key={index}
//                   >
//                     <div className={styles.cellContent}>{cashback}</div>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>

//           <h2>Pros</h2>

//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 {pros.map((pros, index) => (
//                   <td
//                     className={`${styles.column} ${
//                       index === 1 ? styles.borderTd : ""
//                     }`}
//                     key={index}
//                   >
//                     <div className={styles.cellContent}>{pros}</div>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>

//           <h2>Additional Info</h2>

//           <table className={styles.table}>
//             <tbody>
//               <tr>
//                 {more.map((moreInfo, index) => (
//                   <td
//                     className={`${styles.column} ${
//                       index === 1 ? styles.borderTd : ""
//                     }`}
//                     key={index}
//                   >
//                     <div className={styles.cellContent}>{moreInfo}</div>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MainBody;
