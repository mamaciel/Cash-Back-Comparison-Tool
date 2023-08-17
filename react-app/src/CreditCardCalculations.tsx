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
    }, "groceries");

    // Calculate and add the percentages based on categories
    categories.forEach((category) => {
      if (category === highestCategory) {
        total += data[category as keyof SpendingData] * 0.03 * 12; // 3% for highest category
      } else if (category === "groceries") {
        total += data[category as keyof SpendingData] * 0.02 * 12; // 2% for groceries
      } else {
        total += data[category as keyof SpendingData] * 0.01 * 12; // 1% for other categories
      }
    });
    console.log("this is the total: " + total);
    return total;
  },
  "Wells Fargo Active Cash": (data) => {
    let total = 0;
    const categories = Object.keys(data);
    categories.forEach((category) => {
      total += data[category as keyof SpendingData] * 0.02 * 12; // 2% on all categories
    });
    return total; // Your calculated result
  },
  "American Express Blue Cash Preferred": (data) => {
    // Perform calculations for this card using the shared data
    return 3; // Your calculated result
  },
  "Bank of America Unlimited Cash Rewards": (data) => {
    return 4;
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
