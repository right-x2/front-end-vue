<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
        Exam01View
    </div>
    <div class="card-body">
      <h6>선언적 방식 화면 이동</h6>
      <router-link to="/menu01/exam02view" class="btn btn-info btn-sm mr-2">menu/exam02view</router-link>
      <router-link v-bind:to="`/menu01/exam02view`" class="btn btn-info btn-sm mr-2">menu/exam02view</router-link>
      <router-link :to="{path:'/menu01/exam02view'}" class="btn btn-info btn-sm mr-2">menu/exam02view</router-link>
      <router-link :to="{name:'menu01_exam02view'}" class="btn btn-info btn-sm mr-2">menu/exam02view</router-link>

      <div>
        <exam-06-view prop1="value1" prop2="value2"/>
      </div>
    </div>
  </div>
</template>

<script>

import Exam06View from "./Exam06View"

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam01View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    Exam06View
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