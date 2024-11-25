import { argv } from 'node:process';
// parseInt() converts string to integer
const n = parseInt(argv[2]); //input form index

for(let j = 1; j <= 12; j++) {
let line = '';
for(let i = 2; i <= n; i++) {
// String.padStart() pads starting with spaces
line += `${i * j}`.padStart(5);
}
console.info(line);
}