import React from "react";
import styles from "./ComparisonTable.module.css";
import CreditCardData from "./CreditCardData";

interface CreditCardData {
  name: string;
  cashBack: string;
  annualFee: string;
  pros: string;
  bonusOffer: string;
  more: string;
}

// Row component
const Row: React.FC<CreditCardData> = ({
  name,
  cashBack,
  annualFee,
  pros,
  bonusOffer,
  more,
}) => {
  return (
    <>
      <tr>
        <td className={styles.cardName}>{name}</td>
      </tr>
      <tr>
        <td>{cashBack}</td>
      </tr>
      <tr>
        <td>{annualFee}</td>
      </tr>
      <tr>
        <td>{pros}</td>
      </tr>
      <tr>
        <td>{bonusOffer}</td>
      </tr>
      <tr>
        <td>{more}</td>
      </tr>
    </>
  );
};

const ComparisonTable = () => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.row}>
          {CreditCardData.map((data, index) => (
            <td className={styles.column} key={index}>
              <div className={styles.cellContent}>
                <table>
                  <tbody>
                    <Row {...data} />
                  </tbody>
                </table>
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
