function factorialize(num) {
  // 
  let factor = 1;
  for (let i = 1; i <= num; i++) {
      factor *= i;
  }
    return factor
}

function factorializeRecursive(num) {
  return num < 2 ? 1 : num * factorializeRecursive(--num);
}

console.log(factorializeRecursive(5));