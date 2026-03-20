<script setup>
// Import ref from Vue - this makes our data "reactive" (auto-updates the screen)
import { ref } from 'vue'

// Create a reactive variable called "name" that starts with an empty string
// Think of ref() as a special box that Vue watches for changes
const name = ref('')

// Create a reactive number that starts at 0
const count = ref(0)

// Create a function that adds 1 to count
// We use .value because ref() wraps our data in a special container
function addOne() {
  count.value = count.value + 1  // Same as count.value++
}

// Create a function that subtracts 1 from count
function subtractOne() {
  count.value = count.value - 1  // Same as count.value--
}

// Create a function that resets count back to 0
function reset() {
  count.value = 0
}
</script>

<template>
  <!-- This is the HTML that users see -->
  <!-- Everything inside {{ }} displays data from our script -->
  
  <div class="container">
    <!-- Main heading -->
    <h1>🎉 My First Vue App</h1>
    
    <!-- Section 1: Greeting -->
    <div class="section">
      <h2>👋 Say Hello!</h2>
      
      <!-- Input box - v-model connects it to our "name" variable -->
      <!-- Whatever you type appears in "name" automatically -->
      <input 
        v-model="name" 
        type="text" 
        placeholder="Type your name here..."
      />
      
      <!-- Display a greeting using the name -->
      <!-- If name is empty, it just says "Hello, !" -->
      <p class="greeting">Hello, {{ name }}!</p>
      
      <!-- Show this message only if name is NOT empty -->
      <!-- v-if means "only show this if the condition is true" -->
      <p v-if="name !== ''" class="message">
        Nice to meet you, {{ name }}! 👋
      </p>
    </div>
    
    <!-- Section 2: Counter -->
    <div class="section">
      <h2>🔢 Counter</h2>
      
      <!-- Display the current count -->
      <!-- {{ count }} automatically shows the value without needing .value -->
      <div class="count-display">
        <p>Current number:</p>
        <h3>{{ count }}</h3>
      </div>
      
      <!-- Buttons to control the counter -->
      <div class="buttons">
        <!-- @click means "when this button is clicked, run this function" -->
        <!-- @click is short for v-on:click -->
        <button @click="subtractOne">➖ Minus 1</button>
        <button @click="reset">🔄 Reset</button>
        <button @click="addOne">➕ Plus 1</button>
      </div>
      
      <!-- Show different messages based on the count value -->
      <!-- Only ONE of these will show at a time -->
      
      <!-- If count is less than 0, show this -->
      <p v-if="count < 0" class="negative">
        The number is negative! 🔴
      </p>
      
      <!-- If count is exactly 0, show this -->
      <!-- v-else-if means "if the previous v-if was false, check this condition" -->
      <p v-else-if="count === 0" class="zero">
        The number is zero! ⚪
      </p>
      
      <!-- If both above are false (count is positive), show this -->
      <!-- v-else means "if nothing above was true, show this" -->
      <p v-else class="positive">
        The number is positive! 🟢
      </p>
    </div>
    
    <!-- Section 3: Fun Math -->
    <div class="section">
      <h2>🧮 Math Time!</h2>
      
      <!-- You can do math and calculations inside {{ }} -->
      <p>Double the count: {{ count * 2 }}</p>
      <p>Count plus 10: {{ count + 10 }}</p>
      <p>Count squared: {{ count * count }}</p>
      
      <!-- You can also use logic inside {{ }} -->
      <!-- This is called a "ternary operator" - it's like a mini if-else -->
      <!-- Format: condition ? if_true : if_false -->
      <p>Is count even? {{ count % 2 === 0 ? 'Yes ✅' : 'No ❌' }}</p>
    </div>
  </div>
</template>

<style scoped>
/* scoped means these styles only apply to THIS component */

/* Main container for everything */
.container {
  max-width: 600px;           /* Don't get wider than 600px */
  margin: 0 auto;              /* Center on the page */
  padding: 2rem;               /* Space inside the container */
  font-family: Arial, sans-serif;  /* Font style */
}

/* Main heading style */
h1 {
  text-align: center;          /* Center the text */
  color: #42b983;              /* Vue green color */
  margin-bottom: 2rem;         /* Space below the heading */
}

/* Each section box */
.section {
  background: #f9f9f9;         /* Light gray background */
  padding: 1.5rem;             /* Space inside */
  margin-bottom: 1.5rem;       /* Space between sections */
  border-radius: 12px;         /* Rounded corners */
  border: 2px solid #e0e0e0;   /* Light border */
}

/* Section headings */
.section h2 {
  margin-top: 0;               /* No space above */
  color: #2c3e50;              /* Dark gray */
}

/* Text input box */
input[type="text"] {
  width: 100%;                 /* Full width */
  padding: 0.75rem;            /* Space inside the input */
  font-size: 1rem;             /* Text size */
  border: 2px solid #ddd;      /* Light border */
  border-radius: 8px;          /* Rounded corners */
  margin-bottom: 1rem;         /* Space below */
  box-sizing: border-box;      /* Include padding in width */
}

/* When user clicks in the input box */
input[type="text"]:focus {
  outline: none;               /* Remove default outline */
  border-color: #42b983;       /* Change border to green */
}

/* The greeting text */
.greeting {
  font-size: 1.5rem;           /* Bigger text */
  font-weight: bold;           /* Make it bold */
  color: #2c3e50;              /* Dark gray */
  margin: 1rem 0;              /* Space above and below */
}

/* The "Nice to meet you" message */
.message {
  background: #e8f5e9;         /* Light green background */
  padding: 1rem;               /* Space inside */
  border-radius: 8px;          /* Rounded corners */
  color: #2e7d32;              /* Dark green text */
  border-left: 4px solid #4caf50;  /* Green accent line */
}

/* Count display box */
.count-display {
  background: white;           /* White background */
  padding: 1.5rem;             /* Space inside */
  border-radius: 8px;          /* Rounded corners */
  text-align: center;          /* Center the text */
  margin-bottom: 1rem;         /* Space below */
}

/* The big number */
.count-display h3 {
  font-size: 3rem;             /* Really big! */
  margin: 0.5rem 0;            /* Small space above/below */
  color: #42b983;              /* Green color */
}

/* Container for buttons */
.buttons {
  display: flex;               /* Put buttons in a row */
  gap: 0.5rem;                 /* Space between buttons */
  margin-bottom: 1rem;         /* Space below */
}

/* All buttons */
button {
  flex: 1;                     /* Each button takes equal space */
  padding: 1rem;               /* Space inside button */
  font-size: 1rem;             /* Text size */
  border: none;                /* No border */
  border-radius: 8px;          /* Rounded corners */
  background: #42b983;         /* Green background */
  color: white;                /* White text */
  cursor: pointer;             /* Show pointer when hovering */
  transition: all 0.3s;        /* Smooth animation */
  font-weight: bold;           /* Bold text */
}

/* When mouse hovers over button */
button:hover {
  background: #35a372;         /* Darker green */
  transform: translateY(-2px); /* Move up slightly */
}

/* When button is clicked */
button:active {
  transform: translateY(0);    /* Move back down */
}

/* Negative number message (red) */
.negative {
  background: #ffebee;         /* Light red background */
  color: #c62828;              /* Dark red text */
  padding: 1rem;               /* Space inside */
  border-radius: 8px;          /* Rounded corners */
  border-left: 4px solid #f44336;  /* Red accent */
  margin: 0;                   /* No extra margin */
}

/* Zero message (gray) */
.zero {
  background: #f5f5f5;         /* Light gray background */
  color: #616161;              /* Medium gray text */
  padding: 1rem;               /* Space inside */
  border-radius: 8px;          /* Rounded corners */
  border-left: 4px solid #9e9e9e;  /* Gray accent */
  margin: 0;                   /* No extra margin */
}

/* Positive number message (green) */
.positive {
  background: #e8f5e9;         /* Light green background */
  color: #2e7d32;              /* Dark green text */
  padding: 1rem;               /* Space inside */
  border-radius: 8px;          /* Rounded corners */
  border-left: 4px solid #4caf50;  /* Green accent */
  margin: 0;                   /* No extra margin */
}

/* Paragraphs in math section */
.section p {
  font-size: 1.1rem;           /* Slightly bigger text */
  margin: 0.5rem 0;            /* Small space above/below */
  color: #2c3e50;              /* Dark gray */
}
</style>