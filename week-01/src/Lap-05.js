import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface(stdin, stdout);

rl.question('Enter the size: ', (input) => {
    const size = parseInt(input);
    
    if (size < 1) return;

    if (size === 1) {
        console.log('*');
    } else {
        for (let i = 0; i < size; i++) {
            let line = ' '.repeat(size - i - 1 );
            line += '* ';
            if (i > 0) {
                line += ' '.repeat((i-1) * 2);
                line += '*';
            }
            console.log(line);
        }
        
        for (let i = size - 2; i >= 0; i--) {
            let line = ' '.repeat(size - i - 1);
            line += '* ';
            if (i > 0) {
                line += ' '.repeat((i-1) * 2);
                line += '*';
            }
            console.log(line);
        }
    }
    
    rl.close();
});

