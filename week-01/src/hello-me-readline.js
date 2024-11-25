import readline from 'node:readline';
import {stdin,stdout} from 'node:process';

const rl = readline.createInterface({input:stdin,output:stdout});

rl.question('what is your name? ', (name) => {
    rl.write(`hello ${name}\n`);
    rl.close();
});
// console.info('End of script');