export default (context, inject) => {
    const toastNotification = (message, type) => {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toastr-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };

        if (type == "success") {
            toastr.success(message);
        } else if (type == "error") {
            toastr.error(message);
        } else {
            toastr.info(message);
        }
    }

    inject('toastNotification', toastNotification)
    context.$toastNotification = toastNotification

    const swalNotification = (message, type) => {
        if (type == "success") {
            Swal.fire({
                html: `
                    <div>
                        <h1 class="text-dark mb-3 mt-6">Server Info</h1>
                        <p>${message}</p>
                    </div>
                  `,
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                    confirmButton: "btn btn-app-primary"
                }
            });
        } else if (type == "error") {
            Swal.fire({
                html: `
                    <div>
                        <h1 class="text-dark mb-3 mt-6">Server Error</h1>
                        <p>${message}</p>
                    </div>
                  `,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                    confirmButton: "btn btn-app-primary"
                }
            });
        } else {
            Swal.fire({
                html: `
                    <div>
                        <h1 class="text-dark mb-3 mt-6">Server Info</h1>
                        <p>${message}</p>
                    </div>
                  `,
                icon: "info",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                    confirmButton: "btn btn-app-primary"
                }
            });
        }
    }

    inject('swalNotification', swalNotification)
    context.$swalNotification = swalNotification
}