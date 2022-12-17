import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
// import { h } from 'vue';
// import { Switch } from 'ant-design-vue';
// import { setRoleStatus } from '/@/api/demo/system';
// import { useMessage } from '/@/hooks/web/useMessage';

export const columns: BasicColumn[] = [
  {
    title: '权限名称',
    dataIndex: 'permissionName',
    width: 200,
  },
  {
    title: '权限编码',
    dataIndex: 'code',
    width: 180,
  },
  {
    title: '排序',
    dataIndex: 'sort',
    width: 50,
  },
  // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   width: 120,
  //   customRender: ({ record }) => {
  //     if (!Reflect.has(record, 'pendingStatus')) {
  //       record.pendingStatus = false;
  //     }
  //     return h(Switch, {
  //       checked: record.status === '1',
  //       checkedChildren: '已启用',
  //       unCheckedChildren: '已禁用',
  //       loading: record.pendingStatus,
  //       onChange(checked: boolean) {
  //         record.pendingStatus = true;
  //         const newStatus = checked ? '1' : '0';
  //         const { createMessage } = useMessage();
  //         setRoleStatus(record.id, newStatus)
  //           .then(() => {
  //             record.status = newStatus;
  //             createMessage.success(`已成功修改角色状态`);
  //           })
  //           .catch(() => {
  //             createMessage.error('修改角色状态失败');
  //           })
  //           .finally(() => {
  //             record.pendingStatus = false;
  //           });
  //       },
  //     });
  //   },
  // },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: '备注',
    dataIndex: 'remarks',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'permissionName',
    label: '权限名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'permissionName',
    label: '权限名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'code',
    label: '权限编码',
    required: true,
    component: 'Input',
  },
  // {
  //   field: 'status',
  //   label: '状态',
  //   component: 'RadioButtonGroup',
  //   defaultValue: '0',
  //   componentProps: {
  //     options: [
  //       { label: '启用', value: '0' },
  //       { label: '停用', value: '1' },
  //     ],
  //   },
  // },
  {
    field: 'parentPermission',
    label: '上级权限',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'permissionName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    label: '排序',
    field: 'sort',
    component: 'Input',
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },

];
