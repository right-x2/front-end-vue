<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam06ComputedBinding
    </div>
    <div class="card-body">
      <p>ssn1: {{ssn1}}</p>
      <p>ssn2: {{ssn2}}</p>
      <p>ssn: {{ssn1}}-{{ssn2.charAt(0)+'******'}}</p>
      <p>date: {{date}}</p>
      <p>ssn: {{getSsn()}}</p>
      <p>ssn: {{computedSsn}}</p>
      <button class="btn btn-sm btn-info mt-2" @click="changeData">변경</button>
    </div>
    
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam06ComputedBinding",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    ssn1: "880515",
    ssn2: "1223455",
    date: new Date()
  }),
  //컴포넌트 메소드 정의
  methods:{
    getSsn(){
      console.log("getSsn");
      const ssn = this.ssn1+'-'+this.ssn2.charAt(0)+'******';
      return ssn;
    },
    changeData(){
      this.date = new Date();
      this.ssn2 = "2223233";
    }
  },
  computed:{
    computedSsn(){
      console.log("computedsSsn");
      const ssn = this.ssn1+'-'+this.ssn2.charAt(0)+'******';
      return ssn;
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>