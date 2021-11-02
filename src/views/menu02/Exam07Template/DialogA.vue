<!-- 컴포넌트 UI 정의 -->
<template>
  <modal-dialog-template>
    <template v-slot:header>
      DialogA
    </template>
    <template v-slot:body>
      <p>DialogA 내용입니다.</p>
    </template>
    <template v-slot:footer>
      <button class="btn btn-success btn-sm mr-2" @click="$emit('close')">확인</button>
      <button class="btn btn-danger btn-sm mr-2" @click="$emit('close')">닫기</button>
    </template>
  </modal-dialog-template>
</template>

<script>
import ModalDialogTemplate from "@/components/menu02/ModalDialogTemplate.vue";
export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"DialogA",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ModalDialogTemplate
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