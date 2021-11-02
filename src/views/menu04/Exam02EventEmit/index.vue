<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam02EventEmit
    </div>
    <div class="card-body">
      <p class="mb-2">counter: {{counter}}</p>
      <child  :counter="counter" @child-event-1="handleChildEvent1"
              @child-event-2="handleChildEvent2"
              @counter-increment="counterIncrement"
              @counter-decrement="counterDecrement"/>
    </div>
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam02EventEmit",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    Child
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    counter:0,
  }),
  //컴포넌트 메소드 정의
  methods:{
    handleChildEvent1(data){
      console.log(data);
    },
    handleChildEvent2(data1,data2){
      console.log(data1+" "+data2);
    },
    counterIncrement(data){
      this.counter =  this.counter+data;
    }
    ,counterDecrement(data){
      this.counter =  this.counter-data;
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>