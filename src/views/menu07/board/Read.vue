<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      게시물 내용
    </div>
    <div class="card-body">
      <div v-if="board != null">
        <div class="d-flex">
          <div>
            <p>bno: {{board.bno}}</p>
            <p>btitle: {{board.btitle}}</p>
            <p>bcontent: {{board.bcontent}}</p>
            <p>mid: {{board.mid}}</p>
            <p>bdate: {{new Date(board.bdate).toLocaleDateString()}}</p>
            <p>bhitcount: {{board.bhitcount}}</p>
            <p v-if="board.battachoname">
                battachoname: 
                <a :href="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`">
                  {{board.battachoname}}
                </a>
            </p>
          </div>
          <div class="d-flex align-items-center ml-5">
            <img v-bind:src="`${baseURL}/board/battach/${board.bno}?jwt=${$store.state.authToken}`" alt="" width="300"/>
          </div>
        </div>

        <div>
          <router-link :to="`/menu07/board/list?pageNo=${$route.query.pageNo}`" 
            class="btn btn-info btn-sm mr-2">목록</router-link>
          <router-link :to="`/menu07/board/updateform?bno=${$route.query.bno}&pageNo=${$route.query.pageNo}`" 
            class="btn btn-info btn-sm mr-2">수정</router-link>
          <button class="btn btn-info btn-sm mr-2" @click="handleRemove">삭제</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiBoard from "@/apis/board";
import axios from 'axios';
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    baseURL:axios.defaults.baseURL,
    board:null
  }),
  //컴포넌트 메소드 정의
  methods:{
    async handleRemove(){
      try{
        const response = await apiBoard.deleteBoard(this.board.bno);
        console.log(response);
        this.$router.push(`/menu07/board/list?pageNo=${this.$route.query.pageNo}`);
      }catch(error){
        //
        console.log(error);
      }
    }
  },
  //컴포넌트가 생성될 때 생성되는 hook
  created(){
    apiBoard.readBoard(this.$route.query.bno,this.$route.query.hit)
      .then(response=>{
        this.board = response.data;
      })
      .catch(err=>{});
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>