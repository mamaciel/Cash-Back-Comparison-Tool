import styles from "./ComparisonTable.module.css";
import CreditCardData from "./CreditCardData";
//import * from "./assets/" as images;

const ComparisonTable = () => {
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

export default ComparisonTable;
