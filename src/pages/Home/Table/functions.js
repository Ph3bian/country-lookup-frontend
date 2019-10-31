export const numFormat = amountArray =>
    amountArray.map(
        ({ rate, code }) => `${code}: ${Number.parseFloat(rate).toFixed(2)} `
    )

export const convertAmount = (amount, countryArray) =>
    countryArray.map(({ rate, code }) =>
        Number.parseFloat(rate * amount).toFixed(2)
    )
