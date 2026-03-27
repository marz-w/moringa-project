<script setup>
// Complete Simple App - combining everything!

import { ref } from 'vue'

// Data for greeting
const name = ref('')

// Data for counter
const count = ref(0)

// Function to add 1
function increment() {
  count.value++
}

// Function to subtract 1
function decrement() {
  count.value--
}

// Function to reset to 0
function reset() {
  count.value = 0
}
</script>

<template>
  <div class="app">
    <h1>My Simple Vue App</h1>
    
    <!-- Section 1: Greeting -->
    <div class="section">
      <h2>👋 Greeting</h2>
      <input 
        v-model="name" 
        type="text" 
        placeholder="What's your name?"
      />
      <p v-if="name">Hello, {{ name }}! 😊</p>
    </div>
    
    <!-- Section 2: Counter -->
    <div class="section">
      <h2>🔢 Counter</h2>
      <p class="big-number">{{ count }}</p>
      
      <button @click="decrement">- Minus</button>
      <button @click="reset">Reset</button>
      <button @click="increment">+ Plus</button>
      
      <!-- Show message based on count -->
      <p v-if="count > 0" class="positive">Positive number! ✅</p>
      <p v-else-if="count < 0" class="negative">Negative number! ⚠️</p>
      <p v-else class="zero">Zero! ⭕</p>
    </div>
  </div>
</template>

<style>
/* Main container */
.app {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
}

/* Each section box */
.section {
  background: #f5f5f5;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
}

h2 {
  margin-top: 0;
}

/* Input box */
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

/* Big counter number */
.big-number {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin: 20px 0;
}

/* Buttons */
button {
  background: #4CAF50;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #45a049;
}

/* Message styles */
.positive {
  color: green;
  font-weight: bold;
}

.negative {
  color: red;
  font-weight: bold;
}

.zero {
  color: gray;
  font-weight: bold;
}
</style>