<!-- 컴포넌트 UI 정의 -->
<template>
  <modal-dialog-template>
      <template v-slot:header>
        알림
      </template>
      <template v-slot:body>
        <div v-if="loading" class="mt-3">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-if="!loading">{{message}}</div>
      </template>
      <template v-slot:footer>
        <button class="btn btn-danger btn-sm" @click="$emit('close')">닫기</button>
      </template>

  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from '@/components/menu02/ModalDialogTemplate.vue'
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"AlertDialog",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ModalDialogTemplate,
  },
  //컴포넌트 데이터를 정의
  data:()=>({

  }),
  //컴포넌트 메소드 정의
  methods:{
  },
  props:[
    "message",
    "loading"
  ]
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>