// ===============================================
// 🔄 09. Switch Case Statement in JavaScript
// ===============================================
//
// The switch statement is used to perform different actions
// based on different conditions. It’s an alternative to multiple
// if-else statements and makes the code cleaner and more readable.
// ===============================================



// -----------------------------------------------
// 🔹 Example: Identify User Type
// -----------------------------------------------

let userType = "teacher";

// The value of 'userType' is compared with each 'case'.
// When a match is found, that block of code is executed.
switch (userType) {

  case "admin":
    console.log("👑 Welcome, Admin! You have full access.");
    break;

  case "teacher":
    console.log("📘 Welcome, Teacher! You can manage your courses.");
    break;

  case "student":
    console.log("🎓 Welcome, Student! You can view and enroll in courses.");
    break;

  case "guest":
    console.log("👋 Welcome, Guest! Please sign up to access more features.");
    break;

  default:
    console.log("❌ Invalid user type. Please try again.");
    break;
}


// ✅ Output for userType = "teacher":
// 📘 Welcome, Teacher! You can manage your courses.
