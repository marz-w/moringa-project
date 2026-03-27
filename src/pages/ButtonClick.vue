<script setup>
// Step 3: Making things interactive with buttons

import { ref } from 'vue'

// Create a counter that starts at 0
const count = ref(0)

// Create a function that adds 1 to count
// IMPORTANT: Inside functions, we must use .value
// Think of it like: count.value is the actual number inside the box
function addOne() {
  count.value = count.value + 1
  // We could also write: count.value++
}
</script>

<template>
  <div>
    <h1>Counter App</h1>
    
    <!-- Show the current count -->
    <!-- In HTML, we just use {{ count }} - no .value needed! -->
    <p>The count is: {{ count }}</p>
    
    <!-- Button that runs addOne() when clicked -->
    <!-- @click means "when someone clicks this button, do this" -->
    <button @click="addOne">Click me!</button>
  </div>
</template>

<style>
button {
  background: blue;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: darkblue;
}

p {
  font-size: 24px;
  font-weight: bold;
}
</style>