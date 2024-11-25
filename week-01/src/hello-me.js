import { argv } from 'node:process';

const name = argv[2];

console.info(`hello ${'!!' + name+'!!'}`);