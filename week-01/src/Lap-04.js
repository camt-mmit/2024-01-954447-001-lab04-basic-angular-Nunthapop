import { argv } from "node:process";
const n = parseInt(argv[2]); //input form index

let star = "";
for (let i = 1; i <= n; i++) {
  star += "*";
}
console.log(star);


for (let i = 1; i <= n - 2; i++) {
  let middle = "";
  for (let j = 1; j <= n - 2; j++) {
    middle += " ";
  }
  console.log("*" + middle + "*");
}

if (n > 1) {
  star = "";
  for (let i = 1; i <= n; i++) {
    star += "*";
  }
  console.log(star);
}
