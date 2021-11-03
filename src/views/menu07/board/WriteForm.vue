<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      글쓰기
    </div>
    <div class="card-body">
      <form @submit.prevent="handleAdd">
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">제목</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="board.btitle"/>
          </div>
        </div>
        <div class="form-group row">
          <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" v-model="board.bcontent"/>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">첨부그림</label>
          <div class="col-sm-10">
            <input type="file" class="form-control-file" ref="battach"/>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12 d-flex justify-content-center">
            <input type="submit" class="btn btn-primary btn-sm mr-2" value="추가"/>
            <input type="button" class="btn btn-primary btn-sm" value="취소" v-on:click="handleCancel"/>
          </div>
        </div>
      </form>
    </div>
    <alert-dialog v-if="alertDialog"
                  :loading="loading"
                  :message="alertDialogMessage"
                  @close="alertDialog=false"/> 
  </div>
</template>

<script>
import apiBoard from "@/apis/board";
import AlertDialog from '../AlertDialog.vue';
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"writeForm",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    AlertDialog
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    board:{
      btitle:"",
      bcontent:""
    },
    alertDialog:false,
    alertDialogMessage:"",
    loading:false,
  }),
  //컴포넌트 메소드 정의
  methods:{
    async handleAdd(){
      console.log("handleAdd");
      try{
        
        const multipartFormData = new FormData();
        multipartFormData.append("btitle",this.board.btitle);
        multipartFormData.append("bcontent",this.board.bcontent);
        multipartFormData.append("mid",this.$store.state.userId);
        const battach = this.$refs.battach;
        if(battach.files.length !=0){
          multipartFormData.append("battach",battach.files[0]);
        }

        this.loading = true;
        this.alertDialog = true;
        const response = await apiBoard.createBoard(multipartFormData);
        console.log(response);
        this.loading = true;
        this.alertDialog = true;
        this.$router.push("/menu07/board/list");
      }catch(error){
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
      }
    },
    handleCancel(){
      this.$router.push("/menu07/board/list");
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>