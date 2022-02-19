<template>
  <div
    class="add-modal program-add"
    :class="{
      'subject-add': formDetail.formType === 'subject',
      'lesson-modal':
        formDetail.formType === 'audio' || formDetail.formType === 'video',
    }"
  >
    <div class="modal-mask">
      <div class="modal-title">{{ formDetail.title }}</div>
      <div class="modal-close" @click.prevent="closeModal">
        <img src="../../assets/logo/x.svg" alt="close-btn" />
      </div>
      <div
        v-if="
          formDetail.formType === 'program' || formDetail.formType === 'subject'
        "
        class="modal-img"
      >
        <div class="cover-photo">
          <img src="../../assets/photo/paper-1.png" alt="paper-1" />
          <div class="photo-upload">
            <img src="../../assets/logo/Image.svg" alt="image" />
          </div>
        </div>
      </div>

      <div
        v-if="
          formDetail.formType === 'audio' || formDetail.formType === 'video'
        "
        class="modal-cover"
      >
        <div class="cover-holder">
          <div class="cover-text">Ảnh bìa trái *</div>
          <div class="cover-photo">
            <img src="../../assets/photo/paper-1.png" alt="paper-1" />
            <div class="photo-upload">
              <img src="../../assets/logo/Image.svg" alt="image" />
            </div>
          </div>
        </div>
        <div class="cover-holder">
          <div class="cover-text">Ảnh bìa phải *</div>
          <div class="cover-photo">
            <img src="../../assets/photo/paper-1.png" alt="paper-1" />
            <div class="photo-upload">
              <img src="../../assets/logo/Image.svg" alt="image" />
            </div>
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
          <label>{{ formDetail.selectLabel }}</label>
          <select name="program">
            <option :value="formDetail.selectOptions.option1">
              {{ formDetail.selectOptions.option1 }}
            </option>
            <option :value="formDetail.selectOptions.option2">
              {{ formDetail.selectOptions.option2 }}
            </option>
          </select>
        </div>
      </div>

      <div v-if="formDetail.formType === 'audio'" class="modal-input">
        <!-- <div class="input input-lesson">
          <label>Tên bài học *</label>
          <input type="text" placeholder="Vui lòng nhập tên bài học" />
        </div> -->

        <div class="input input-subject">
          <label>Thuộc môn học *</label>
          <select name="subject">
            <option value="Toán">Toán</option>
            <option value="Tiếng Việt">Tiếng Việt</option>
          </select>
        </div>

        <div class="input input-audio">
          <label>Audio bài học *</label>
          <img src="../../assets/photo/upload-audio.png" alt="upload-audio" />
        </div>

        <div class="input input-title">
          <label>Tiêu đề bài học *</label>
          <input type="text" placeholder="Vui lòng nhập tên bài học" />
        </div>

        <div class="input input-word">
          <label>Nội dung bài học *</label>
          <div class="input-area">
            <div class="area-header">
              <div class="header header-item">
                <img src="../../assets/logo/B.svg" alt="B" />
              </div>

              <div class="header header-item">
                <img src="../../assets/logo/I.svg" alt="I" />
              </div>

              <div class="header header-item">
                <img src="../../assets/logo/U.svg" alt="U" />
              </div>

              <div class="header header-font">
                <select name="font">
                  <option value="Arial">Arial</option>
                  <option value="Times New Roman">Times New Roman</option>
                </select>
              </div>

              <div class="header header-number">
                <select name="number">
                  <option value="16">16</option>
                  <option value="18">18</option>
                </select>
              </div>

              <div class="header header-heading">
                <select name="heading">
                  <option value="Heading 1">Heading 1</option>
                  <option value="Heading 2">Heading 2</option>
                </select>
              </div>
            </div>
            <div class="area-body">
              <textarea
                name=""
                style="width: 100%; height: 131px"
                placeholder="Vui lòng nhập nội dung bài học"
              ></textarea>
            </div>
          </div>
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
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style></style>
