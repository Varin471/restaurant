// https://www.randomlists.com/random-names

var ceo = {
    name: "Vincent",
    lastname: "Gaines",
    fullname: function() {
        return this.name + " " + this.lastname
    },
    Administrative_position: "Administrative position : ",
    jobplacement: "founder of the The restaurant",
    age: 23,
    man: true,
    hotmail: "Vincentoffcial@qw.volestee"
};


// document.getElementById('df').innerHTML = ceo.fullname();

document.querySelector('#wceo1').innerHTML = "MR   " + ceo.fullname() + ".";
document.querySelector('#wceo2').innerHTML = ceo.Administrative_position + ceo.jobplacement;