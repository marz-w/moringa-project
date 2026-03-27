<script setup>
// Step 5: Showing/hiding things with v-if

import { ref } from 'vue'

const age = ref(0)
</script>

<template>
  <div>
    <h1>Age Checker</h1>
    
    <!-- Number input -->
    <input 
      v-model="age" 
      type="number" 
      placeholder="Enter your age"
    />
    
    <!-- v-if means: only show this IF the condition is true -->
    
    <!-- If age is less than 18, show this -->
    <p v-if="age < 18" class="red">
      You are a minor (under 18)
    </p>
    
    <!-- If age is 18 or more, show this instead -->
    <!-- v-else means: show this when v-if above is FALSE -->
    <p v-else class="green">
      You are an adult (18 or older)
    </p>
    
    <!-- This always shows (no v-if) -->
    <p>Your age is: {{ age }}</p>
  </div>
</template>

<style>
div {
  padding: 20px;
}

input {
  width: 200px;
  padding: 10px;
  font-size: 18px;
  margin: 10px 0;
}

.red {
  color: red;
  font-weight: bold;
}

.green {
  color: green;
  font-weight: bold;
}
</style>