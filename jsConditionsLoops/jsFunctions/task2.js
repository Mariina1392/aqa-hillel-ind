function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
    }
}      
console.log(checkAge(25));  // true
console.log(checkAge(15));  // false