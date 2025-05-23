const int = process.argv.slice(2);
const num = Number(int[0]);

if (Number.isInteger(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
