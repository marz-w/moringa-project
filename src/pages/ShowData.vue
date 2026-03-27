<script setup>
// Step 2: Making data that can change

// First, we import "ref" from Vue
// ref makes data "reactive" (it updates the screen automatically)
import { ref } from 'vue'

// Create a variable called "message"
// ref('Hello') means: start with the text "Hello"
const message = ref('Hello')

// That's it! Now we can use "message" in our HTML below
</script>

<template>
  <div>
    <!-- Display the message using {{ }} -->
    <!-- {{ message }} shows what's inside the message variable -->
    <h1>{{ message }}</h1>
    
    <!-- We can use it multiple times! -->
    <p>The message is: {{ message }}</p>
  </div>
</template>

<style>
h1 {
  color: green;
}
</style>