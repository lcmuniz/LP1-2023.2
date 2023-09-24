let x = 1;
while (x > 0) {
  console.log(x);
  x++;
  if (x == 100_000) {
    break;
  }
}
