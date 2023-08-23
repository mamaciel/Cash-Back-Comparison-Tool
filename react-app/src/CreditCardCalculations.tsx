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
    let total = 0;

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

    // Calculate and add the percentages based on categories
    categories.forEach((category) => {
      if (category === highestCategory) {
        total += data[category as keyof SpendingData] * 0.03 * 12; // 3% for highest category
      } else if (category === "groceries") {
        const quarterlyGroceries = Math.min(data.groceries, 833); // Cap groceries at 2,500 per quarter
        const remainderGroceries = Math.max(data.groceries - 833, 0);
        total += (quarterlyGroceries * 0.02 + remainderGroceries * 0.01) * 12; // 2% capped, then 1%
      } else {
        total += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return total;
  },
  "Wells Fargo Active Cash": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      total += data[category as keyof SpendingData] * 0.02 * 12; // 2% on all categories x 12 months
    });
    return total;
  },
  "American Express Blue Cash Preferred": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "groceries") {
        if (data[category as keyof SpendingData] <= 500) {
          total += data[category as keyof SpendingData] * 0.06 * 12;
        } else {
          total +=
            500 * 0.06 * 12 +
            (data[category as keyof SpendingData] - 500) * 0.01 * 12; // 6% for the first $500, 1% for the remaining amount
        }
      } else if (category === "gas") {
        total += data[category as keyof SpendingData] * 0.03 * 12; // 3% for gas
      } else {
        total += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return total;
  },
  "American Express Blue Cash Everyday": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "groceries") {
        if (data[category as keyof SpendingData] <= 500) {
          total += data[category as keyof SpendingData] * 0.06 * 12;
        } else {
          total +=
            500 * 0.03 * 12 +
            (data[category as keyof SpendingData] - 500) * 0.01 * 12; // 3% for the first $500, 1% for the remaining amount
        }
      } else if (category === "onlineShopping") {
        total += data[category as keyof SpendingData] * 0.03 * 12; // 3% for online shopping
      } else if (category === "gas") {
        total += data[category as keyof SpendingData] * 0.03 * 12; // 3% for gas
      } else {
        total += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return total;
  },
  "Bank of America Unlimited Cash Rewards": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      total += data[category as keyof SpendingData] * 0.015 * 12; // 1.5% on all categories x 12 months
    });
    return total;
  },
  "Capital One SavorOne": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "travel") {
        total += data[category as keyof SpendingData] * 0.05 * 12; // 5% for travel
      } else if (category === "groceries" || category === "dining") {
        total += data[category as keyof SpendingData] * 0.03 * 12; // 3% for dining and groceries
      } else {
        total += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    return total;
  },
  "Chase Freedom Unlimited": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      if (category === "travel") {
        total += data[category as keyof SpendingData] * 0.05 * 12; // 5% for travel
      } else if (category === "drugStores" || category === "dining") {
        total += data[category as keyof SpendingData] * 0.03 * 12; // 3% for dining and groceries
      } else {
        total += data[category as keyof SpendingData] * 0.015 * 12; // 1% for other categories
      }
    });
    return total;
  },
  "Citi Double Cash": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      total += data[category as keyof SpendingData] * 0.02 * 12; // 1.5% on all categories x 12 months
    });
    return total;
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
