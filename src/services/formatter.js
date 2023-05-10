const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
});

const numberFormatter = new Intl.NumberFormat(undefined, {
  currency: "TZS",
  style: "currency",
});

export { dateFormatter, numberFormatter };
