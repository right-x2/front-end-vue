<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" alt="">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" alt="">
      </div>
      <hr/>
      <button class="btn btn-info btn-sm" v-on:click="changeData">변경</button>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam02Directives",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    photoFileName:"photo2.jpg"
  }),
  //컴포넌트 메소드 정의
  methods:{
    changeData(){
      if(this.photoFileName=="photo2.jpg"){
        this.photoFileName = "photo3.jpg"
      }else if(this.photoFileName == "photo3.jpg"){
        this.photoFileName = "photo2.jpg"
      }
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>