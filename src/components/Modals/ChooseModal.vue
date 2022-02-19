<template>
  <div class="add-modal choose-modal">
    <div class="modal-title">Bạn muốn thêm mới loại bài học nào?</div>
    <div class="modal-close" @click.prevent="closeModal">
      <img src="../../assets/logo/x.svg" alt="close-btn" />
    </div>

    <div class="modal-btn">
      <button @click.prevent="showAudioLesson">Bài học Audio và Text</button>
      <button>Bài học Video</button>
      <button>Bài học Kiểm tra</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseModal',
  data() {
    return {
      lessonAudio: {
        formType: 'audio',
        title: 'Thêm mới thông tin bài học audio và text',
        inputLabel: 'Tên bài học *',
        inputPlaceHolder: 'Vui lòng nhập tên bài học',
        inputName: 'lesson name',
        selectLabel: 'Thuộc môn học *',
        selectOptions: {
          option1: 'Toán',
          option2: 'Tiếng Việt',
        },
        audioTitle: 'Audio bài học *',
        subjectTitle: 'Tiêu đề bài học *',
        subjectPlaceHolder: 'Vui lòng nhập tên bài học',
        selectName: 'subject',
        statusLabel: 'Trạng thái',
        btnText: 'Thêm mới',
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    showAudioLesson() {
      this.$emit('showAudioLesson', this.lessonAudio);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/style.scss';
</style>
