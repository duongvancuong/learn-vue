<template>
  <div id="app" class="small-container">
    <h1>Employees</h1>
    <router-view/>

    <employee-form @add:employee="addEmployee" />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <employee-table
      :employees="employees"
      :loading="status.isLoading"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from '@/components/EmployeeTable';
import EmployeeForm from '@/components/EmployeeForm';
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Employee',
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      error: false,
    };
  },
  computed: {
    ...mapGetters({
      employees: 'getEmployees',
      status: 'getStatus',
    })
  },
  created() {
    this.$store.dispatch('getListData');
  },
  methods: {
    ...mapActions([
      'addEmployee',
      'deleteEmployee',
      'editEmployee',
    ]),
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
