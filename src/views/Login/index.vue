<template>
  <div class="login">
    <div class="login-form">
      <div class="login-tab">
        <div
          v-for="(tab, index) in menuTab"
          :key="index"
          :class="{ active: tab.current }"
          class="tab"
          @click="toggleMenu(tab)"
        >
          {{ tab.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuTab: [
        { text: "登录", current: true },
        { text: "注册", current: false }
      ]
    };
  },
  methods: {
    toggleMenu(item) {
      this.menuTab.forEach(item => {
        item.current = false;
      });
      item.current = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: #efefee;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    .login-tab {
      display: flex;
      background: blue;
      font-size: 14px;
      cursor: pointer;
      .tab {
        padding: 10px 20px;
      }
      .active {
        background: green;
      }
    }
  }
}
</style>
