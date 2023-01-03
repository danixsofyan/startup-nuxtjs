<template>
  <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
    <!--begin::Navbar-->
    <div class="d-flex align-items-stretch" id="kt_header_nav">
      <!--begin::Menu wrapper-->
      <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
        <!--begin::Menu-->
        <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
          <!--begin::Menu-->
          <div class="my-5 menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
            <nuxt-link to="/" class="menu-item menu-lg-down-accordion me-lg-1">
              <span class="py-3 menu-link">
                <span class="menu-title">Home</span>
                <span class="menu-arrow d-lg-none"></span>
              </span>
            </nuxt-link>
            <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start" class="menu-item menu-lg-down-accordion me-lg-1">
              <span class="py-3 menu-link">
                <span class="menu-title">Apps</span>
                <span class="menu-arrow d-lg-none"></span>
              </span>
              <div class="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-rounded-0 py-lg-4 w-lg-225px">
                <div class="menu-item">
                  <a class="py-3 menu-link" href="https://join.indigo.id" target="_blank">
                    <span class="menu-icon">
                      <!--begin::Svg Icon | path: assets/media/icons/duotune/general/gen002.svg-->
                      <span class="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="black"/>
                        <path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="black"/>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                    </span>
                    <span class="menu-title">Indigo Intake</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="py-3 menu-link" href="https://betalist.indigo.id" target="_blank">
                    <span class="menu-icon">
                      <!--begin::Svg Icon | path: assets/media/icons/duotune/general/gen032.svg-->
                      <span class="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black"/>
                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black"/>
                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black"/>
                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black"/>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                    </span>
                    <span class="menu-title">Indigo Betalist</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="py-3 menu-link" href="https://hackathon.indigo.id" target="_blank">
                    <span class="menu-icon">
                      <!--begin::Svg Icon | path: assets/media/icons/duotune/coding/cod003.svg-->
                      <span class="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z" fill="black"/>
                        <path opacity="0.3" d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z" fill="black"/>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                    </span>
                    <span class="menu-title">Indigo Hackathon</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="py-3 menu-link" href="https://academy.indigo.id" target="_blank">
                    <span class="menu-icon">
                      <!--begin::Svg Icon | path: assets/media/icons/duotune/technology/teh009.svg-->
                      <span class="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8 18L10 14L9.60001 13.2C9.30001 12.6 9.69999 12 10.4 12H13.7C14.3 12 14.7 12.7 14.5 13.2L14 14L16 18H8ZM6 6H4V8H6V6ZM7 11C7 11.6 7.4 12 8 12C8.6 12 9 11.6 9 11V10H7V11ZM10 6V8H20V6H10Z" fill="black"/>
                        <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H21C21.6 2 22 2.4 22 3V21C22 21.6 21.6 22 21 22ZM20 4H4V18H20V4ZM10 9V6H6V9C6 9.6 6.4 10 7 10H9C9.6 10 10 9.6 10 9Z" fill="black"/>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                    </span>
                    <span class="menu-title">Indigo Academy</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="py-3 menu-link" href="#">
                    <span class="menu-icon">
                      <!--begin::Svg Icon | path: assets/media/icons/duotune/communication/com014.svg-->
                      <span class="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16.0173 9H15.3945C14.2833 9 13.263 9.61425 12.7431 10.5963L12.154 11.7091C12.0645 11.8781 12.1072 12.0868 12.2559 12.2071L12.6402 12.5183C13.2631 13.0225 13.7556 13.6691 14.0764 14.4035L14.2321 14.7601C14.2957 14.9058 14.4396 15 14.5987 15H18.6747C19.7297 15 20.4057 13.8774 19.912 12.945L18.6686 10.5963C18.1487 9.61425 17.1285 9 16.0173 9Z" fill="black"/>
                        <rect opacity="0.3" x="14" y="4" width="4" height="4" rx="2" fill="black"/>
                        <path d="M4.65486 14.8559C5.40389 13.1224 7.11161 12 9 12C10.8884 12 12.5961 13.1224 13.3451 14.8559L14.793 18.2067C15.3636 19.5271 14.3955 21 12.9571 21H5.04292C3.60453 21 2.63644 19.5271 3.20698 18.2067L4.65486 14.8559Z" fill="black"/>
                        <rect opacity="0.3" x="6" y="5" width="6" height="6" rx="3" fill="black"/>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                    </span>
                    <span class="menu-title">Indigo Connect</span>
                  </a>
                </div>
                <div class="menu-item">
                  <a class="py-3 menu-link" href="https://game.indigo.id" target="_blank">
                    <span class="menu-icon">
                      <!--begin::Svg Icon | path: assets/media/icons/duotune/electronics/elc009.svg-->
                      <span class="svg-icon svg-icon-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 9V8C13 7.4 13.4 7 14 7H15C16.7 7 18 5.7 18 4V3C18 2.4 17.6 2 17 2C16.4 2 16 2.4 16 3V4C16 4.6 15.6 5 15 5H14C12.3 5 11 6.3 11 8V9H13Z" fill="black"/>
                        <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V10C2 9.4 2.4 9 3 9H21C21.6 9 22 9.4 22 10V21C22 21.6 21.6 22 21 22ZM5 12C4.4 12 4 12.4 4 13C4 13.6 4.4 14 5 14C5.6 14 6 13.6 6 13C6 12.4 5.6 12 5 12ZM8 12C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14C8.6 14 9 13.6 9 13C9 12.4 8.6 12 8 12ZM11 12C10.4 12 10 12.4 10 13C10 13.6 10.4 14 11 14C11.6 14 12 13.6 12 13C12 12.4 11.6 12 11 12ZM14 12C13.4 12 13 12.4 13 13C13 13.6 13.4 14 14 14C14.6 14 15 13.6 15 13C15 12.4 14.6 12 14 12ZM9 15C8.4 15 8 15.4 8 16C8 16.6 8.4 17 9 17C9.6 17 10 16.6 10 16C10 15.4 9.6 15 9 15ZM12 15C11.4 15 11 15.4 11 16C11 16.6 11.4 17 12 17C12.6 17 13 16.6 13 16C13 15.4 12.6 15 12 15ZM15 15C14.4 15 14 15.4 14 16C14 16.6 14.4 17 15 17C15.6 17 16 16.6 16 16C16 15.4 15.6 15 15 15ZM19 18C18.4 18 18 18.4 18 19C18 19.6 18.4 20 19 20C19.6 20 20 19.6 20 19C20 18.4 19.6 18 19 18ZM7 19C7 18.4 6.6 18 6 18H5C4.4 18 4 18.4 4 19C4 19.6 4.4 20 5 20H6C6.6 20 7 19.6 7 19ZM7 16C7 15.4 6.6 15 6 15H5C4.4 15 4 15.4 4 16C4 16.6 4.4 17 5 17H6C6.6 17 7 16.6 7 16ZM17 14H19C19.6 14 20 13.6 20 13C20 12.4 19.6 12 19 12H17C16.4 12 16 12.4 16 13C16 13.6 16.4 14 17 14ZM18 17H19C19.6 17 20 16.6 20 16C20 15.4 19.6 15 19 15H18C17.4 15 17 15.4 17 16C17 16.6 17.4 17 18 17ZM17 19C17 18.4 16.6 18 16 18H9C8.4 18 8 18.4 8 19C8 19.6 8.4 20 9 20H16C16.6 20 17 19.6 17 19Z" fill="black"/>
                        </svg>
                      </span>
                      <!--end::Svg Icon-->
                    </span>
                    <span class="menu-title">Indigo Game</span>
                  </a>
                </div>
              </div>
            </div>
            <nuxt-link to="/admin/dashboard" class="menu-item menu-lg-down-accordion me-lg-1">
              <span class="py-3 menu-link">
                <span class="menu-title">Admin Panel</span>
                <span class="menu-arrow d-lg-none"></span>
              </span>
            </nuxt-link>
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu-->
      </div>
      <!--end::Menu wrapper-->
    </div>
    <!--end::Navbar-->
    <!--begin::Toolbar wrapper-->
    <div class="flex-shrink-0 topbar d-flex align-items-stretch">
      <!--begin::User-->
      <div class="d-flex align-items-center me-n3 ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
        <!--begin::Menu wrapper-->
        <div class="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
          <img class="rounded h-30px w-30px" src="/media/avatars/300-2.jpg" alt="" />
        </div>
        <!--begin::User account menu-->
        <div class="py-4 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold fs-6 w-275px" data-kt-menu="true">
          <!--begin::Menu item-->
          <div class="px-3 menu-item">
            <div class="px-3 menu-content d-flex align-items-center">
              <!--begin::Avatar-->
              <div class="symbol symbol-50px me-5">
                <img alt="Logo" src="/media/avatars/300-2.jpg" />
              </div>
              <!--end::Avatar-->
              <!--begin::Username-->
              <div class="d-flex flex-column">
                <div class="fw-bolder d-flex align-items-center fs-5">{{ this.$auth.user.firstName }} {{ this.$auth.user.lastName }}</div>
                <nuxt-link to="#" class="fw-bold text-muted text-hover-primary fs-7">{{ this.$auth.user.email }}</nuxt-link>
              </div>
              <!--end::Username-->
            </div>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu separator-->
          <div class="my-2 separator"></div>
          <!--end::Menu separator-->
          <!--begin::Menu item-->
          <div class="px-5 menu-item">
            <nuxt-link to="../../demo2/dist/account/overview.html" class="px-5 menu-link">My Profile</nuxt-link>
          </div>
          <!--end::Menu item-->
          <!--begin::Menu item-->
          <div class="px-5 menu-item">
            <span @click="userLogout" class="px-5 menu-link">Sign Out</span>
          </div>
          <!--end::Menu item-->
        </div>
        <!--end::User account menu-->
        <!--end::Menu wrapper-->
      </div>
      <!--end::User -->
      <!--begin::Aside mobile toggle-->
      <!--end::Aside mobile toggle-->
    </div>
    <!--end::Toolbar wrapper-->
  </div>
</template>

<script>
export default {
  methods:{
    async userLogout(){
      this.$auth.logout();
      this.$router.push('/login');
    }
  }
}
</script>

