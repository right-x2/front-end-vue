<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Child
    </div>
    <div class="card-body">
      <p>data: {{data}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Child",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
  }),
  //컴포넌트 메소드 정의
  methods:{
  },
  beforeUpdate(){
    console.log("child beforeUpdate state");
  },
  updated(){
    console.log("child updated state");
  },
  props:["data"]

}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>