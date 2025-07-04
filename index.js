/* Act 1
import chalk from 'chalk';
import {format, isEqual, parseISO} from 'date-fns';

console.log(chalk.green('Elias Franco, Valentin Ferreyra, Maximo Matto, Julian Licera, 7mo 4ta'));

const hoy=new Date();
const fformato=format(hoy,'dd/MM/yyyy');
console.log(chalk.blue('La fecha de hoy es: '+fformato));

const fentrega='2025-06-13';
const fentregadate=parseISO(fentrega);
const hoy2=new Date();
hoy2.setHours(0,0,0,0);
const fentregaformato=format(fentregadate,'dd/MM/yyyy');

if(fformato<=fentregaformato){
    console.log(chalk.yellow(fentregaformato));
}else{
    console.log(chalk.red(fentregaformato));
}
*/