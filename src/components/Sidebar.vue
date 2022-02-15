<template>
  <div class="sidebar">
    <div class="navigation">
      <div class="close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style="fill: #000000"
        >
          <path
            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
          ></path>
        </svg>
      </div>
      <ul v-for="menu in menus" :key="menu.id">
        <li class="nav-item" @click.prevent="showChildNav(menu)">
          <router-link :to="`/${menu.path}`" class="item-link">
            <div class="link-icon">
              <img
                v-bind:src="require(`../assets/logo/${menu.icon}.svg`)"
                alt="Home"
              />
            </div>
            <div class="link-text">{{ menu.name }}</div>
          </router-link>
        </li>

        <div class="child-nav-holder" v-if="menu.isShow === true">
          <ul class="nav-child" v-for="child in menu.children" :key="child.id">
            <li class="nav-item">
              <router-link :to="`/${menu.path}/${child.path}`" class="item-link">
                <div class="link-icon"></div>
                <div class="link-text">{{ child.name }}</div>
              </router-link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      img: 'https://www.digitalocean.com/assets/community/icons/default-avatar-b0661a7966658c06c3c32b6610fd1dbabb680c147a1ea0039be79ffba067154c.png',
      menus: [
        {
          name: 'Trang chủ',
          icon: 'Home',
          children: [],
        },
        {
          name: 'Danh mục',
          path: 'categories',
          icon: 'Document',
          isShow: false,
          children: [
            {
              name: 'Danh mục Tỉnh/TP',
              path: ''
            },
            {
              name: 'Danh mục Quận/Huyện',
              path: 'district'
            },
            {
              name: 'Danh mục Trường',
              path: 'school'
            },
          ],
        },
        {
          name: 'Quản lý học liệu',
          path: 'materials',
          icon: 'folder',
          isShow: false,
          children: [
            {
              name: 'Danh mục Chương trình',
              path: 'program'
            },
            {
              name: 'Danh mục Môn học',
              path: 'subject'
            },
            {
              name: 'Danh mục Bài học',
              path: 'lesson'
            },
          ],
        },
      ],

      isShowChildNav: false,
    };
  },
  methods: {
    showChildNav(menu) {
      menu.isShow = !menu.isShow;
      // console.log(menu);
      // Array.from(this.menus).forEach((menu) => {
      //   if (menu.hasChild && menu.childName == 'type') {
      //     this.isShowChildNav = !this.isShowChildNav;
      //     console.log(this.isShowChildNav);
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped>

.sidebar {
  .navigation {
    ul {
      .nav-item {
        .item-link {
          .link-icon {
            max-width: 24px;

            img {
              width: 100%;
            }
          }
        }

        .nav-child {
          .nav-item {
            padding-left: 0;

            .item-link {
              .link-icon {
                max-width: 24px;

                img {
                  width: 100%;
                }
              }
            }
          }

          .nav-item:first-child {
            .item-link {
              padding-top: 9px;
            }
          }
        }
      }
    }
  }
}
</style>
