<template>
  <div class="small-container">
    <div class="form">
      <p class="msg-warrning" v-if="$route.query.redirect">You need to login first</p>
      <form class="login-form" @submit.prevent="login">
        <label for="username">User Name</label>
        <input
          type="text"
          v-model="user.username"
          placeholder="Enter your user name"
          :class="{ 'has-error': submitting && errors.username }"
        />
        <p v-if="errors.username && submitting" class="error-message">
          {{ errors.username }}
        </p>
        <label for="password">Password</label>
        <input
          type="password"
          v-model="user.password"
          placeholder="Enter your password"
          :class="{ 'has-error': submitting && errors.password }"
        />
        <p v-if="errors.password && submitting" class="error-message">
          {{ errors.password }}
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      error: '',
      errors: {},
      submitting: false,
    };
  },
  methods: {
    login() {
      this.submitting = true;
      if (!!this.isValidForm.username || !!this.isValidForm.passowrd) {
      } else {
        this.submitting = false;
      }
    },

  },
  computed: {
    isValidForm() {
      if (!this.user.username) {
        this.errors = Object.assign(this.errors, { username: 'can not be blank' });
      } else {
        this.errors = Object.assign(this.errors, { username: undefined });
      }
      if (!this.user.password) {
        this.errors = Object.assign(this.errors, { password: 'can not be blank' });
      } else {
        this.errors = Object.assign(this.errors, { password: undefined });
      }
      return this.errors;
    }
  }
}
</script>

<style>
[class*='-message'] {
  font-weight: 500;
}


.error-message {
  color: red;
}

.success-message {
  color: chartreuse;
}
</style>
