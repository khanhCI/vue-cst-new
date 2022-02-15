<template>
  <div class="add-modal">
    <div class="modal-title">Thêm mới thông tin Tỉnh/TP</div>
    <div class="modal-close" @click.prevent="closeModal">
      <img src="../assets/logo/x.svg" alt="close-btn" />
    </div>
    <!-- form, validate and set two way binding -->
    <div class="modal-input">
      <div class="input input-country">
        <label>Tên Tỉnh/TP *</label>
        <input
          type="text"
          name="province"
          v-validate="'required'"
          placeholder="Vui lòng nhập tên Tỉnh/TP"
          v-model="formData.province"
        />
        <span style="color: red;">{{errors.first('province')}}</span>
      </div>

      <div class="input input-nation">
        <label>Quốc gia *</label>
        <select name="nation" v-model="formData.nation" v-validate="'required'">
          <option value="Vietnam">Việt Nam</option>
          <option value="UK">United Kingdom</option>
        </select>
        <span style="color: red;">{{errors.first('nation')}}</span>
      </div>
    </div>

    <div class="modal-status">
      <label>Trạng thái</label>
      <div class="status-box">
        Kích hoạt
        <img src="../assets/logo/circle-ok.svg" alt="circle-ok" />
      </div>
    </div>

    <div class="modal-btn" @click.prevent="addProvince">
      <button>Thêm mới</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModal',
  data() {
    return {
      formData: {
        province: '',
        nation: '',
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
@import '../scss/_variable.scss';
@import '../scss/_modal.scss';

.add-modal {
  .modal-close {
    cursor: pointer;
  }
}
</style>
