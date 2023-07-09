import styles from "../ComparisonTable.module.css";
import CreditCardData from "../CreditCardData";

const AnnualFee = () => {
  const annualFees = CreditCardData.map((card) => card.annualFee);
  const bonusOffers = CreditCardData.map((card) => card.bonusOffer);

  return (
    <>
      <h2>Annual Fee</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            {annualFees.map((fee, index) => (
              <td className={styles.column} key={index}>
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
              <td className={styles.column} key={index}>
                <div className={styles.cellContent}>{fee}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AnnualFee;
