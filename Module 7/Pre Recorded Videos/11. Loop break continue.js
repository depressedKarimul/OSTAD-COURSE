// ===============================================
// 🔄 11. Loop Control Statements: break & continue
// ===============================================
//
// Loop control statements are used to alter the flow of loops.
// In JavaScript, two main statements are:
// 1️⃣ break → Immediately stops (terminates) the loop.
// 2️⃣ continue → Skips the current iteration and moves to the next one.
// ===============================================



// -----------------------------------------------
// 🔹 Example 1: Using 'break' in a for loop
// -----------------------------------------------
// The 'break' statement exits the loop completely when a condition is met.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Loop stops when i = 5
  }
  console.log(i);
}

// ✅ Output:
// 1
// 2
// 3
// 4
// (Stops at 5 — rest of the loop is skipped)



// -----------------------------------------------
// 🔹 Example 2: Using 'continue' in a for loop
// -----------------------------------------------
// The 'continue' statement skips the current iteration,
// but the loop continues with the next iteration.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skips printing 5
  }
  console.log(i);
}

// ✅ Output:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10



// -----------------------------------------------
// 🔹 Example 3: Combining 'break' and 'continue'
// -----------------------------------------------
// Prints only odd numbers below 10.
// When i >= 10, loop stops.
// When i is even, it skips that iteration.

for (let i = 1; i <= 20; i++) {
  
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }

  if (i >= 10) {
    break; // Stop loop when i reaches 10 or more
  }

  console.log(i);
}

// ✅ Output:
// 1
// 3
// 5
// 7
// 9
