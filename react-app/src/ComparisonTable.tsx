import styles from './ComparisonTable.module.css';

interface RowProps {
  data: {
    name: string;
    cashBack: string;
    annualFee: string;
    pros: string;
    bonusOffer: string;
    more: string;
  };
}

// Row component
const Row: React.FC<RowProps> = ({ data }) => {
  return (
    <>
      <tr>
        <td className={styles['card-name']}>{data.name}</td>
      </tr>
      <tr>
        <td>{data.cashBack}</td>
      </tr>
      <tr>
        <td>{data.annualFee}</td>
      </tr>
      <tr>
        <td>{data.pros}</td>
      </tr>
      <tr>
        <td>{data.bonusOffer}</td>
      </tr>
      <tr>
        <td>{data.more}</td>
      </tr>
    </>
  );
};

// ComparisonTable component
const ComparisonTable = () => {
  // Sample data for demonstration
  const data: {
    name: string;
    cashBack: string;
    annualFee: string;
    pros: string;
    bonusOffer: string;
    more: string;
  }[] = [
    {
      name: 'Bank of America Customized Cash Rewards',
      cashBack: '3% in category of choice, 2% at grocery stores and wholesale clubs, 1% on all other purchases',
      annualFee: '$0',
      pros: 'No annual fee, bonus offer',
      bonusOffer: '$200 cash rewards bonus after you make at least $1,000 in purchases in the first 90 days of account opening.',
      more: 'Additional features',
    },
    {
      name: 'Wells Fargo Active Cash',
      cashBack: '2% on all purchases',
      annualFee: '$0',
      pros: 'No annual fee, bonus offer, simple cashback',
      bonusOffer: '$200 cash rewards bonus after you make at least $500 in purchases in the first 90 days of account opening.',
      more: 'Additional features',
    },
    {
      name: 'American Express Blue Cash Preferred',
      cashBack: '6% at U.S. supermarkets on up to $6,000 per year in purchases, 6% on select U.S. streaming subscriptions, 3% at U.S. gas stations and on transit, 1% on all other purchases.',
      annualFee: '$0 for the first year, then $95/year',
      pros: 'Great for groceries',
      bonusOffer: '$250 statement credit after you spend $3,000 in purchases within the first 6 months.',
      more: 'Additional features',
    },
  ];

  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.row}>
          {data.map((rowData, index) => (
            <td className={styles.column} key={index}>
              <table>
                <tbody>
                  <Row data={rowData} />
                </tbody>
              </table>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default ComparisonTable;
