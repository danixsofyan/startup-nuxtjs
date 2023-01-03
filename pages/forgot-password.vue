<template>
  <div class="p-10 mx-auto mt-10 mb-10 rounded shadow-sm w-lg-500px bg-body p-lg-15">
    <!--begin::Form-->
    <form class="form w-100" novalidate="novalidate" id="kt_password_reset_form">
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="mb-3 text-dark">Forgot Password ?</h1>
        <!--end::Title-->
        <!--begin::Link-->
        <div class="text-gray-400 fw-bold fs-4">Enter your email to reset your password.</div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->
      <!--begin::Input group-->
      <div class="mb-10 fv-row">
        <label class="text-gray-900 form-label fw-bolder fs-6">Email</label>
        <input class="form-control form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
      </div>
      <!--end::Input group-->
      <!--begin::Actions-->
      <div class="flex-wrap d-flex justify-content-center pb-lg-0">
        <button type="button" id="kt_password_reset_submit" class="btn btn-lg btn-primary fw-bolder me-4">
          <span class="indicator-label">Submit</span>
          <span class="indicator-progress">Please wait...
          <span class="align-middle spinner-border spinner-border-sm ms-2"></span></span>
        </button>
        <nuxt-link to="/" class="btn btn-lg btn-light-primary fw-bolder">Cancel</nuxt-link>
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
}
</script>
