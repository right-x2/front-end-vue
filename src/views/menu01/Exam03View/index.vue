<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam03View
    </div>
    <div class="card-body">
      <div>
        <h6>선언적 방식 화면 이동</h6>
        <router-link to="/menu01/exam03view/subacomponent" class="btn btn-info btn-sm mr-2">SubAComponent</router-link>
        <router-link to="/menu01/exam03view/subbcomponent" class="btn btn-info btn-sm mr-2">SubBComponent</router-link>
        <h6>프로그램 방식 화면 이동</h6>
        <button class="btn btn-info btn-sm mr-2" @click="goUrl('a')">SubAComponent</button>
        <button class="btn btn-info btn-sm mr-2" @click="goUrl('b')">SubBComponent</button>
      </div>
      <div class="mt-2">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
  }),
  //컴포넌트 메소드 정의
  methods:{
    goUrl(kind){
      this.$router.push(`/menu01/exam03view/sub${kind}component`).catch(()=>{});
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>