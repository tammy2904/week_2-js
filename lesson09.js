function getSumOfSequence(number) {
    const sequence = [];
    
    for (let i = 1; i <= number; i++) {
      sequence.push(i);
    }
    
    if(sequence.length === 0) {
      return 0;
    }
  const sum = sequence[0] + sequence[sequence.length - 1];
    
    return sum;
  }
  
  console.log(getSumOfSequence(5));
  