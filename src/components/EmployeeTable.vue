<template>
  <div id="employee-table">
    <div v-if="loading" class="loading">
      Loading...
    </div>
    <p v-else-if="(employees.length < 1) && !loading" class="empty-table">
      No Employees
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.name" />
          </td>
          <td v-else>{{ employee.name }}</td>
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.email" />
          </td>
          <td v-else>{{ employee.email }}</td>
          <td v-if="editing === employee.id">
            <button @click="editEmployee(employee)">Save</button>
            <button @click="cancelEdit(employee)" class="muted-button">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee)">Edit</button>
            <button @click="$emit('delete:employee', employee.id)">Delete</button>
            <router-link :to="{name: 'employee-profile', params: {id: employee.id}}">Detail</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'employee-table',
  props: {
    employees: Array,
    loading: Boolean,
  },
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    editMode(emp) {
      this.cachedEmployee = Object.assign({}, emp);
      this.editing = emp.id;
    },
    cancelEdit(employee) {
      Object.assign(employee, this.cachedEmployee);
      this.editing = null;
    },
    editEmployee(employee) {
      if (employee.name === '' || employee.email === '') return;
      this.$emit('edit:employee', { id: employee.id, updatedEmployee: employee });
      this.editing = null;
    },
  },
};
</script>

<style scoped>
button {
  margin: 0 0.5rem 0 0;
}
</style>

