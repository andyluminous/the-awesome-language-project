<script setup>
  import { ref } from 'vue';
  import { useUserStateStore } from "@/stores/user";
  const userState = useUserStateStore();
  const isLoading = ref(false);

  const headerText = "Log in, already"

  function onSubmit(event) {
    console.log('SUBMITTING', event);
    isLoading.value = true;
    setTimeout(() => {
      userState.logIn({ username: 'admin', email: 'admin@example.com'})
      isLoading.value = false;
    }, 2000);
  }
</script>

<template>
  <div>
    <h1>{{ headerText }}</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">Email</label>
      <input type="text" name="email" id="email">

      <label for="password">Password</label>
      <input type="password" name="password" id="password">

      <button :class="{ loading: isLoading }" type="submit">Log In</button>
    </form>
  </div>

</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 1rem;
  }

  @keyframes color-flow {
    0%   {background-color: blue;}
    25%  {background-color: green;}
    50%  {background-color: red;}
    100% {background-color: yellow;}
  }

  form button {
    background-color: blue;
    border: none;
    border-radius: 0.25rem;
    color: white;
    padding: 0.25rem;
  }

  form button.loading {
    animation-name: color-flow;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
</style>