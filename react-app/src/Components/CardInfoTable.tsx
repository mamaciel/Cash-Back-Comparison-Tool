import React from "react";
import styles from "../styling/MainBody.module.css"; // Import your CSS module here

interface CardInfoTableProps {
  title: string;
  data: string[];
}

const CardInfoTable: React.FC<CardInfoTableProps> = ({ title, data }) => {
  return (
    <>
      <h2>{title}</h2>
      <table className={styles.table}>
        <tbody>
          <tr>
            {data.map((item, index) => (
              <td
                className={`${styles.column} ${
                  index === 1 ? styles.borderTd : ""
                }`}
                key={index}
              >
                <div className={styles.cellContent}>{item}</div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CardInfoTable;
