<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam05View
    </div>
    <div class="card-body">
      <h6>params(path variable)로 전달</h6>
      <ul>
        <li><router-link to="exam06View/1">exam06View/1</router-link></li>
        <li><router-link :to="`exam06View/${bno1}`">exam06View/3</router-link></li>
        <li><router-link :to="{path:`exam06View/${bno2}`}">exam06View/5</router-link></li>
        <li><router-link :to="{name:'menu01_exam06view',params:{bno:bno3}}">exam06View/7</router-link></li>
      </ul>
      <h6>정적 prop객체 전달</h6>
      <ul>
        <li><router-link to="/menu01/exam07View">exam07View</router-link></li>
      </ul>    

      <h6>쿼리 스트링으로 전달</h6>
      <ul>
        <li><router-link to="/menu01/exam08View?kind=freeboard&color=blue">exam08View?kind=freeboard&color=blue</router-link></li>
        <li><router-link :to="`/menu01/exam08View?kind=${kind1}&color=${color1}`">exam08View?kind=freeboard&color=blue</router-link></li>
        <li><router-link :to="{path:`/menu01/exam08View?kind=${kind2}&color=${color2}`}">exam08View?kind=album&color=red</router-link></li>
        <li><router-link :to="{name:'menu01_exam08View',query:{kind:kind3,color:color3}}">exam08View?kind=qa&color=yellow</router-link></li>
      </ul> 
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam05View",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:() =>({
      bno1:3,
      bno2:5,
      bno3:7,
      kind1:"freeboard",
      color1:"blue",
      kind2:"album",
      color2:"red",
      kind3:"qa",
      color3:"yellow",
  }),
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>