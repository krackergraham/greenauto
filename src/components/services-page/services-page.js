define(['knockout', 'text!./services-page.html'], function (ko, templateMarkup) {

    function ServicesPage(params) {
        this.services = ko.observable([
            {
                header: "Mildew & Odor Removal",
                content: "Our steam cleaning and ozone treatment will remedy most cases of mildew and odors"
            },
            {
                header: "Decal Removal",
                content: "If you need us to remove that old clear bra, unwrap the race car or remove old signs and logos off of company vehicles, we can do that."
            },
            {
                header: "Exterior Detail",
                content: 'Hand wash and dry vehicle \n' +
                'Tires and wheels cleaned \n' +
                'Exterior glass treatment \n' +
                'Claybar contaminant removal process \n' +
                'Headlight and taillight polishing \n' +
                'Wiper blades cleaned \n' +
                'Exterior hand polish and wax \n' +
                '(additional charge for paint correction)'
            },
            {
                header: "Interior Detail",
                content: "Thorough vacuuming of interior \n" +
                "Air purged cleaning of crevice \n" +
                "Under and between seats and other hard to reach places \n" +
                "Dry-steam cleaning of fabrics, carpeting and floor mats \n" +
                "Clean door panels, pockets, dashboard, console, vents, kick panels and cup holders \n" +
                "Clean and condition leather \n" +
                "Clean interior and exterior glass \n" +
                "Clean trunk and door jambs"
            },
            {
                header: "Overspray Removal",
                content: "Several insurance companies and contractors hire us to remove overspray off of vehicles. This can be a very tedious and time consuming task. We have saved many autos from needing refinishing work."
            },
            {
                header: "Paint Correction",
                content: "Most vehicles require some form of paint correction. From single stage machine polishing and hand waxing, to our four stage polishing process. Multi-stage polishing with a variety of foam pads takes time. So stop by and we'll educate you on what service your vehicle requires to look its best."
            },
            {
                header: "Metal Polishing",
                content: "From acid burned aluminum wheels to nickel winged hood ornaments we polish and perfect all types of metal."
            },
            {
                header: "Pre-Sale Detailing",
                content: "It is obvious that a clean vehicle sells faster and at a higher price. Stop by and together we can determine what package is best for you and your auto."
            },
            {
                header: "Cilajet Paint Sealant",
                content: ""
            }
        ]);
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    ServicesPage.prototype.dispose = function () {
    };

    return {viewModel: ServicesPage, template: templateMarkup};

});
