<template>
  <div class="p-10 mx-auto rounded shadow-sm w-lg-600px bg-body p-lg-15">
    <!--begin::Form-->
    <form class="form w-100" @submit.prevent="userRegister">
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="mb-3 text-dark">Create an Account</h1>
        <!--end::Title-->
        <!--begin::Link-->
        <div class="text-gray-400 fw-bold fs-4">Already have an account?
        <nuxt-link to="/" class="link-primary fw-bolder">Sign in here</nuxt-link>
        </div>
        <!--end::Link-->
      </div>
      <!--end::Heading-->
      <!--begin::Action-->
      <button type="button" class="mb-10 btn btn-light-primary fw-bolder w-100">
      <img alt="Logo" src="/media/svg/brand-logos/google-icon.svg" class="h-20px me-3" />Sign in with Google</button>
      <!--end::Action-->
      <!--begin::Separator-->
      <div class="mb-10 d-flex align-items-center">
        <div class="border-gray-300 border-bottom mw-50 w-100"></div>
        <span class="mx-2 text-gray-400 fw-bold fs-7">OR</span>
        <div class="border-gray-300 border-bottom mw-50 w-100"></div>
      </div>
      <!--end::Separator-->
      <!--begin::Input group-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">First Name</label>
          <input v-model="register.firstName" class="form-control form-control-lg form-control-solid" type="text" placeholder="" name="first-name" autocomplete="off" />
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-xl-6">
          <label class="form-label fw-bolder text-dark fs-6">Last Name</label>
          <input v-model="register.lastName" class="form-control form-control-lg form-control-solid" type="text" placeholder="" name="last-name" autocomplete="off" />
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
       <!--begin::Input group-->
      <div class="fv-row mb-7">
        <label class="form-label fw-bolder text-dark fs-6">Username</label>
        <input v-model="register.username" class="form-control form-control-lg form-control-solid" type="text" placeholder="" name="email" autocomplete="off" />
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="fv-row mb-7">
        <label class="form-label fw-bolder text-dark fs-6">Email</label>
        <input v-model="register.email" class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <!--begin::Label-->
          <label class="form-label fw-bolder text-dark fs-6">Password</label>
          <!--end::Label-->
          <!--begin::Input wrapper-->
          <div class="mb-3 position-relative">
            <input v-model="register.password" class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autocomplete="off" />
            <span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
              <i class="bi bi-eye-slash fs-2"></i>
              <i class="bi bi-eye fs-2 d-none"></i>
            </span>
          </div>
          <!--end::Input wrapper-->
          <!--begin::Meter-->
          <div class="mb-3 d-flex align-items-center" data-kt-password-meter-control="highlight">
            <div class="rounded flex-grow-1 bg-secondary bg-active-success h-5px me-2"></div>
            <div class="rounded flex-grow-1 bg-secondary bg-active-success h-5px me-2"></div>
            <div class="rounded flex-grow-1 bg-secondary bg-active-success h-5px me-2"></div>
            <div class="rounded flex-grow-1 bg-secondary bg-active-success h-5px"></div>
          </div>
          <!--end::Meter-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Hint-->
        <div class="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>
        <!--end::Hint-->
      </div>
      <!--end::Input group=-->
      <!--begin::Input group-->
      <div class="mb-5 fv-row">
        <label class="form-label fw-bolder text-dark fs-6">Confirm Password</label>
        <input @keyup.enter="userRegister" class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="confirm-password" autocomplete="off" />
      </div>
      <!--end::Input group-->
      <!--begin::Input group-->
      <div class="mb-10 fv-row">
        <label class="form-check form-check-custom form-check-solid form-check-inline">
          <input class="form-check-input" type="checkbox" name="toc" value="1" required />
          <span class="text-gray-700 form-check-label fw-bold fs-6">I Agree
          <a href="#" class="ms-1 link-primary">Terms and conditions</a>.</span>
        </label>
      </div>
      <!--end::Input group-->
      <!--begin::Actions-->
      <div class="text-center">
        <button type="submit" class="btn btn-lg btn-primary">
          <span class="indicator-label">Register</span>
          <span class="indicator-progress">Please wait...
          <span class="align-middle spinner-border spinner-border-sm ms-2"></span></span>
        </button>
      </div>
      <!--end::Actions-->
    </form>
    <!--end::Form-->
  </div>
</template>

<script>
export default {
  layout : 'auth',
  auth: false,
  data() {
    return {
      register: {
        firstName: 'Dani',
        lastName: 'Sofyan',
        username: 'danixsofyannxx',
        email: 'dani@absen.id',
        password: '123qweasd',
      },
    }
  },
  methods: {
    async userRegister() {
      let response = await this.$axios.post('/api/v1/auth/register', this.register)
      try {
        console.log(response.data.data.token)
        this.$auth
          .setUserToken(response.data.data.token)
          .then(() => this.$router.push({ path: '/home' }))
        alert('success');
      } catch (err) {
        if (err.response.data.code == 400) {
          alert('asds')
        }
      }
    },
  },
}
</script>
