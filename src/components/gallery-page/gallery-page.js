define(['knockout', 'text!./gallery-page.html'], function (ko, templateMarkup) {

    function GalleryPage(params) {

        this.images = ko.observableArray();
        for (var i = 0; i < 48; i++) {
            this.images.push({index: i, src: 'images/gallery/' + (i + 1) + '.jpg'});
        }

    }

    GalleryPage.prototype.isActive = function(index){
        return index === 0 ? 'item active': 'item'
    };

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    GalleryPage.prototype.dispose = function () {
    };

    return {viewModel: GalleryPage, template: templateMarkup};

});
