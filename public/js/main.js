$('#add-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#add-ro')[0].reset();
});

$('#edit-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#edit-ro')[0].reset();
});

$('#delete-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#delete-ro')[0].reset();
});

$('#add-job-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#add-job')[0].reset();
});

$('#add-time-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#add-time')[0].reset();
});

$('#change-time-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#change-time')[0].reset();
});

