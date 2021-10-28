<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02Directives
    </div>
    <div class="card-body">
      <!-- 데이터 바인딩 -->
      <div>
        <img class="mr-2" src="@/assets/photos/photo1.jpg" height="100" alt="">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100" alt="">
      </div>
      <hr/>
      <!--요소 숨김 여부 -->
      <span v-if='sale' class="mr-2">
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100" alt="">
      </span>
      <span v-show='sale'>
        <img v-bind:src="require(`@/assets/photos/${photoFileName}`)" height="100" alt="">
      </span>

      <!-- html 태그 처리 -->
      <p>정보: {{info}}</p>
      <p>정보: <span v-html="info"></span></p>
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
    photoFileName: "photo2.jpg",
    sale: true,
    info: `<div style="background-color:#eeeeee">스타일 적용 확인</div>`
  }),
  //컴포넌트 메소드 정의
  methods:{
    changeData(){
      if(this.photoFileName=="photo2.jpg"){
        this.photoFileName = "photo3.jpg"
      }else if(this.photoFileName == "photo3.jpg"){
        this.photoFileName = "photo2.jpg"
      }
      this.sale = !this.sale
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>