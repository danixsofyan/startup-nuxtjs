<template>
  <!--begin::Main-->
		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Authentication - Sign-in -->
			<div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(/media/indigo/auth-bg.png">
				<!--begin::Content-->
				<div class="p-10 d-flex flex-center flex-column flex-column-fluid pb-lg-20">
					<!--begin::Logo-->
					<nuxt-link to="/" class="mt-10 mb-12">
						<img alt="Logo" src="/media/indigo/logo-indigo.png" class="h-60px" />
					</nuxt-link>
					<!--end::Logo-->
					<!--begin::Wrapper-->
					<Nuxt />
					<!--end::Wrapper-->
				</div>
				<!--end::Content-->
				<!--begin::Footer-->
				<div class="p-10 d-flex flex-center flex-column-auto">
					<!--begin::Links-->
					<div class="d-flex align-items-center fw-bold fs-6">
						<a href="https://indigo.id" class="px-2 text-muted text-hover-primary">Home</a>
					</div>
					<!--end::Links-->
				</div>
				<!--end::Footer-->
			</div>
			<!--end::Authentication - Sign-in-->
		</div>
		<!--end::Root-->
		<!--end::Main-->
</template>
<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: '/plugins/global/plugins.bundle.css' },
        { rel: 'stylesheet', href: '/css/style.bundle.css' },
      ]
    }
  },
}
</script>
