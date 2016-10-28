/*
Javascript code for the frontend nanodegree resume.
 */


//Bio section below

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
    "skills": ["HTML","CSS","Javacript","Web Design","Video Editing"],
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

    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();


//Work section below

var work = {
    "jobs": [
    {
        "employer": "Music Conservatory of Westchester",
        "title": "Social Media and Web Manager",
        "location": "White Plains, NY",
        "dates": "October 2015 - present",
        "description": "Create, source and manage social media and website content."
    },
    {
        "employer": "Stephanie Berger Photography",
        "title": "Assistant",
        "location": "Piermont, NY",
        "dates": "September 2014 - May 2016",
        "description": "Assisted in video projects and managing new website."
    },
    {
        "employer": "Duke University Law Library",
        "title": "Digital Initivatives Intern",
        "location": "Durham, NC",
        "dates": "July 2012 - July 2014",
        "description": "Converted and organized archival material into digital formats."
    }]
};

work.display = function () {

    work.jobs.forEach(function(job){

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace
            ("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace
            ("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(
            formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace
            ("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace
            ("%data%", job.description);

        $(".work-entry:last").append(
            formattedDates, formattedDescription);
    })
};

work.display();


//Projects section below

var projects = {
    "projects": [
    {
        "title": "Finding Home: Journey of an Italian Immigrant",
        "dates": "September 2014 - May 2015",
        "description": "Interactive documentary e-book created as a final project for my Masters Degree.",
        "images": "images/findinghome.jpg"
    },
    {
        "title": "Music Conservatory of Westchester Website",
        "dates": "October 2015 - May 2016",
        "description": "Updated and improved the Music Conservatory website with better usability and visual appeal.",
        "images": "images/musicconservatory.jpg"
    },
    {
        "title": "Portfolio Website",
        "dates": "September 2016",
        "description": "Created visual portfolio site in fulfillment of Ucacity nanodegree.",
        "images": "images/portfolioproject.jpg"
    }]
};

projects.display = function() {

    projects.projects.forEach(function(projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.description);
        $(".project-entry:last").append(formattedDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.images);
        $(".project-entry:last").append(formattedImage);
    })
};

projects.display();
