import { DeptListGetResultModel, DeptListItem } from '/@/api/demo/model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  DeptList = '/api/organization/getOrgList',
}

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });


