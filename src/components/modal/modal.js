define(['knockout', 'text!./modal.html'], function (ko, template) {

    function ModalViewModel(params) {

        this.name = ko.observable("");
        this.email = ko.observable("");
        this.phone = ko.observable("");
        this.vehicle = ko.observable("");
        this.comments = ko.observable("");
    }

    ModalViewModel.prototype.submitForm = function () {
        var data = {
            first_name: this.name(),
            email: this.email(),
            telephone: this.phone(),
            vehicle: this.vehicle(),
            comments: this.comments()
        };

        $.post('php/send_form_email.php', data, function (res, status) {
            if (status === 'success') {
                console.log('successfully hit email form')
            }

            $('#quoteModal').modal('hide')
        })
    };

    return {viewModel: ModalViewModel, template: template};
});
