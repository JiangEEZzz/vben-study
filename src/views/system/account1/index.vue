<template>
  <BasicTable @register="registerTable">
    <template #toolbar>
      <a-button color="success" @click="handleCreate"> 添加 </a-button>
    </template>

    <template #action="{ record }">
      <TableAction
        :actions="[
            {
              // icon: 'clarity:note-edit-line',
              color: 'warning',
              onClick: handleEdit.bind(null, record),
              ifShow: record.mobile !== mobile,
              label: '编辑',
            },
            {
              // icon: 'ant-design:delete-outlined',
              color: 'error',
              onClick: handleDelete.bind(null, record),
              ifShow: record.mobile !== mobile,
              label: '删除',
            },
            {
              // icon: 'ant-design:key-outlined',
              color: 'blue',
              onClick: handleReset.bind(null, record),
              label: '重置密码',
            },
          ]"
      />
    </template>
  </BasicTable>
</template>

<script lang="ts" setup>
  import BasicTable from '/@/components/Table/src/BasicTable.vue';
  import { useTable } from '/@/components/Table';
  import {columns, searchFormSchema} from "/@/views/system/account1/data";
  const [registerTable, methods] = useTable({
    columns,
    useSearchForm:true,
    formConfig:{
      schemas:searchFormSchema,
    },
    actionColumn: {
      width: 150,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: 'right',
    },
  });
</script>

<style scoped>

</style>
