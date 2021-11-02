<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01AsyncControl
    </div>
    <div class="card-body">
      <div>
        <button class="btn btn-info btn-sm mr-2" @click="handleBtn1">비동기 작업1</button>
        <button class="btn btn-info btn-sm mr-2" @click="handleBtn2">비동기 작업2</button>
      </div>
      <div v-if="loading" class="mt-3">
        <div class="spinner-border text-success" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div v-if="!loading" class="mt-3">
        처리결과: {{result}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam01AsyncControl",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    result: "",
    loading: false
  }),
  //컴포넌트 메소드 정의
  methods:{
    work(){
      const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("점심먹으러 갑시다.");
        },3000)
      });
      return promise;
    },
    handleBtn1(){
      this.loading = true;
      this.work()
        .then((result)=>{
          this.result = result;
        })
        .catch((err)=>{

        })
        .finally(()=>{
          this.loading = false;
        });

    },
    async handleBtn2(){
      this.loading = true;
      try{
        const result = await this.work();
        this.result = result;
      }catch(err){
        console.log(err);
      }finally{
        this.loading = false;
      }
    }
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>