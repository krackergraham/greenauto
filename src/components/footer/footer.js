define(['knockout', 'text!./footer.html'], function(ko, templateMarkup) {

  function Footer(params) {
    this.message = ko.observable('Hello from the footer component!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Footer.prototype.dispose = function() { };
  
  return { viewModel: Footer, template: templateMarkup };

});
