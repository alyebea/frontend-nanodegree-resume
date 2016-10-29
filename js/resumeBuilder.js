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

//function to display bio code
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    bio.contacts.forEach(function(contact){

        var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);
        $("#topContacts, #footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", contact.email);
        $("#topContacts, #footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", contact.github);
        $("#topContacts, #footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", contact.twitter);
        $("#topContacts, #footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", contact.location);
        $("#topContacts, #footerContacts").append(formattedLocation);
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

//function to display work code
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

        var formattedLocation = HTMLworkLocation.replace
            ("%data%", job.location);
        var formattedDates = HTMLworkDates.replace
            ("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace
            ("%data%", job.description);

        $(".work-entry:last").append(
            formattedLocation, formattedDates, formattedDescription);
    })
};



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

//function to display projects code
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



//Education section below

var education = {
    "schools": [
    {
        "name": "The City College of New York, Macaulay Honors College",
        "location": "New York, NY",
        "degree": "BFA",
        "major": "Film & Video",
        "dates": "August 2006 - May 2010"
    },
    {
        "name": "Duke University",
        "location": "Durham, NC",
        "degree": "MA",
        "major": "Graduate Liberal Studies",
        "dates": "August 2012 - May 2015"
    }],

    "onlineCourses": [
    {
        "title":"Front-end Web Developer Nanodegree",
        "school": "Udacity.com",
        "dates": "August 2016 - November 2016",
        "url": "https://www.udacity.com/"
    },
    {   "title":"Various Web and UX Design Courses",
        "school": "Lynda.com",
        "dates": "September 2014 - present",
        "url": "https://www.lynda.com/"
    }]
};

education.display = function() {

    education.schools.forEach(function(school) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolName = formattedName + formattedDegree;

        $(".education-entry:last").append(formattedSchoolName);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
        $(".education-entry:last").append(formattedMajor);

    });

    if (education.onlineCourses.length > 0) {

        $(".education-entry:last").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineName = formattedOnlineTitle + formattedOnlineSchool;

            $(".education-entry:last").append(formattedOnlineName);

            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            $(".education-entry:last").append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
            $(".education-entry:last").append(formattedOnlineURL);
        });
    }
};

//display functions
bio.display();
work.display();
projects.display();
education.display();


//Interactive map and internationalize button

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);







