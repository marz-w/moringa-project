<template>
  <div>
    <h1>My First Vue App </h1>

    <nav>
      <router-link to="/Hello">Hello</router-link> |
      <router-link to="/ShowData">Show Data</router-link> |
      <router-link to="/ButtonClick">Button</router-link> |
      <router-link to="/TextInput">Text Input</router-link> |
      <router-link to="/MyConditions">MyConditions</router-link> |
      <router-link to="/CompleteSimpleApp">CompleteSimpleApp</router-link> |
     
    </nav>

    <router-view />
  </div>
</template>