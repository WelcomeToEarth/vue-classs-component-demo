import { get } from '/@/http/other-http';
import { Param } from '/@/types';

// get user detail - liang xinyu
export const userReq = (
  param: Param = {},
): Promise<any> => {
  const url = '/api/v1/orgManage/organizations/selectAuthorityInfo';
  return get(url, param);
};
