<template>
  <div class="main main-school">
    <div class="main-header">
      <div class="header-taskbar">
        <div class="task-input taskbar-city">
          <label>Tên trường</label>
          <input type="text" placeholder="Nhập tên trường cần tìm" />
        </div>

        <div class="task-input taskbar-status">
          <label>Trạng thái</label>
          <select name="status">
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Bỏ kích hoạt">Bỏ kích hoạt</option>
          </select>
        </div>

        <div class="task-input taskbar-province">
          <label>Tỉnh/TP</label>
          <select name="province">
            <option value="Hà Nội">Hà Nội</option>
            <option value="Hải Phòng">Hải Phòng</option>
          </select>
        </div>

        <div class="task-input taskbar-district">
          <label>Quận/Huyện</label>
          <select name="district">
            <option value="Hà Đông">Hà Đông</option>
            <option value="Cầu Giấy">Cầu Giấy</option>
          </select>
        </div>

        <div class="task-btn search-btn">
          <img src="../assets/logo/filter.svg" alt="filter" />
          Tìm kiếm
        </div>

        <div class="task-btn add-btn" @click.prevent="showAdd">
          <img src="../assets/logo/plus.svg" alt="search" />
          Thêm mới
        </div>

        <div class="task-btn print-btn">
          <img src="../assets/logo/download.svg" alt="print" />
          Xuất dữ liệu
        </div>
      </div>

      <div class="header-info">
        <div class="info-avt" @click.prevent="showDropDown">
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

    <div v-if="modalShow" class="modal-holder">
      <AddModal 
        class="add-modal"
        @closeModal="closeModal"
        :formDetail="formInfo"
      />
    </div>

    <div class="main-content">
      <div class="content-header">
        <div class="header header-number">STT</div>
        <div class="header header-school">
          Tên trường
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-district">
          Quận/Huyện
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-province">
          Tỉnh/TP
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-status">
          Trạng thái
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-creator">
          Người tạo
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-date">
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
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
          <div class="item item-number">01</div>
          <div class="item item-school">Hà Đông</div>
          <div class="item item-district">Hà Đông</div>
          <div class="item item-province">Hà Nội</div>
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
import AddModal from './Modals/AddModal.vue';

export default {
  name: 'MainSchool',
  components: {
    AddModal,
  },
  data() {
    return {
      isShow: false,
      modalShow: false,
      formInfo: {
        title: 'Thêm mới thông tin Trường',
        inputLabel: 'Tên trường *',
        inputPlaceHolder: 'Vui lòng nhập tên Trường',
        inputName: 'school',
        selectLabel: 'Thuộc Quận/Huyện *',
        selectOptions: {
          option1: 'Hà Đông',
          option2: 'Cầu Giấy'
        },
        selectName: 'district',
        statusLabel: 'Trạng thái',
        btnText: 'Thêm mới'
      }
    };
  },
  methods: {
    showDropDown() {
      this.isShow = !this.isShow;
    },
    showAdd() {
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

<style></style>
