<script setup>
// Step 4: Getting input from users

import { ref } from 'vue'

// Create a variable to store what the user types
const name = ref('')
// It starts empty (no text)
</script>

<template>
  <div>
    <h1>What's Your Name?</h1>
    
    <!-- Input box -->
    <!-- v-model connects this input to our "name" variable -->
    <!-- Whatever you type instantly appears in "name" -->
    <input 
      v-model="name" 
      type="text" 
      placeholder="Type your name..."
    />
    
    <!-- Display what the user typed -->
    <p>You typed: {{ name }}</p>
    
    <!-- We can use it anywhere! -->
    <p>Hello, {{ name }}!</p>
  </div>
</template>

<style>
div {
  padding: 20px;
}

input {
  width: 300px;
  padding: 10px;
  font-size: 18px;
  margin: 10px 0;
}

p {
  font-size: 20px;
}
</style>