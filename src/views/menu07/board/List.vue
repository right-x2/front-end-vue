<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      게시물 목록
    </div>
    <div class="card-body">
      <router-link class="btn btn-success btn-sm" to="/menu07/board/writeform">생성</router-link>
      <alert-dialog v-if="alertDialog"
                    :loading="loading"
                    :message="alertDialogMessage"
                    @close="alertDialog=false"/> 
      <div v-if="page != null">
        <table class="table table-sm table-striped table-bordered">
          <thead>
            <tr>
              <th class="text-center" style="width:70px">번호</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width:90px">글쓴이</th>
              <th class="text-center" style="width:120px">날짜</th>
              <th class="text-center" style="width:70px">조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="board in page.boards" :key="board.bno">
              <td class="text-center" style="width:70px">{{board.bno}}</td>
              <td><router-link :to="`/menu07/board/read?bno=${board.bno}&pageNo=${page.pager.pageNo}&hit=true`">{{board.btitle}}</router-link></td>
              <td class="text-center" style="width:90px">{{board.mid}}</td>
              <td class="text-center" style="width:120px">{{new Date(board.bdate).toLocaleDateString()}}</td>
              <td class="text-center" style="width:70px">{{board.bhitcount}}</td>
            </tr>
            <tr>
              <td colspan="5" style="text-align: center;">
                <button class="btn btn-outline-primary btn-sm mr-1" @click="changePageNo(1)">처음</button>
                <button class="btn btn-outline-info btn-sm mr-1" v-if="page.pager.groupNo>1" @click="changePageNo(page.pager.startPageNo-1)">이전</button>
                <button class="btn btn-outline-success btn-sm mr-1" v-for="pageNo in range(page.pager.startPageNo,page.pager.endPageNo)" :key="pageNo"
                        @click="changePageNo(pageNo)">{{pageNo}}</button>
                <button class="btn btn-outline-info btn-sm mr-1" v-if="page.pager.groupNo<page.pager.totalPageNo"
                                                                @click="changePageNo(page.pager.endPageNo+1)">다음</button>
                <button class="btn btn-outline-primary btn-sm" @click="changePageNo(page.pager.totalPageNo)">맨끝</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import board from "@/apis/board"
import AlertDialog from '../AlertDialog.vue';
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"List",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    AlertDialog
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    alertDialog:false,
    alertDialogMessage:"",
    loading:false,
    page:null
  }),
  //컴포넌트 메소드 정의
  methods:{
    changePageNo(pageNo){
      //URL 변경
      this.$router.push(`/menu07/board/list?pageNo=${pageNo}`).catch(()=>{});
      //데이터를 받아옴
      //this.getBoardList(pageNo);
      //watch에서 데이터 가져옴
    },
    getBoardList(pageNo){
      this.loading = true;
      this.alertDialog = true;
      board.getBoardList(pageNo)
        .then(response=>{
          this.loading = false;
          this.alertDialog = false;
          console.log(response.data);
          this.page = response.data;
        })
        .catch(error=>{
          if(error.response){
            if(error.response.status=== 403){
              this.loading = false;
              this.alertDialog = false;
              this.$router.push('/menu07/auth/jwtauth');
            }
          }else{
            this.loading = false;
            this.alertDialogMessage="네트워크 통신 오류";
          }
        });
    },
    range(start,end){
      const arr = [];
      for(var i =start; i <= end; i++){
        arr.push(i);
      }
      return arr;
    }
  },
  // 컴포넌트가 생성될 때 실행되는 훅
  created(){
    var pageNo = this.$route.query.pageNo;
    if(pageNo ==='undefined'){
      pageNo = 1;
    }
    this.getBoardList(pageNo);
  },
  watch:{
    
    $route(to,from){
      //URL이 변경되면 해당 페이지 내용을 가져오기 브라우저의 백버튼을 이용해서 URL이 변경되었을 때 데이터를 갱신하기 위해서
      if(to.query.pageNo){
        const pageNo = to.query.pageNo;
        this.getBoardList(pageNo);
      }else{
        //pageNo가 없을 경우 기본 1로
        this.getBoardList(1);
      }

    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>