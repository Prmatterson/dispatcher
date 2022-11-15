// Functions to Clear Modal Form Fields on Modal Exit
$("#add-repair-order-modal").on("hidden.bs.modal", function (e) {
    $(this).find("#add-ro")[0].reset();
    $("#add-repair-order-modal-error").html("");
});

$("#edit-repair-order-modal").on("hidden.bs.modal", function (e) {
    $(this).find("#edit-ro")[0].reset();
    $("#edit-repair-order-modal-error").html("");
});

$("#delete-repair-order-modal").on("hidden.bs.modal", function (e) {
    $(this).find("#delete-ro")[0].reset();
    $("#delete-repair-order-modal-error").html("");
});

$("#add-job-to-repair-order-modal").on("hidden.bs.modal", function (e) {
    $(this).find("#add-job")[0].reset();
    $("#add-job-to-repair-order-modal-error").html("");
});

$("#add-time-to-repair-order-modal").on("hidden.bs.modal", function (e) {
    $(this).find("#add-time")[0].reset();
    $("#add-time-to-repair-order-modal-error").html("");
});

$("#change-promise-time-of-repair-order-modal").on("hidden.bs.modal", function (e) {
    $(this).find("#change-time")[0].reset();
    $("#change-promise-time-of-repair-order-modal-error").html("");
});

$("#add-tech-modal").on("hidden.bs.modal", function (e) {
    $(this).find("#add-tech")[0].reset();
    $("#add-tech-modal-error").html("");
});
