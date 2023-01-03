<template>
  <div class="p-10 mx-auto rounded shadow-sm w-lg-500px bg-body p-lg-15">
    <!--begin::Form-->
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="mb-3 text-dark">Sign In</h1>
        <!--end::Title-->
        <!--begin::Link-->
        <div class="text-gray-400 fw-bold fs-4">New Here?
        <nuxt-link to="register" class="link-primary fw-bolder">Create an Account</nuxt-link></div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->
      <!--begin::Input group-->
      <div class="mb-10 fv-row">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bolder text-dark">Email</label>
        <!--end::Label-->
        <!--begin::Input-->
        <input v-model="login.email" class="form-control form-control-lg form-control-solid" type="text" name="email" required />
        <!--end::Input-->
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <div class="mb-2 d-flex flex-stack">
            <!--begin::Label-->
            <label class="mb-0 form-label fw-bolder text-dark fs-6">Password</label>
            <!--end::Label-->
            <!--begin::Link-->
            <nuxt-link to="forgot-password" class="link-primary fs-6 fw-bolder">Forgot Password ?</nuxt-link>
            <!--end::Link-->
          </div>
          <!--begin::Input wrapper-->
          <div class="mb-3 position-relative">
            <input @keyup.enter="userLogin" v-model="login.password" class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" required />
            <span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
              <i class="bi bi-eye-slash fs-2"></i>
              <i class="bi bi-eye fs-2 d-none"></i>
            </span>
          </div>
          <!--end::Input wrapper-->
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Input group-->
      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button id="kt_sign_in_submit" v-on:click="userLogin" class="mb-5 btn btn-lg btn-primary w-100">
          <span class="indicator-label">Login</span>
          <span class="indicator-progress">Please wait...
          <span class="align-middle spinner-border spinner-border-sm ms-2"></span></span>
        </button>
        <!--end::Submit button-->
        <!--begin::Separator-->
        <div class="mb-5 text-center text-muted text-uppercase fw-bolder">or</div>
        <!--end::Separator-->
        <!--begin::Google link-->
        <button class="mb-5 btn btn-flex flex-center btn-light btn-lg w-100">
        <img alt="Logo" src="/media/svg/brand-logos/google-icon.svg" class="h-20px me-3" />Continue with Google</button>
        <!--end::Google link-->
      </div>
      <!--end::Actions-->
    <!--end::Form-->
  </div>
</template>

<script>
export default {
  layout: 'auth',
  auth: false,
  data() {
    return {
      login: {
        email: "",
        password: "",
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        this.$router.go('/home');
        console.log(response)
      } catch (err) {
        console.log(err);
        if (err.response.data.code == 500) {
          alert(err);
        } else {
          // alert(err.response.data.message);
          Swal.fire(err.response.data.message);
        }
      }
    }
  },
  mounted() {
    const auth = this.$auth;

    if (auth) {
      let isLogin = auth.loggedIn;
      console.log(auth.$storage._state);
      if (isLogin) {
        let userInfo = auth.user;
        window.location.replace("/home");
        console.log(userInfo)
      }
    }
  }
}
</script>
