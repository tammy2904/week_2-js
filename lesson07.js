function getDivisorsCount(number) {
    if (typeof number !== 'number' || !Number.isInteger(number) || number <= 0) {
      alert('number должен быть целым числом и больше нуля!');
      return NaN;
    }
    let count = 0;
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        //  увеличиваем счетчик если number делится на i без остатка,
        count++;
      }
    }
    return count;
  }
  
  console.log(getDivisorsCount(4));
  console.log(getDivisorsCount(5)); 
  