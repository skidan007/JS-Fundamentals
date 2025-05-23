
// const count = 2;

// if (count.length === 0) {
//   console.log("No argument");
// } else if (count === 1) {
//   console.log("Argument found");
// } else {
//   console.log("Arguments found");
// }

const count = process.argv.slice(2); 

if (count.length === 0) {
  console.log("No argument");
} else if (count.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
