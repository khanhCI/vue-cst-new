<template>
  <div class="add-modal choose-modal">
    <div class="modal-title">Bạn muốn thêm mới loại bài học nào?</div>
    <div class="modal-close" @click.prevent="closeModal">
      <img src="../../assets/logo/x.svg" alt="close-btn" />
    </div>

    <div class="modal-btn">
      <!-- <button @click.prevent="showAudioLesson">Bài học Audio và Text</button>
      <button>Bài học Video</button>
      <button>Bài học Kiểm tra</button> -->
      <button @click.prevent="showAudioLesson">Bài học Audio, Text, Video</button>
      <button>Bài học Luyện tập</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChooseModal',
  data() {
    return {
      lessonAudio: {
        formType: 'media',
        title: 'Thêm mới thông tin bài học audio và text',
        coverLeft: 'Ảnh bìa trái *',
        coverRight: 'Ảnh bìa phải *',
        inputLabel: 'Tên bài học *',
        inputPlaceHolder: 'Vui lòng nhập tên bài học',
        inputName: 'lesson name',
        selectLabel: 'Thuộc môn học *',
        selectOptions: [
          'Toán', 'Tiếng Việt'
        ],
        audioTitle: 'Audio bài học *',
        videoTitle: 'Video bài học',
        subjectTitle: 'Tiêu đề bài học *',
        subjectPlaceHolder: 'Vui lòng nhập tên bài học',
        contentTitle: 'Nội dung bài học *',
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
