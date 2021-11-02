export default{
  // 모듈의 이름을 루트 하위 스페이스로 설정 
  namespaced: true,
  state: {
    count: 0
  },

  getters:{
    getCount(state, getters, rootState, rootGetters){
      return state.count;
    }
  },

  mutations: {
    setCount(state,payload){
      state.count += payload;
    }
  },
  actions: {
    setCountByAsync(context,payload){
      new Promise((resolve,reject) =>{ // payload = {value:xxx, duration:3000}
        setTimeout(()=>{
          context.commit("setCount",payload.value);
          resolve(context.state.count);
        },payload.duration)
      })
      .then((data)=>{
        console.log(`counter/count 상태 변경 성공: ${data}`);
      })
      .catch((err)=>{
        console.log(`counter/count 상태변경 실패 ${err}`);
      })
    }
  },
}