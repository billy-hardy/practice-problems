export function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = prices[1] - minPrice;
    for (let i=2; i<prices.length; i++) {
        if (maxProfit < (prices[i] - minPrice)) {
            maxProfit = prices[i] - minPrice;
        }
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        }
    }
    return maxProfit;
}
