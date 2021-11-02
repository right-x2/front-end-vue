import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter';
import axiosConfig from "@/apis/axiosConfig";

Vue.use(Vuex)

export default new Vuex.Store({
  //루트 상태 정의
  state: {
    userId: "",
    authToken: "",
  },
  //루트 상태값을 읽는 메소드를 정의한다.(Getter)
  getters:{
    getUserId(state){
      return state.userId;
    },
    getAuthToken(state){
      return state.authToken;
    }
  },
  //루트 상태값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    setUserId(state,payload){
      state.userId = payload;
    },
    setAuthToken(state,payload){
      state.authToken = payload;
    },
  },
  //루트 상태값을 비동기로 변경하는 메소드 정의(Setter)
  actions: {
    setUserIdByAsync(context,payload){ // payload ={userId:xxx, duration:xxx} 
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit("setUserId",payload.userId);
          resolve(context.state.userId);
        },payload.duration);
      })
      .then((data)=>{
        console.log(`userId 상태 변경 성공: ${data}`);
      })
      .catch((err)=>{
        console.log(`userId 상태 변경 실패: ${err}`);
      });
    },
    saveAuth(context,payload){// payload={userId:xxx, authToken:xxx}
      context.commit("setUserId",payload.userId);
      context.commit("setAuthToken",payload.authToken);
      // 브라우저 리프레쉬때 다시 로딩하기 위해 세션 스토리지에 저장함
      sessionStorage.setItem("userId",payload.userId);
      sessionStorage.setItem("authToken",payload.authToken);
      // 로그인 성공 후에 Axios의 공통 해더에 Authorization을 추가한다.
      axiosConfig.addAuthHeader(payload.authToken);
    },
    
    loadAuth(context,payload){
      // 세션 스토리지에 저장된 내용을 읽어서 상태 복원
      context.commit("setUserId",sessionStorage.getItem("userId") || "");
      context.commit("setAuthToken",sessionStorage.getItem("authToken") || "");

      //authToken이 있을 경우, Axios의 공통 해더에 Authorization을 추가한다.
      //토큰을 요청 헤더에 포함 시켜야함 정상적인 로그인 상태라면 
      if(context.state.authToken!= ''){
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },
    
    deleteAuth(context,payload){
      context.commit("setUserId","");
      context.commit("setAuthToken","");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");

      axiosConfig.removeAuthHeader();
    }
  },
  //루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  modules: {
    counter
  }
})
