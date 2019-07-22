<template>
  <div id="employee-form">
    <form @submit.prevent="handleSubmit">
      <label for="name">Employee name</label>
      <input
        type="text"
        id="name"
        v-model="employee.name"
        :class="{ 'has-error': submitting && invalidName}"
        ref="first"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label for="email">Employee email</label>
      <input
        type="text"
        id="email"
        v-model="employee.email"
        :class="{ 'has-error': submitting && invalidEmail }"
        @focus="clearStatus"
      />
      <p v-if="error && submitting" class="error-message">
        ❗Please fill out all required fields
      </p>
      <p v-if="success" class="success-message">
        ✅ Employee successfully added
      </p>
      <button>Add Employee</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'employee-form',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      employee: {
        name: '',
        email: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (this.invalidName || this.invalidEmail) {
        this.error = true;
        return;
      }
      this.$emit('add:employee', this.employee);
      this.$refs.first.focus();
      this.employee = {
        name: '',
        email: '',
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
    },
    clearStatus() {
      this.success = false;
      this.error = false;
    },
  },
  computed: {
    invalidName() {
      return this.employee.name === '';
    },
    invalidEmail() {
      return this.employee.email === '';
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

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
