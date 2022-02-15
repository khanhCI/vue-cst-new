<template>
  <div class="add-modal lesson-modal">
    <div class="modal-title">Thêm mới thông tin bài học audio và text</div>
    <div class="modal-close" @click.prevent="closeModal">
      <img src="../assets/logo/x.svg" alt="close-btn" />
    </div>
    <div class="modal-cover">
      <div class="cover-holder">
        <div class="cover-text">Ảnh bìa trái *</div>
        <div class="cover-photo">
          <img src="../assets/photo/paper-1.png" alt="paper-1" />
          <div class="photo-upload">
            <img src="../assets/logo/Image.svg" alt="image" />
          </div>
        </div>
      </div>
      <div class="cover-holder">
        <div class="cover-text">Ảnh bìa phải *</div>
        <div class="cover-photo">
          <img src="../assets/photo/paper-1.png" alt="paper-1" />
          <div class="photo-upload">
            <img src="../assets/logo/Image.svg" alt="image" />
          </div>
        </div>
      </div>
    </div>
    <div class="modal-input">
      <div class="input input-lesson">
        <label>Tên bài học *</label>
        <input type="text" placeholder="Vui lòng nhập tên bài học" />
      </div>

      <div class="input input-subject">
        <label>Thuộc môn học *</label>
        <select name="subject">
          <option value="Toán">Toán</option>
          <option value="Tiếng Việt">Tiếng Việt</option>
        </select>
      </div>

      <div class="input input-audio">
        <label>Audio bài học *</label>
        <img src="../assets/photo/upload-audio.png" alt="upload-audio" />
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
              <img src="../assets/logo/B.svg" alt="B" />
            </div>

            <div class="header header-item">
              <img src="../assets/logo/I.svg" alt="I" />
            </div>

            <div class="header header-item">
              <img src="../assets/logo/U.svg" alt="U" />
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
      <label>Trạng thái</label>
      <div class="status-box">
        Kích hoạt
        <img src="../assets/logo/circle-ok.svg" alt="circle-ok" />
      </div>
    </div>

    <div class="modal-btn">
      <button>Thêm mới</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AddLessonModal',
    methods: {
        closeModal() {
            this.$emit('closeModal');
        }
    }
};
</script>

<style></style>
