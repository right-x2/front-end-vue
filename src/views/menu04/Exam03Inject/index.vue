<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam03Inject
    </div>
    <div class="card-body">
      <p>data1: {{data1}}</p>
      <p>data2: {{data2}}</p>
      <button class="btn btn-info btn-sm mt-2" @click="changeData">변경</button>
      <child-a class="mt-2"/>
    </div>
  </div>
</template>

<script>
import ChildA from '../Exam03Inject/ChildA.vue'
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam03Inject",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ChildA
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    data1: "top-parent-data1",
    data2: "top-parent-data2"
  }),
  //컴포넌트 메소드 정의
  methods:{
    changeData(){
      this.data1 = "top-parent-data1-changed",
      this.data2 = "top-parent-data2-changed"
    }
  }
  ,
  //자손 컴포넌트가 사용할 수 있는 데이터 정의
  provide(){
    return{
      provideData1: this.data1,
      provideData2: this.data2
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>