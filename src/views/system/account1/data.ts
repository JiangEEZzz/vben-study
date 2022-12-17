import {BasicColumn,FormSchema} from '/@/components/Table';
export const columns: BasicColumn[] = [
  {
    title: '用户姓名',
    dataIndex: 'nickName',
    width: 80,
    align: 'center',
    slots: { customRender: 'name' },
  },
  {
    title: '手机号码',
    dataIndex: 'mobile',
    width: 80,
    align: 'center',
  },
  {
    title: '用户角色',
    dataIndex: 'roleStrings',
    width: 200,
    align: 'center',
    slots: { customRender: 'roleStrings' },
  },
  // {
  //   title: '身份证号',
  //   dataIndex: 'idCard',
  //   width: 100,
  //   align: 'center',
  // },
  {
    title: '用户性别',
    dataIndex: 'genderDesc',
    width: 50,
    align: 'center',
  },
  // {
  //   title: '出生日期',
  //   dataIndex: 'birthday',
  //   width: 100,
  //   align: 'center',
  //   slots: { customRender: 'birthday'},
  // },
  // {
  //   title: '最高学位',
  //   dataIndex: 'educationDesc',
  //   width: 50,
  //   align: 'center',
  // },
];
export const searchFormSchema: FormSchema[] = [
  {
    field: 'nickName',
    label: '用户姓名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'mobile',
    label: '手机号码',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'roleid',
    label: '用户角色',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'gender',
    label: '用户性别',
    component: 'Select',
    colProps: { span: 8 },
    componentProps: {
      options: [
        {
          label: '男',
          value: 'male',
        },
        {
          label: '女',
          value: 'female',
        },
      ],
    },
  },
];
