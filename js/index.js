const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content
let codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let navi = document.getElementsByTagName('a');
navi[0].textContent = siteContent["nav"]["nav-item-1"];
navi[1].textContent = siteContent["nav"]["nav-item-2"];
navi[2].textContent = siteContent["nav"]["nav-item-3"];
navi[3].textContent = siteContent["nav"]["nav-item-4"];
navi[4].textContent = siteContent["nav"]["nav-item-5"];
navi[5].textContent = siteContent["nav"]["nav-item-6"];

let domIs = document.querySelector('.cta-text h1');
domIs.textContent = siteContent["cta"]["h1"];

let getStarted = document.querySelector('.cta-text button');
getStarted.textContent = siteContent["cta"]["button"];

let topTextHeader = document.querySelectorAll('.top-content h4');
topTextHeader[0].textContent = siteContent["main-content"]["features-h4"];
topTextHeader[1].textContent = siteContent["main-content"]["about-h4"];

let topTextBody = document.querySelectorAll('.top-content p');
topTextBody[0].textContent = siteContent["main-content"]["features-content"];
topTextBody[1].textContent = siteContent["main-content"]["about-content"];

let bottomTextHeader = document.querySelectorAll('.bottom-content h4');
bottomTextHeader[0].textContent = siteContent["main-content"]["services-h4"]
bottomTextHeader[1].textContent = siteContent["main-content"]["product-h4"];
bottomTextHeader[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomTextBody = document.querySelectorAll('.bottom-content p');
bottomTextBody[0].textContent = siteContent["main-content"]["services-content"];
bottomTextBody[1].textContent = siteContent["main-content"]["product-content"];
bottomTextBody[2].textContent = siteContent["main-content"]["vision-content"];

let contactUsHeader = document.querySelector('.contact h4');
contactUsHeader.textContent = siteContent["contact"]["contact-h4"];

let contactUsParagraph = document.querySelectorAll('.contact p');
contactUsParagraph[0].textContent = siteContent["contact"]["address"];
contactUsParagraph[1].textContent = siteContent["contact"]["phone"];
contactUsParagraph[2].textContent = siteContent["contact"]["email"];

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent["footer"]["copyright"];


