<template>
  <div class="login-container">
    <h2>用户登录</h2>
    <div class="form-container">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formData"
        :rules="rules"
        ref="formData"
      >
        <el-form-item label="用化名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" type="password"
                    @keyup.enter.native="submitForm('formData')"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="success" @click="submitForm('formData')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      // 表单数据
      labelPosition: "top",
      formData: {
        username: "",
        password: ""
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 3,
            max: 18,
            message: "长度在 3 到 18 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  // 表单验证
  methods: {
    submitForm(formData) {
      // 这里是根据表单规则判断输入的用户名和密码是否正确
      this.$refs[formData].validate(valid => {
        // console.log(valid);
        if (valid) {
          // 发送请求，axios调用接口
          this.$axios.post("login",this.formData).then(res=>{
            if (res.data.meta.status === 200) {
              this.$message.success(res.data.meta.msg);
            // 保存token去首页
              window.sessionStorage.setItem("token", res.data.data.token);
              this.$router.push("/");
            } else if (res.data.meta.status == 400) {
              this.$message.error(res.data.meta.msg);
            }
          });
        } else {
          // 用户名密码输入格式有误
          this.$message.error('登录失败，请正确输入用户名或密码！');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
html body {
  height: 100vh;
  margin: 0;
  padding: 0;
}
.login-container {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    background-color: #fff;
    width: 580px;
    padding: 40px;
    border-radius: 10px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>

