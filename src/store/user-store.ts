import {
  GetterTree,
  MutationTree,
  ActionTree,
  ActionContext,
} from 'vuex';
import cookie from 'js-cookie';
import { userReq } from '/@/api/other-api';

interface State {
  userSeqId: string;
  personName: string;
  loginName: string;
}
const state: State = {
  userSeqId: import.meta.env.DEV
    ? 'SN_201802289403121049'
    : cookie.get('user_seq_id') || '',
  personName: '',
  loginName: '',
};
const getters: GetterTree<State, any> = {
  name (state: State): string {
    return state.personName || state.loginName;
  },
};
const mutations: MutationTree<State> = {
  updateUser (
    state: State,
    payload: any,
  ): void {
    state.personName = payload.personName;
    state.loginName = payload.loginName;
  },
};
const actions: ActionTree<State, any> = {
  async requestUser (
    ctx: ActionContext<State, any>,
  ): Promise<void> {
    if (ctx.getters.name) return;
    const res = await userReq({
      personId: ctx.state.userSeqId,
    });
    if (res.errCode !== 0) return;
    ctx.commit('updateUser', res.personAuthorityInfo);
  }
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
