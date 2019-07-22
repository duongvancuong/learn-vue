<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <employee-form @add:employee="addEmployee" />
    <employee-table
      :employees="employees"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from '@/components/EmployeeTable';
import EmployeeForm from '@/components/EmployeeForm';
import { API } from '../services/api';

export default {
  name: 'HelloWorld',
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      employees: [],
      error: false,
    };
  },
  mounted() {
    this.getEmployees();
  },
  methods: {
    addEmployee(employee) {
      API.client.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(employee))
        .then(res => {
          this.employees = [...this.employees, res.data];
        })
        .catch(() => {
          this.error = true;
        });
    },
    deleteEmployee(id) {
      API.client.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          this.employees = this.employees.filter(employee => employee.id !== id);
        })
        .catch(() => {
          this.error = true;
        });
    },
    editEmployee(id, updatedEmployee) {
      API.client.put(`https://jsonplaceholder.typicode.com/users/${id}`, JSON.stringify(updatedEmployee))
        .then(res => {
          this.employees = this.employees.map(employee => (employee.id === id ? res.data : employee));
        })
        .catch(() => {
          this.error = true;
        });
    },
    getEmployees() {
      API.client.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          this.employees = res.data;
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
