<template>
<div id="kt_content_container" class="d-flex flex-column-fluid align-items-start container-xxl">
   <!--begin::Post-->
		  <div class="content flex-row-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="flex-wrap mb-5 d-flex flex-stack pb-7">
          <!--begin::Title-->
          <div class="flex-wrap my-1 d-flex align-items-center">
            <h3 class="my-1 text-white fw-bolder me-5">List Indigo Hub & Indigo Space</h3>
            <!--begin::Search-->
            <div class="my-1 d-flex align-items-center position-relative">
              <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
              <span class="svg-icon svg-icon-3 position-absolute ms-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                  <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path>
                </svg>
              </span>
              <!--end::Svg Icon-->
              <input type="text" id="kt_filter_search" class="form-control form-control-sm border-body bg-body w-150px ps-10" placeholder="Search">
            </div>
            <!--end::Search-->
          </div>
          <!--end::Title-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Row-->
        <div class="row g-6 g-xl-9">
          <!--begin::Col-->
          <div class="col-md-6 col-xl-3" v-for="place in places.data" :key="place.id">
            <!--begin::Card-->
            <a href="" class="card border-hover-primary">
              <!--begin::Card header-->
              <img src="http://checkin.test/admin/assets/media/place/indigo.jpeg" class="m-5 rounded">
              <!--end:: Card header-->
              <!--begin:: Card body-->
              <div class="card-body">
                <!--begin::Name-->
                <div class="fs-3 fw-bolder text-dark">{{ place.name }}</div>
                <!--end::Name-->
                <!--begin::Description-->
                <p class="mt-1 text-gray-400 fw-bold fs-5 mb-7">Capacity {{ place.capacity }} Seat</p>
                <p class="mb-10 text-black">Selama masa pandemi COVID 19 kapasitas ruangan hanya dapat diisi maksimal 50%, pengunjung diwajibkan menerapkan protokol kesehatan</p>
                <!--end::Description-->
                <!--begin::Opration-->
                <div class="">
                    <span class="text-black">Open</span>
                    <span class="py-3 mpx-4 badge badge-light-success fw-bolder me-auto">09.00</span>

                    <span class="text-black">Close</span>
                    <span class="px-4 py-3 badge badge-light-danger fw-bolder me-auto">17.00</span>
                </div>
                <!--end::Opration-->
                <div class="mt-5 border-gray-300 separator separator-dashed mb-9"></div>
                <a href="#" class="btn btn-sm btn-danger me-2 ">Visit {{ place.name }}</a>
              </div>
              <!--end:: Card body-->
            </a>
            <!--end::Card-->
          </div>
          <!--end::Col-->
        </div>
        <!--end::Row-->
        <!--begin::Pagination-->
        <div class="flex-wrap pt-10 d-flex flex-stack">
          <div class="text-gray-700 fs-6 fw-bold">Showing 1 to 10 of 50 entries</div>
          <!--begin::Pages-->
          <ul class="pagination">
            <li class="page-item previous">
              <a href="#" class="page-link">
                <i class="previous"></i>
              </a>
            </li>
            <li class="page-item active">
              <a href="#" class="page-link">1</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">2</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">3</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">4</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">5</a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link">6</a>
            </li>
            <li class="page-item next">
              <a href="#" class="page-link">
                <i class="next"></i>
              </a>
            </li>
          </ul>
          <!--end::Pages-->
        </div>
        <!--end::Pagination-->
      </div>
    <!--end::Post-->
  </div>
</template>
<script>
export default {
  layout : 'app',
  auth: true,
  data() {
    return {
      places: []
    }
  },
  async fetch() {
    this.places = await fetch(
      'http://localhost:3000/api/v1/place'
    ).then(res => res.json())
  }
}
</script>
