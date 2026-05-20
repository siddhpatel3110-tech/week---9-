// ============================================================
// 05 - Algorithms and Data Structures
// ============================================================
//
// "Data Structures" are ways to store and organize data.
// "Algorithms" are step-by-step instructions to solve a problem.
//
// We will look at:
//   - Arrays as Stacks and Queues
//   - Objects as Hash Maps (Dictionaries) for fast lookups
//   - Basic Algorithms: Finding the maximum and counting frequencies

console.log('=== 5. Algorithms and Data Structures ===\n');

// -------- 1) Data Structures: Array as a Stack (LIFO) --------
// LIFO means Last In, First Out. Think of a stack of plates.
console.log('1) Array as a Stack (LIFO - Last In, First Out)');
const stack = [];
stack.push('Plate 1');
stack.push('Plate 2');
stack.push('Plate 3');
console.log(`   Added 3 plates. Stack: [${stack.join(', ')}]`);

const topPlate = stack.pop(); // Removes the LAST item
console.log(`   Popped (removed): ${topPlate}`);
console.log(`   Remaining Stack: [${stack.join(', ')}]`);

// -------- 2) Data Structures: Array as a Queue (FIFO) --------
// FIFO means First In, First Out. Think of a line at a store.
console.log('\n2) Array as a Queue (FIFO - First In, First Out)');
const queue = [];
queue.push('Customer 1');
queue.push('Customer 2');
queue.push('Customer 3');
console.log(`   Line has 3 customers: [${queue.join(', ')}]`);

const nextCustomer = queue.shift(); // Removes the FIRST item
console.log(`   Served (removed): ${nextCustomer}`);
console.log(`   Remaining Queue: [${queue.join(', ')}]`);

// -------- 3) Data Structures: Object as a Hash Map --------
// Objects are perfect for storing "Key-Value" pairs.
// Finding a value by its key is incredibly fast (O(1) time).
console.log('\n3) Object as a Hash Map (Dictionary) for fast lookups');
const userDatabase = {
  'user_101': { name: 'Layla', role: 'admin' },
  'user_102': { name: 'Omar', role: 'student' },
};

// Searching an array requires looking at every item (slow).
// Looking up a key in an object is direct and fast!
const targetId = 'user_102';
if (userDatabase[targetId]) {
  console.log(`   Found user instantly: ${userDatabase[targetId].name}`);
} else {
  console.log(`   User ${targetId} not found.`);
}

// -------- 4) Algorithms: Finding the Maximum Value --------
console.log('\n4) Algorithm: Finding the Maximum Value');
const scores = [45, 82, 19, 94, 63, 77];
console.log(`   Scores: [${scores.join(', ')}]`);

// Start by assuming the first item is the biggest
let maxScore = scores[0];

// Loop through the rest to see if anything is bigger
scores.forEach(score => {
  if (score > maxScore) {
    maxScore = score;
  }
});
console.log(`   The highest score is: ${maxScore}`);

// -------- 5) Algorithms: Frequency Counter --------
// How many times does each word appear in a list?
// We use an object to keep track of the counts!
console.log('\n5) Algorithm: Frequency Counter');
const votes = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(`   Votes cast: [${votes.join(', ')}]`);

const voteCounts = {};

votes.forEach(vote => {
  // If the fruit is already in our object, add 1 to its count
  if (voteCounts[vote]) {
    voteCounts[vote] += 1;
  } else {
    // Otherwise, this is the first time we've seen it! Set it to 1.
    voteCounts[vote] = 1;
  }
});

console.log('   Final Tally:');
// Object.keys gives us an array of the keys (the fruit names)
Object.keys(voteCounts).forEach(fruit => {
  console.log(`   - ${fruit}: ${voteCounts[fruit]}`);
});

console.log('\nDone.\n');
 