
const count = 2;

if (count.length === 0) {
  console.log("No argument");
} else if (count === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

// const args = process.argv.slice(2); // Gets actual arguments passed to script

// if (args.length === 0) {
//   console.log("No argument");
// } else if (args.length === 1) {
//   console.log("Argument found");
// } else {
//   console.log("Arguments found");
// }