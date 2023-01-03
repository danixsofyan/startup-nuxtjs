<template>
  <div class="py-5 toolbar py-lg-15" id="kt_toolbar">
    <!--begin::Container-->
    <div id="kt_toolbar_container" class="flex-wrap container-xxl d-flex flex-stack">
      <div class="page-title d-flex flex-column me-3">
        <!--begin::Title-->
        <h1 class="my-1 text-white d-flex fw-bolder fs-3">{{ $nuxt.$route.name.charAt(0).toUpperCase() + $nuxt.$route.name.slice(1) }}</h1>
        <!--end::Title-->
        <!--begin::Breadcrumb-->
        <span class="text-white" v-if="$nuxt.$route.name == 'home'">Welcome {{ this.$auth.user.firstName }} {{ this.$auth.user.lastName }}</span>
        <ul class="my-1 breadcrumb breadcrumb-separatorless fw-bold fs-7" v-else>
          <!--begin::Item-->
          <li class="text-white opacity-75 breadcrumb-item">
            <nuxt-link to="/" class="text-white text-hover-primary">Home</nuxt-link>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li class="breadcrumb-item">
            <span class="bg-white opacity-75 bullet w-5px h-2px"></span>
          </li>
          <!--end::Item-->
          <!--begin::Item-->
          <li class="text-white opacity-75 breadcrumb-item" v-if-else="$nuxt.$route.name != 'home'">{{ $nuxt.$route.name.charAt(0).toUpperCase() + $nuxt.$route.name.slice(1) }}</li>
          <!--end::Item-->
        </ul>
        <!--end::Breadcrumb-->
      </div>
    </div>
    <!--end::Container-->
  </div>
</template>
