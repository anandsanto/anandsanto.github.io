// Empty JS for your own code to be here

let script = 'https://script.google.com/macros/s/AKfycby5bX31JwGbPzhumA7atIgDdQwwD-qoTw3DXVcnL8tVmej_t8vm/exec';

let headervue = new Vue({
    el: '#header',
    data: {
        name: "First Last",
        desig: "Desig",
        affiliatedOrg: "Organisation",
        logourl: "logo_URL",
        facebook: false,
        linkedin: false,
        email: false,
        github: false,
        location: false,
    }
});

let aboutmevue = new Vue({
    el: '#aboutmedetails',
    data: {
        aboutme: "",
    }
});

function loadProfile(){
    axios.get(script+'?type=profile',{crossdomain: true}).then(function (response) {
              // handle success
        let profile = response.data;
        headervue.name = profile.name;
        headervue.desig = profile.affiliation.desig;
        headervue.affiliatedOrg = profile.affiliation.name;
        headervue.logourl = profile.affiliation.logo;
        headervue.facebook = profile.social.facebook;
        headervue.linkedin = profile.social.linkedin;
        headervue.github = profile.social.github;
        headervue.email = "mailto: "+profile.social.mail;
        aboutmevue.aboutme = profile.aboutme;
    });
}

loadProfile();
