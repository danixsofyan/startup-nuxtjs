<template>
<div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
    <!--begin::Post-->
    <div class="content flex-row-fluid" id="kt_content">
      <!--begin::Row-->
      <div class="row g-5 g-xl-8">
        <!--begin::Col-->
        <div class="col-xl-12">
          <!--begin::Row-->
          <div class="mb-5 row gx-5 gx-xl-8 mb-xl-8">
            <div class="justify-content-md-center">
              <div class="card card-flush mb-xxl-10">
                <!--begin::Header-->
                <div class="pt-5 card-header">
                  <!--begin::Title-->
                  <h3 class="card-title align-items-start flex-column">
                    <span class="card-label fw-bolder text-dark">Indigo Programs</span>
                    <span class="pt-2 text-gray-400 fw-bold fs-6">Unlocking Real Access for Every Vision in Indonesia</span>
                  </h3>
                  <!--end::Title-->
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="card-body col align-self-center">
                  <!--begin::Nav-->
                  <ul class="mb-3 nav nav-pills nav-pills-custom">
                    <!--begin::Item-->
                    <li class="mb-3 nav-item me-3 me-lg-6">
                      <!--begin::Link-->
                      <nuxt-link to="/visit" class="py-4 overflow-hidden nav-link d-flex justify-content-between flex-column flex-center w-80px h-85px" >
                        <!--begin::Icon-->
                        <div class="nav-icon">
                          <img alt="" src="media/icons/duotune/general/gen018.svg" class="">
                        </div>
                        <!--end::Icon-->
                        <!--begin::Subtitle-->
                        <span class="text-gray-700 nav-text fw-bolder fs-6 lh-1">Visit</span>
                        <!--end::Subtitle-->
                        <!--begin::Bullet-->
                        <span class="bottom-0 bullet-custom position-absolute w-100 h-4px bg-primary"></span>
                        <!--end::Bullet-->
                      </nuxt-link>
                      <!--end::Link-->
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="mb-3 nav-item me-3 me-lg-6">
                      <!--begin::Link-->
                      <nuxt-link to="/intake" class="py-4 overflow-hidden nav-link d-flex justify-content-between flex-column flex-center w-80px h-85px">
                        <!--begin::Icon-->
                        <div class="nav-icon">
                          <img alt="" src="media/icons/duotune/general/gen002.svg" class="">
                        </div>
                        <!--end::Icon-->
                        <!--begin::Subtitle-->
                        <span class="text-gray-700 nav-text fw-bolder fs-6 lh-1">Intake</span>
                        <!--end::Subtitle-->
                        <!--begin::Bullet-->
                        <span class="bottom-0 bullet-custom position-absolute w-100 h-4px bg-primary"></span>
                        <!--end::Bullet-->
                      </nuxt-link>
                      <!--end::Link-->
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="mb-3 nav-item me-3 me-lg-6">
                      <!--begin::Link-->
                      <a class="py-4 overflow-hidden nav-link d-flex justify-content-between flex-column flex-center w-80px h-85px">
                        <!--begin::Icon-->
                        <div class="nav-icon">
                          <img alt="Logo" src="media/icons/duotune/arrows/arr070.svg" class="">
                        </div>
                        <!--end::Icon-->
                        <!--begin::Subtitle-->
                        <span class="text-gray-700 nav-text fw-bolder fs-6 lh-1">Betalist</span>
                        <!--end::Subtitle-->
                        <!--begin::Bullet-->
                        <span class="bottom-0 bullet-custom position-absolute w-100 h-4px bg-primary"></span>
                        <!--end::Bullet-->
                      </a>
                      <!--end::Link-->
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="mb-3 nav-item me-3 me-lg-6">
                      <!--begin::Link-->
                      <a class="py-4 overflow-hidden nav-link d-flex justify-content-between flex-column flex-center w-80px h-85px">
                        <!--begin::Icon-->
                        <div class="nav-icon">
                          <img alt="" src="media/icons/duotune/coding/cod003.svg" class="">
                        </div>
                        <!--end::Icon-->
                        <!--begin::Subtitle-->
                        <span class="text-gray-600 nav-text fw-bolder fs-6 lh-1">Chalange</span>
                        <!--end::Subtitle-->
                        <!--begin::Bullet-->
                        <span class="bottom-0 bullet-custom position-absolute w-100 h-4px bg-primary"></span>
                        <!--end::Bullet-->
                      </a>
                      <!--end::Link-->
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="mb-3 nav-item me-3 me-lg-6">
                      <!--begin::Link-->
                      <a class="py-4 overflow-hidden nav-link d-flex justify-content-between flex-column flex-center w-80px h-85px">
                        <!--begin::Icon-->
                        <div class="nav-icon">
                          <img alt="" src="media/icons/duotune/technology/teh009.svg" class="nav-icon">
                        </div>
                        <!--end::Icon-->
                        <!--begin::Subtitle-->
                        <span class="text-gray-600 nav-text fw-bolder fs-6 lh-1">Academy</span>
                        <!--end::Subtitle-->
                        <!--begin::Bullet-->
                        <span class="bottom-0 bullet-custom position-absolute w-100 h-4px bg-primary"></span>
                        <!--end::Bullet-->
                      </a>
                      <!--end::Link-->
                    </li>
                    <!--end::Item-->
                  </ul>
                  <!--end::Nav-->
                </div>
                <!--end: Card Body-->
              </div>
            </div>
          </div>
          <!--end::Row-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
    </div>
    <!--end::Post-->
  </div>
</template>
<script>
export default {
  layout : 'app',
  auth: true,
  methods:{
    async userLogout(){
      this.$auth.logout();
      this.$router.push('/login');
    }
  },
}
</script>
