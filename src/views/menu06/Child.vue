<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      child
    </div>
    <div class="card-body">
      <h6>[Root state 읽기]</h6>
      <p>userId 단방향 바인딩: {{$store.state.userId}}</p>
      <p>userId 단방향 바인딩: {{$store.getters.getUserId}}</p>
      <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId"/></p>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"child",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
  }),
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>