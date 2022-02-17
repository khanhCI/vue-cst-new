<template>
  <div class="main">
    <div class="main-header">
      <div class="header-taskbar">
        <div class="task-input taskbar-city">
          <label>Tên Tỉnh/TP</label>
          <input type="text" placeholder="Nhập tên tỉnh/tp cần tìm" />
        </div>

        <div class="task-input taskbar-status">
          <label>Trạng thái</label>
          <select name="status">
            <option value="Kích hoạt">Kích hoạt</option>
            <option value="Bỏ kích hoạt">Bỏ kích hoạt</option>
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

    <div v-if="modalShow" class="modal-holder">
      <AddModal
        class="add-modal"
        @closeModal="closeModal"
        @addProvince="addProvince"
        :formDetail="formInfo"
      />
    </div>

    <div class="main-content">
      <div class="content-header" v-for="label in headerLabel" :key="label.id">
        <div class="header header-number">{{ label.ordinal }}</div>
        <div class="header header-city">
          {{ label.city_name }}
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-nation">
          {{ label.country }}
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-status">
          {{ label.status }}
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-create">
          {{ label.created_by }}
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-date-create">
          {{ label.created_date }}
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-modifier">
          {{ label.modifier }}
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header header-last-modify">
          {{ label.last_modified }}
          <img src="../assets/logo/sort.svg" alt="sort" />
        </div>
        <div class="header"></div>
      </div>

      <div class="content-main">
        <div
          class="main-item"
          v-for="(item, index) in infoProvinces"
          :key="item.id"
        >
          <div class="item item-number">{{ index + 1 }}</div>
          <div class="item item-city">{{ item.city_name }}</div>
          <div class="item item-nation">{{ item.country }}</div>
          <div class="item item-status">{{ item.status }}</div>
          <div class="item item-create">{{ item.created_by }}</div>
          <div class="item item-date-create">{{ item.createdAt }}</div>
          <div class="item item-modifier">{{ item.modifier }}</div>
          <div class="item item-last-modify">{{ item.updatedAt }}</div>
          <div class="item item-icon">
            <div class="icon-holder">
              <img src="../assets/logo/Edit.svg" alt="Edit" />
            </div>
            <div class="icon-holder">
              <img src="../assets/logo/un-lock.svg" alt="un-lock" />
            </div>
          </div>
        </div>

        <!-- <div class="main-item">
          <div class="item item-number">01</div>
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
          <div class="item item-city">Hà Nội</div>
          <div class="item item-nation">Việt Nam</div>
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
        </div> -->
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
import ProvinceService from '../services/province.service';

export default {
  name: 'Main',
  components: {
    AddModal,
  },
  data() {
    return {
      isShow: false,
      modalShow: false,
      headerLabel: [
        {
          ordinal: 'STT',
          city_name: 'Tên Tỉnh/TP',
          country: 'Quốc gia',
          status: 'Trạng thái',
          created_by: 'Người tạo',
          created_date: 'Ngày tạo',
          modifier: 'Người sửa',
          last_modified: 'Ngày sửa cuối',
        },
      ],
      formInfo: {
        title: 'Thêm mới thông tin Tỉnh/TP',
        inputLabel: 'Tên Tỉnh/TP *',
        inputPlaceHolder: 'Vui lòng nhập tên Tỉnh/TP',
        inputName: 'province',
        selectLabel: 'Quốc gia *',
        selectOptions: {
          option1: 'Việt Nam'
        },
        selectName: 'nation',
        statusLabel: 'Trạng thái',
        btnText: 'Thêm mới'
      },
      infoProvinces: [],
      formData: {},
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
    async addProvince(e) {
      this.formData = {
        city_name: e.inputData,
        country: e.selectData,
      };
      console.log(this.formData);
      await ProvinceService.postProvince(this.formData).then((response) => {
        console.log(response);
      });
      await ProvinceService.getProvince().then((response) => {
        this.infoProvinces = response.data.info;
        console.log(this.infoProvinces);
      });
    },
  },
  mounted() {
    ProvinceService.getProvince().then((response) => {
      this.infoProvinces = response.data.info;
      console.log(this.infoProvinces);
    });
  },
  // updated() {
  //   ProvinceService.getProvince().then((response) => {
  //     this.infoProvinces = response.data.info;
  //   });
  // },
};
</script>

<style lang="scss" scoped>
@import '../scss/_variable.scss';
@import '../scss/_main.scss';

.main {
  position: relative;

  // .modal-holder {
  //   position: fixed;
  //   z-index: 9998;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0.5);
  //   display: table;
  //   transition: opacity 0.3s ease;

  //   .add-modal {
  //     position: absolute;
  //     top: 10%;
  //     right: 0;
  //     left: 0;
  //   }
  // }
}

.info-avt {
  width: 60px;
  height: 56px;
  margin-bottom: 0.5rem;
  position: relative;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  .avt-dropdown {
    position: absolute;
    left: -30px;
    bottom: -100%;
    height: 55px;
    background: $white-bg;
    display: flex;
    align-items: center;

    .dropdown-item {
      height: 24px;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        margin-right: 0.5rem;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .main {

    .main-content {
      margin-top: 0;
    }
  }
}
</style>
