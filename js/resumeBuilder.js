/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Alye Carlevaro",
    "role": "Front-End Web Developer",
    "contacts": [{
        "mobile": "845-596-2144",
        "email": "abcarlevaro@gmail.com",
        "github": "alyebea",
        "twitter": "@alyebea",
        "location": "Greater New York City Area"
    }],
    "welcomeMessage": "Welcome to my resume!",
    "skills": ["HTML","CSS","Javacript","Illustrator","Video Editing"],
    "biopic": "images/Headshot2.jpg"
};

bio.display = function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        bio.contacts.forEach(function(contact){

            var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);
            $("#topContacts").append(formattedMobile);
            var formattedEmail = HTMLemail.replace("%data%", contact.email);
            $("#topContacts").append(formattedEmail);
            var formattedGithub = HTMLgithub.replace("%data%", contact.github);
            $("#topContacts").append(formattedGithub);
            var formattedTwitter = HTMLtwitter.replace("%data%", contact.twitter);
            $("#topContacts").append(formattedTwitter);
            var formattedLocation = HTMLlocation.replace("%data%", contact.location);
            $("#topContacts").append(formattedLocation);
        })

        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcome);
};

bio.display();
