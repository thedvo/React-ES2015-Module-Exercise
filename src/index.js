import { Choice, Remove } from './helpers';
import fruits from './fruits';

let fruit = Choice(fruits);

console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}.`);
console.log('Delicious! May I have another?');

let remainingFruits = Remove(fruits, fruit);

console.log(
	`I'm sorry, we're all out. We have ${remainingFruits.length} left.`
);
