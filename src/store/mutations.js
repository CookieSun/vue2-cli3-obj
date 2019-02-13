import { VIEW_NAV,VIEW_FOOT,VIEW_LOADING,CHECK_USER} from './types'

let mutations={ 

  [VIEW_NAV]:(state,payload)=> state.bNav=payload,
  [VIEW_FOOT]:(state,payload)=> state.bFoot=payload,
  [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
  [CHECK_USER]:(state,payload)=> state.user=payload.user,

};
export default mutations;
