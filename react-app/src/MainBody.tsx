import styles from "./MainBody.module.css";
import CreditCardData from "./CreditCardData";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

//import * from "./assets/" as images;

const MainBody = () => {
  const cardNames = CreditCardData.map((card) => card.name);
  const annualFees = CreditCardData.map((card) => card.annualFee);
  const bonusOffers = CreditCardData.map((card) => card.bonusOffer);
  const cashBack = CreditCardData.map((card) => card.cashBack);
  const pros = CreditCardData.map((card) => card.pros);
  const more = CreditCardData.map((card) => card.more);
  const imageURLs = CreditCardData.map((card) => card.image);

  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.tableWrapper}>
          <h2>Spending</h2>
          <p>
            Please enter your monthly average spending for each category. Your
            estimated yearly cashback will be displayed at the bottom of the
            page
          </p>
          <div className="spendingCategories">
            <FormControl size="small" sx={{ m: 1, width: "140px" }}>
              <InputLabel style={{ color: "black" }} htmlFor="groceries">
                Groceries
              </InputLabel>
              <OutlinedInput
                id="groceries"
                name="groceries"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                style={{ color: "black" }}
                label="Amount"
              />
            </FormControl>

            <FormControl size="small" sx={{ m: 1, width: "140px" }}>
              <InputLabel style={{ color: "black" }} htmlFor="gas">
                Gas
              </InputLabel>
              <OutlinedInput
                id="gas"
                name="gas"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                style={{ color: "black" }}
                label="Amount"
              />
            </FormControl>

            <FormControl size="small" sx={{ m: 1, width: "140px" }}>
              <InputLabel style={{ color: "black" }} htmlFor="onlineShopping">
                Online Shopping
              </InputLabel>
              <OutlinedInput
                id="onlineShopping"
                name="onlineShopping"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                style={{ color: "black" }}
                label="Amount"
              />
            </FormControl>

            <FormControl size="small" sx={{ m: 1, width: "140px" }}>
              <InputLabel style={{ color: "black" }} htmlFor="dining">
                Dining
              </InputLabel>
              <OutlinedInput
                id="dining"
                name="dining"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                style={{ color: "black" }}
                label="Amount"
              />
            </FormControl>

            <FormControl size="small" sx={{ m: 1, width: "140px" }}>
              <InputLabel style={{ color: "black" }} htmlFor="travel">
                Travel
              </InputLabel>
              <OutlinedInput
                id="travel"
                name="travel"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                style={{ color: "black" }}
                label="Amount"
              />
            </FormControl>

            <FormControl size="small" sx={{ m: 1, width: "140px" }}>
              <InputLabel style={{ color: "black" }} htmlFor="drugStores">
                Drug Stores
              </InputLabel>
              <OutlinedInput
                id="drugStores"
                name="drugStores"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                style={{ color: "black" }}
                label="Amount"
              />
            </FormControl>

            <FormControl size="small" sx={{ m: 1, width: "140px" }}>
              <InputLabel style={{ color: "black" }} htmlFor="homeImprovement">
                Home Improvement
              </InputLabel>
              <OutlinedInput
                id="homeImprovement"
                name="homeImprovement"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                style={{ color: "black" }}
                label="Amount"
              />
            </FormControl>
          </div>
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
