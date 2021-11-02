<!-- 컴포넌트 UI 정의 -->
<template>
  <div class="card">
    <div class="card-header">
      Exam01Props
    </div>
    <div class="card-body">
      <child-a  :prop1="data1" 
                prop2="value2"
                productNo="1"
                product-kind="bag"
                v-bind:product-price="1000"/>
      <hr>
      <child-c :product="product"/>
      <child-d  propD="String-data"
                propA="3"
                :propB="4"
                :propC="12"
                :propE="11"
                :propF="{message:'hello-vue'}"
                :propG="['blue','red','white']"
                :propI="1"/>
    </div>
  </div>
</template>

<script>
import ChildA from "./ChildA.vue"
import ChildC from "./ChildC.vue"
import ChildD from './ChildD.vue'

export default {
  //컴포넌트의 대표이름(devtools에 나오는 이름이다.) 이름을 정하지 않으면 파일명으로
  name:"Exam01Props",
  // 추가하고 싶은 컴포넌트를 등록
  components: {
    ChildA,
    ChildC,
    ChildD,
  },
  //컴포넌트 데이터를 정의
  data:()=>({
    data1:"value9",
    product:{
      no:2,
      kind:"정장"
    }
  }),
  //컴포넌트 메소드 정의
  methods:{
  }
}
</script>
<!-- 컴포넌트 스타일 정의 -->
<style scoped>

</style>