const monthName = n => new Date(0, --n)
  .toLocaleString('en', { month: 'long' })

console.log(
    monthName(3) //➞ "March"
);

console.log(
    monthName(12) //➞ "December"
);

console.log(
    monthName(6) //➞ "June"
);