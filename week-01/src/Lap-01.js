import readline from 'node:readline';
import {stdin,stdout} from 'node:process';

const rl = readline.createInterface({input:stdin,output:stdout});

rl.question('what is your score? ', (score) => {
   let grade;
    if(score >= 80) {
        grade = 'A';
    } else if(score >= 70) {
        grade = 'B';
    } else if(score >= 60) {
        grade = 'C';    
    } else if(score >= 50) {
        grade = 'D';  
    } else {
        grade = 'F';
    }
    // parseFloat()
    rl.write(`input Score ${score}\n`);
    rl.write(`Your Grade is ${grade} `);
    rl.close();
});
