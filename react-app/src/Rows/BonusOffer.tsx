import styles from "../ComparisonTable.module.css";
import CreditCardData from "../CreditCardData";

const BonusOffer = () => {
  const bonusOffers = CreditCardData.map((card) => card.bonusOffer);

  return (
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
  );
};

export default BonusOffer;
