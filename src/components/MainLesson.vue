<template>
  <div class="main main-lesson">
    <div class="main-header">
      <div class="header-taskbar">
        <div class="task-input taskbar-lesson">
          <label>Tên bài học</label>
          <input type="text" placeholder="Nhập tên bài học" />
        </div>

        <div class="task-input taskbar-status">
          <label>Trạng thái</label>
          <select name="status">
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Bỏ kích hoạt">Bỏ kích hoạt</option>
          </select>
        </div>

        <div class="task-input taskbar-grade">
          <label>Chương trình</label>
          <select name="status">
            <option value="Lớp 1">Lớp 1</option>
            <option value="Lớp 2">Lớp 2</option>
          </select>
        </div>

        <div class="task-input taskbar-subject">
          <label>Môn học</label>
          <select name="status">
            <option value="Toán">Toán</option>
            <option value="Tiếng Việt">Tiếng Việt</option>
          </select>
        </div>

        <div class="task-input taskbar-type">
          <label>Loại bài học</label>
          <select name="status">
            <option value="Tất cả">Tất cả</option>
            <option value="Audio và text">Audio và text</option>
            <option value="Kiểm tra">Kiểm tra</option>
          </select>
        </div>

        <div class="task-btn search-btn">
          <img src="../assets/logo/filter.svg" alt="filter" />
          Tìm kiếm
        </div>

        <div class="task-btn add-btn" @click.prevent="showModal">
          <img src="../assets/logo/plus.svg" alt="search" />
          Thêm mới
        </div>

        <div class="task-btn quick-btn">
          <img src="../assets/logo/quick-add.svg" alt="quick" />
          Thêm nhanh
        </div>

        <div class="task-btn print-btn">
          <img src="../assets/logo/download.svg" alt="print" />
          Xuất dữ liệu
        </div>
      </div>

      <div class="header-info">
        <div class="info-avt" @click.prevent="showDropdown">
          <img src="../assets/logo/unsplash_TACdQo62To0.svg" alt="avatar" />
          <ul v-if="isShow" class="avt-dropdown">
            <li class="dropdown-item" @click.prevent="logOut">
              <img src="../assets/logo/log-out.svg" alt="log-out" />
              Log Out
            </li>
          </ul>
        </div>

        <div class="info-noti">
          <img
            src="../assets/logo/clarity_notification-solid.svg"
            alt="notification"
          />
          <div class="dot"></div>
        </div>
      </div>
    </div>

    <div class="modal-holder" v-if="modalShow">
      <AddLessonModal id="add-lesson" @closeModal="closeModal" />
    </div>

    <div class="main-content">
      <div class="content-header">
        <div class="header header-number">STT</div>
        <div class="header header-name">
          Tên bài học
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-left-img">
          Ảnh bìa trái
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-right-img">
          Ảnh bìa phải
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-subject">
          Môn học
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-lesson-type">
          Loại bài học
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-status">
          Trạng thái
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-create">
          Người tạo
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-date-create">
          Ngày tạo
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-modifier">
          Người sửa
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-last-modify">
          Ngày sửa cuối
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header"></div>
      </div>

      <div class="content-main">
        <div class="main-item">
          <div class="item item-number">01</div>
          <div class="item item-name">Bài 1</div>
          <div class="item item-left-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-right-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-subject">Toán</div>
          <div class="item item-lesson-type">Audio và text</div>
          <div class="item item-status">Bỏ kích hoạt</div>
          <div class="item item-create">Admin</div>
          <div class="item item-date-create">13/01/2022 09:19</div>
          <div class="item item-modifier">Admin</div>
          <div class="item item-last-modify">13/01/2022 09:19</div>
          <div class="item item-icon">
            <div class="icon-holder">
              <img src="../assets/logo/Edit.svg" alt="Edit" />
            </div>
            <div class="icon-holder">
              <img src="../assets/logo/un-lock.svg" alt="un-lock" />
            </div>
          </div>
        </div>

        <div class="main-item">
          <div class="item item-number">02</div>
          <div class="item item-name">Bài 1</div>
          <div class="item item-left-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-right-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-subject">Toán</div>
          <div class="item item-lesson-type">Audio và text</div>
          <div class="item item-status">Bỏ kích hoạt</div>
          <div class="item item-create">Admin</div>
          <div class="item item-date-create">13/01/2022 09:19</div>
          <div class="item item-modifier">Admin</div>
          <div class="item item-last-modify">13/01/2022 09:19</div>
          <div class="item item-icon">
            <div class="icon-holder">
              <img src="../assets/logo/Edit.svg" alt="Edit" />
            </div>
            <div class="icon-holder">
              <img src="../assets/logo/un-lock.svg" alt="un-lock" />
            </div>
          </div>
        </div>

        <div class="main-item">
          <div class="item item-number">03</div>
          <div class="item item-name">Bài 1</div>
          <div class="item item-left-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-right-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-subject">Toán</div>
          <div class="item item-lesson-type">Audio và text</div>
          <div class="item item-status">Bỏ kích hoạt</div>
          <div class="item item-create">Admin</div>
          <div class="item item-date-create">13/01/2022 09:19</div>
          <div class="item item-modifier">Admin</div>
          <div class="item item-last-modify">13/01/2022 09:19</div>
          <div class="item item-icon">
            <div class="icon-holder">
              <img src="../assets/logo/Edit.svg" alt="Edit" />
            </div>
            <div class="icon-holder">
              <img src="../assets/logo/un-lock.svg" alt="un-lock" />
            </div>
          </div>
        </div>

        <div class="main-item">
          <div class="item item-number">04</div>
          <div class="item item-name">Bài 1</div>
          <div class="item item-left-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-right-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-subject">Toán</div>
          <div class="item item-lesson-type">Audio và text</div>
          <div class="item item-status">Bỏ kích hoạt</div>
          <div class="item item-create">Admin</div>
          <div class="item item-date-create">13/01/2022 09:19</div>
          <div class="item item-modifier">Admin</div>
          <div class="item item-last-modify">13/01/2022 09:19</div>
          <div class="item item-icon">
            <div class="icon-holder">
              <img src="../assets/logo/Edit.svg" alt="Edit" />
            </div>
            <div class="icon-holder">
              <img src="../assets/logo/un-lock.svg" alt="un-lock" />
            </div>
          </div>
        </div>

        <div class="main-item">
          <div class="item item-number">05</div>
          <div class="item item-name">Bài 1</div>
          <div class="item item-left-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-right-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-subject">Toán</div>
          <div class="item item-lesson-type">Audio và text</div>
          <div class="item item-status">Bỏ kích hoạt</div>
          <div class="item item-create">Admin</div>
          <div class="item item-date-create">13/01/2022 09:19</div>
          <div class="item item-modifier">Admin</div>
          <div class="item item-last-modify">13/01/2022 09:19</div>
          <div class="item item-icon">
            <div class="icon-holder">
              <img src="../assets/logo/Edit.svg" alt="Edit" />
            </div>
            <div class="icon-holder">
              <img src="../assets/logo/un-lock.svg" alt="un-lock" />
            </div>
          </div>
        </div>

        <div class="main-item">
          <div class="item item-number">06</div>
          <div class="item item-name">Bài 1</div>
          <div class="item item-left-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-right-img">
            <img src="../assets/photo/paper-1.png" alt="paper-1" />
          </div>
          <div class="item item-subject">Toán</div>
          <div class="item item-lesson-type">Audio và text</div>
          <div class="item item-status">Bỏ kích hoạt</div>
          <div class="item item-create">Admin</div>
          <div class="item item-date-create">13/01/2022 09:19</div>
          <div class="item item-modifier">Admin</div>
          <div class="item item-last-modify">13/01/2022 09:19</div>
          <div class="item item-icon">
            <div class="icon-holder">
              <img src="../assets/logo/Edit.svg" alt="Edit" />
            </div>
            <div class="icon-holder">
              <img src="../assets/logo/un-lock.svg" alt="un-lock" />
            </div>
          </div>
        </div>
      </div>

      <div class="content-footer">
        <div class="footer-item">1</div>
        <div class="footer-item">&lt;</div>
        <div class="footer-item">2</div>
        <div class="footer-item">></div>
        <div class="footer-item">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import AddLessonModal from './Modals/AddLessonModal.vue';

export default {
  name: 'MainLesson',
  components: { AddLessonModal },
  data() {
    return {
      modalShow: false,
      isShow: false,
    };
  },
  methods: {
    showDropdown() {
      this.isShow = !this.isShow;
    },
    showModal() {
      this.modalShow = !this.modalShow;
    },
    closeModal() {
      this.modalShow = !this.modalShow;
    },
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/style.scss';

.main-lesson {
  position: relative;

  .modal-holder {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    #add-lesson {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 100%;
      overflow-y: scroll;
    }
  }
}
</style>
