(function () {

    "use strict";

    let SItotal = (document.getElementById('SItotal'));
    let CItotal = (document.getElementById('CItotal'));


    function SIcalculate() {
        let principle = (document.getElementById('SIprinciple'));
        let principleValue = principle.value;
        let rate = (document.getElementById('SIrate'));
        let rateValue = rate.value;
        let time = (document.getElementById('SItime'));
        let timeValue = time.value;
        let answer = ((principleValue * (1 + (rateValue * timeValue))));
        SItotal.innerText = answer;
    }

    function CIcalculate() {
        let principle = (document.getElementById('CIprinciple'));
        let principleValue = principle.value;
        let rate = (document.getElementById('CIrate'));
        let rateValue = rate.value;
        let time = (document.getElementById('CItime'));
        let timeValue = time.value;
        let compounds = (document.getElementById('CIcompoundstotal'));
        let compoundsValue = compounds.value;


        //1 can be changed to ntimes per year
        //formula doesn't work
        let answer = (principleValue * (Math.pow((1 + (rateValue / compoundsValue)), (timeValue * compoundsValue))));
        CItotal.innerText = answer;
    }

    SItotal.addEventListener('click', SIcalculate);
    CItotal.addEventListener('click', CIcalculate);

})();


