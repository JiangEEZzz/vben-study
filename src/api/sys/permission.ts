import { defHttp } from '/@/utils/http/axios';
import { createPermissionParams } from '/@/api/sys/model/permission';

enum API {
  create = '/api/permission/create',
  getList = '/api/permission/getPermissionList',
  edit = '/api/permission/edit',
  delete = '/api/permission/delete',
}
export const createPermission = (params: createPermissionParams) => {
  return defHttp.post({ url: API.create, params });
};
export const getPermissionList = () => {
  return defHttp.get({ url: API.getList });
};
export const EditPermission = (params) => {
  return defHttp.post({ url: API.edit, params });
};
export function DeletePermission() {
  return defHttp.get({ url: API.delete });
}
