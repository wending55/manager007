<template>
  <div class="main-container">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img
                src="../assets/logo.png"
                alt=""
              >
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple-light">
              <div class="title">电商后台管理系统</div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple left">
              <el-button
                type="success"
                @click="logout"
              >退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              router	
            >
              <el-submenu :index="item.order+''" v-for="(item, index) in menuList" :key="item.id">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{item.authName}}</span>
                </template>
                <el-menu-item-group v-for="(it, i) in item.children" :key="it.id">
                  <el-menu-item :index="'/'+it.path"><i class="el-icon-menu"></i>{{it.authName}}</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  // 写好路由以后该步骤可抽取到导航守卫中
  // beforeCreate() {
  //   let token = window.sessionStorage.getItem("token");
  //   if (token) {
  //   } else {
  //     this.$message.error("请先登录");
  //     this.$router.push("login");
  //   }
  // },
  data(){
    return  {
      menuList: []
    }
  },
  methods: {
    logout() {
      this.$confirm("即将退出后台管理系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.sessionStorage.removeItem("token");
          this.$router.push("login");
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    }
  },
  created() {
    this.$axios.get("menus").then(res => {
      this.menuList = res.data.data;
    });
  }
};
</script>
<style lang="scss">
// vue 帮组件样式提供了一个作用域的方式
// css作用域：使用大选择器把一些后代选择器的作用范围约束在其范围内部
.main-container {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      background-color: #b3c0d1;
      color: #333;
      text-align: center;
      line-height: 60px;
      .bg-purple {
        background-color: #b3c0d1;
        height: 60px;
      }
      .bg-purple-light {
        background-color: #b3c0d1;
        .title {
          color: #fff;
          font-size: 26px;
          font-weight: 900;
        }
      }
      .el-col-4 {
        text-align: left;
      }
      .el-col-2 {
        text-align: right;
      }
    }
    .el-aside {
      background-color: #d3dce6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }
    .el-main {
      background-color: #e9eef3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
  }
  .el-submenu__title {
    text-align: left;
  }
}
</style>