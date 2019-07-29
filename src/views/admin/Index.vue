<template>
  <el-main>
    <el-table
      :data="members"
      style="width: 100%">
      <el-table-column
        label="id"
        width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Name"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p><el-avatar :src="scope.row.avatar"></el-avatar></p>
            <p>Name: {{ `${scope.row.last_name} ${scope.row.first_name}` }}</p>
            <p>Addr: {{ scope.row.email }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.last_name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="meta.per_page"
      :pager-count="11"
      layout="prev, pager, next"
      :total="meta.total"
      @current-change="handlePagination"
    />
  </el-main>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
  name: 'UserList',
  computed: {
    ...mapGetters({
      members: 'member/getMembers',
      errors: 'member/getErrors',
      meta: 'member/getMeta',
    }),
  },
  methods: {
    handlePagination(page) {
      this.$store.dispatch('member/getMembers', { page });
    },
  },
  created() {
    this.$store.dispatch('member/getMembers', { page: 1 });
  },
}
</script>

<style lang="scss" scoped>

</style>
