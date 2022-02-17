<template>
  <div class="add-modal">
    <div class="modal-title">{{formDetail.title}}</div>
    <div class="modal-close" @click.prevent="closeModal">
      <img src="../../assets/logo/x.svg" alt="close-btn" />
    </div>
    <!-- form, validate and set two way binding -->
    <div class="modal-input">
      <div class="input input-country">
        <label>{{formDetail.inputLabel}}</label>
        <input
          type="text"
          :name="formDetail.inputName"
          v-validate="'required'"
          :placeholder="formDetail.inputPlaceHolder"
          v-model="formData.inputData"
        />
        <span style="color: red;">{{errors.first(`${formDetail.inputName}`)}}</span>
      </div>

      <div class="input input-nation">
        <label>{{formDetail.selectLabel}}</label>
        <select :name="formDetail.selectName" v-model="formData.selectData" v-validate="'required'">
          <option :value="formDetail.selectOptions.option1">{{formDetail.selectOptions.option1}}</option>
          <option :value="formDetail.selectOptions.option2">{{formDetail.selectOptions.option2}}</option>
          <!-- <option value="UK">United Kingdom</option> -->
        </select>
        <span style="color: red;">{{errors.first(`${formDetail.selectName}`)}}</span>
      </div>
    </div>

    <div class="modal-status">
      <label>{{formDetail.statusLabel}}</label>
      <div class="status-box">
        Kích hoạt
        <img src="../../assets/logo/circle-ok.svg" alt="circle-ok" />
      </div>
    </div>

    <div class="modal-btn" @click.prevent="addProvince">
      <button>{{formDetail.btnText}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModal',
  props: ['formDetail'],
  data() {
    return {
      formData: {
        inputData: '',
        selectData: '',
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    addProvince() {
      this.$emit('addProvince', this.formData);
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/_variable.scss';
@import '../../scss/_modal.scss';

.add-modal {
  .modal-close {
    cursor: pointer;
  }
}
</style>
