#!/usr/bin/env node
const chalk = require('chalk');

const battles = [
  { name: 'Quick Sort', power: 85 },
  { name: 'Merge Sort', power: 90 },
  { name: 'Bubble Sort', power: 30 },
  { name: 'Binary Search', power: 95 },
];

const challenger = battles[Math.floor(Math.random() * battles.length)];
const defender = battles[Math.floor(Math.random() * battles.length)];

console.log('\n' + chalk.red('⚔️ CODE BATTLE'));
console.log(chalk.yellow(`\n  ${challenger.name} (Power: ${challenger.power})`));
console.log(chalk.white('        VS'));
console.log(chalk.cyan(`  ${defender.name} (Power: ${defender.power})\n`));

if (challenger.power > defender.power) {
  console.log(chalk.green(`  🏆 ${challenger.name} WINS!`));
} else if (defender.power > challenger.power) {
  console.log(chalk.green(`  🏆 ${defender.name} WINS!`));
} else {
  console.log(chalk.yellow('  🤝 DRAW!'));
}

console.log('');
