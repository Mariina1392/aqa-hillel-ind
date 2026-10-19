function checkOrder(available, ordered) {
  if (ordered > available) {
    return "Your order is too large, we don't have enough goods.";
  }
  if (ordered === 0) {
    return "Your order is empty.";
  }
  return "Your order is accepted";
}
console.log(checkOrder(10, 15));
console.log(checkOrder(10, 5));
console.log(checkOrder(10, 0));