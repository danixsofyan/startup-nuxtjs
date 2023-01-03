<template>
  <div>
    <!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="flex-row page d-flex flex-column-fluid">
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<!--begin::Header-->
					<div id="kt_header" class="header align-items-stretch" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
						<!--begin::Container-->
						<div class="container-xxl d-flex align-items-center">
							<!--begin::Heaeder menu toggle-->
							<HeaderMenuToggle />
							<!--end::Heaeder menu toggle-->
							<!--begin::Header Logo-->
              <HeaderLogo />
							<!--end::Header Logo-->
							<!--begin::Wrapper-->
							<Wrapper />
							<!--end::Wrapper-->
						</div>
						<!--end::Container-->
					</div>
					<!--end::Header-->
          <!--begin::Toolbar-->
          <Toolbar />
          <!--end::Toolbar-->
					<!--begin::Container-->
					<Nuxt />
					<!--end::Container-->
					<!--begin::Footer-->
					<Footer />
					<!--end::Footer-->
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
		<!--end::Root-->
		<!--end::Main-->
		<!--begin::Scrolltop-->
		<ScrollTop />
		<!--end::Scrolltop-->
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/plugins/custom/fullcalendar/fullcalendar.bundle.css' },
        { rel: 'stylesheet', href: '/plugins/custom/datatables/datatables.bundle.css' },
        { rel: 'stylesheet', href: '/plugins/global/plugins.bundle.css' },
        { rel: 'stylesheet', href: '/css/style.bundle.css' },
      ],
      script: [
        { src: "/plugins/custom/fullcalendar/fullcalendar.bundle.js" },
        { src: "/plugins/custom/datatables/datatables.bundle.js" },
        { src: "/js/widgets.bundle.js" },
        { src: "/js/custom/widgets.js" },
        { src: "/js/custom/apps/chat/chat.js" },
        { src: "/js/custom/utilities/modals/upgrade-plan.js" },
        { src: "/js/custom/utilities/modals/create-app.js" },
        { src: "/js/custom/utilities/modals/users-search.js" }
      ],
      bodyAttrs: {
        class: 'header-fixed header-tablet-and-mobile-fixed toolbar-enabled',
        style : 'background-image: url(/media/indigo/header-bg.jpg)'
      }
    }
  },
  mounted() {
    if( window.localStorage )
    {
      if( !localStorage.getItem('firstLoad') )
      {
        localStorage['firstLoad'] = true;
        window.location.reload();
      }
      else
        localStorage.removeItem('firstLoad');
    }
  }
}
</script>
