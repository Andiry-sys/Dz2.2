let _check = {
  Name: 'Apple',
  Count: 2,
  PriceForOne: 10,
};

function PrintCheck(check) {
  console.log('Check:');
  for (const key in check) {
    const element = check[key];
    console.log(`${key}: ${element}`);
  }
}

function TotalPrice(check) {
  let sum = check['Count'] * check['PriceForOne'];

  console.log(`\nSuma ${sum}`);
}

function VeryHightPrice(check) {
  let max = 0;
  for (const key in check) {
    if (Object.hasOwnProperty.call(check, key)) {
      if (typeof check[key] == 'number') {
        max = Math.max(check[key]);
      }
    }
  }
  console.log(`\nMax: ${max}`);
}

PrintCheck(_check);
TotalPrice(_check);
VeryHightPrice(_check);
