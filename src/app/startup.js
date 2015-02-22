define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {

    // Components can be packaged as AMD modules, such as the following:
    ko.components.register('nav-bar', {require: 'components/nav-bar/nav-bar'});
    ko.components.register('home-page', {require: 'components/home-page/home'});

    // ... or for template-only components, you can just point to a .html file directly:

    ko.components.register('modal', {require: 'components/modal/modal'});
    ko.components.register('services-page', {require: 'components/services-page/services-page'});
    ko.components.register('gallery-page', {require: 'components/gallery-page/gallery-page'});
    ko.components.register('contact-page', {require: 'components/contact-page/contact-page'});
    ko.components.register('bottom-footer', {require: 'components/footer/footer'});

    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    ko.applyBindings({route: router.currentRoute});
});
