let num = prompt("enter your number b/w 0 and 1 million");
let count = 0;
if (num < 0 || num > 1000000) {
  console.log("Invalid number");
} else {
  for (i = 1; i <= num; i++) {
    count = count + i;
  }
  console.log("Sum of numbers up to" + num + "is" + count);
}
