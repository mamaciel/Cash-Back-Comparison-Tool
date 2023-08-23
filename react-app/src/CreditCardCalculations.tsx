interface SpendingData {
  groceries: number;
  gas: number;
  onlineShopping: number;
  dining: number;
  travel: number;
  drugStores: number;
  homeImprovement: number;
}

const cardCalculations: Record<string, (data: SpendingData) => number> = {
  "Bank of America Customized Cash Rewards": (data) => {
    let cashBackTotal = 0;

    // Find the highest category (excluding groceries)
    const categories = Object.keys(data);
    const highestCategory = categories.reduce((highest, category) => {
      if (
        category !== "groceries" &&
        data[category as keyof SpendingData] >
          data[highest as keyof SpendingData]
      ) {
        return category;
      }
      return highest;
    }, "gas");

    // After applying 3% to highest category, we have calculations for groceries that are capped at 2,500 per quarter or $833 per month
    categories.forEach((category) => {
      if (category === highestCategory) {
        cashBackTotal += data[category as keyof SpendingData] * 0.03 * 12; // 3% for highest category
      } else if (category === "groceries") {
        const quarterlyGroceries = Math.min(data.groceries, 833); // Cap groceries at 2,500 per quarter
        const remainderGroceries = Math.max(data.groceries - 833, 0);
        cashBackTotal +=
          (quarterlyGroceries * 0.02 + remainderGroceries * 0.01) * 12; // 2% capped, then 1%
      } else {
        cashBackTotal += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return cashBackTotal;
  },
  "Wells Fargo Active Cash": (data) => {
    let cashBackTotal = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      cashBackTotal += data[category as keyof SpendingData] * 0.02 * 12; // 2% on all categories x 12 months
    });
    return cashBackTotal;
  },
  "American Express Blue Cash Preferred": (data) => {
    let cashBackTotal = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "groceries") {
        if (data[category as keyof SpendingData] <= 500) {
          cashBackTotal += data[category as keyof SpendingData] * 0.06 * 12;
        } else {
          cashBackTotal +=
            500 * 0.06 * 12 +
            (data[category as keyof SpendingData] - 500) * 0.01 * 12; // 6% for the first $500, 1% for the remaining amount
        }
      } else if (category === "gas") {
        cashBackTotal += data[category as keyof SpendingData] * 0.03 * 12; // 3% for gas
      } else {
        cashBackTotal += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return cashBackTotal;
  },
  "American Express Blue Cash Everyday": (data) => {
    let cashBackTotal = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "groceries") {
        if (data[category as keyof SpendingData] <= 500) {
          cashBackTotal += data[category as keyof SpendingData] * 0.06 * 12;
        } else {
          cashBackTotal +=
            500 * 0.03 * 12 +
            (data[category as keyof SpendingData] - 500) * 0.01 * 12; // 3% for the first $500, 1% for the remaining amount
        }
      } else if (category === "onlineShopping") {
        cashBackTotal += data[category as keyof SpendingData] * 0.03 * 12; // 3% for online shopping
      } else if (category === "gas") {
        cashBackTotal += data[category as keyof SpendingData] * 0.03 * 12; // 3% for gas
      } else {
        cashBackTotal += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return cashBackTotal;
  },
  "Bank of America Unlimited Cash Rewards": (data) => {
    let cashBackTotal = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      cashBackTotal += data[category as keyof SpendingData] * 0.015 * 12; // 1.5% on all categories x 12 months
    });
    return cashBackTotal;
  },
  "Capital One SavorOne": (data) => {
    let cashBackTotal = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "travel") {
        cashBackTotal += data[category as keyof SpendingData] * 0.05 * 12; // 5% for travel
      } else if (category === "groceries" || category === "dining") {
        cashBackTotal += data[category as keyof SpendingData] * 0.03 * 12; // 3% for dining and groceries
      } else {
        cashBackTotal += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return cashBackTotal;
  },
  "Chase Freedom Unlimited": (data) => {
    let cashBackTotal = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "travel") {
        cashBackTotal += data[category as keyof SpendingData] * 0.05 * 12; // 5% for travel
      } else if (category === "drugStores" || category === "dining") {
        cashBackTotal += data[category as keyof SpendingData] * 0.03 * 12; // 3% for dining and drug stores
      } else {
        cashBackTotal += data[category as keyof SpendingData] * 0.015 * 12; // 1% for other categories
      }
    });
    return cashBackTotal;
  },
  "Citi Double Cash": (data) => {
    let cashBackTotal = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      cashBackTotal += data[category as keyof SpendingData] * 0.02 * 12; // 2% on all categories x 12 months
    });
    return cashBackTotal;
  },
};

export const Calculator = (
  data: SpendingData,
  selectedCreditCards: string[]
) => {
  // Perform common calculations based on data object

  // Iterate through selectedCreditCards and calculate based on card name
  const results: number[] = [];
  selectedCreditCards.forEach((card) => {
    if (cardCalculations.hasOwnProperty(card)) {
      const calculationFunction = cardCalculations[card];
      const result = calculationFunction(data);
      results.push(result);
    }
  });
  console.log("These are the results: " + results);
  return results;
};
