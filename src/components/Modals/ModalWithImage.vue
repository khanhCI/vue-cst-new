<template>
  <div class="add-modal program-add" :class="{ 'subject-add': formDetail.formType === 'subject'}">
    <div class="modal-mask">
      <div class="modal-title">{{ formDetail.title }}</div>
      <div class="modal-close" @click.prevent="closeModal">
        <img src="../../assets/logo/x.svg" alt="close-btn" />
      </div>
      <div
        v-if="formDetail.formType === 'program' || 'subject'"
        class="modal-img"
      >
        <div class="cover-photo">
          <img src="../../assets/photo/paper-1.png" alt="paper-1" />
          <div class="photo-upload">
            <img src="../../assets/logo/Image.svg" alt="image" />
          </div>
        </div>
      </div>
      <div class="modal-input">
        <div class="input input-country">
          <label>{{ formDetail.inputLabel }}</label>
          <input type="text" :placeholder="formDetail.inputPlaceHolder" />
        </div>
      </div>

      <div v-if="formDetail.formType === 'subject'" class="modal-program">
        <div class="input input-program">
          <label>{{formDetail.selectLabel}}</label>
          <select name="program">
            <option :value="formDetail.selectOptions.option1">{{formDetail.selectOptions.option1}}</option>
            <option :value="formDetail.selectOptions.option2">{{formDetail.selectOptions.option2}}</option>
          </select>
        </div>
      </div>

      <div class="modal-status">
        <label>{{ formDetail.statusLabel }}</label>
        <div class="status-box">
          Kích hoạt
          <img src="../../assets/logo/circle-ok.svg" alt="circle-ok" />
        </div>
      </div>

      <div class="modal-btn">
        <button>{{ formDetail.btnText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['formDetail'],
  data () {
      return {
      }
  },
  methods: {
      closeModal () {
          this.$emit('closeModal');
      }
  }
};
</script>

<style></style>
