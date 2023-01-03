<template>
 <div id="kt_body" class="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px">
   <!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="flex-row page d-flex flex-column-fluid">
				<!--begin::Aside-->
				<Aside />
				<!--end::Aside-->
				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<!--begin::Header-->
          <Header />
					<!--end::Header-->
					<!--begin::Content-->
					<Nuxt />
					<!--end::Content-->
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

<script >
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/plugins/admin/custom/fullcalendar/fullcalendar.bundle.css' },
        { rel: 'stylesheet', href: '/plugins/admin/custom/datatables/datatables.bundle.css' },
        { rel: 'stylesheet', href: '/plugins/admin/global/plugins.bundle.css' },
        { rel: 'stylesheet', href: '/css/admin/style.bundle.css' },
      ],
      script: [
        { src: "/plugins/admin/custom/fullcalendar/fullcalendar.bundle.js" },
        { src: "/plugins/admin/custom/datatables/datatables.bundle.js" },
        { src: "/js/admin/widgets.bundle.js" },
        { src: "/js/admin/custom/widgets.js" },
        { src: "/js/admin/custom/apps/chat/chat.js" },
        { src: "/js/admin/custom/utilities/modals/upgrade-plan.js" },
        { src: "/js/admin/custom/utilities/modals/create-app.js" },
        { src: "/js/admin/custom/utilities/modals/users-search.js" }
      ],
    }
  }
}
</script>
