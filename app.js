//-----translations script----------------

import translations from './translations.js';

const langToggle = document.getElementById('lang-toggle');
const langToggleMobile = document.getElementById('lang-toggle-mobile');

function setInitialLanguage() {
  const savedLang = localStorage.getItem('lang') || 'geo'; 
  if (savedLang === 'en') {
    document.body.classList.add('en');
  } else {
    document.body.classList.remove('en'); 
  }
  updateText(savedLang);
  updateButtonTextforLang();
}

function updateText(lang) {
  const menu0 = document.getElementById('menu0');
  if (menu0) menu0.innerText = translations[lang].menu0;

  const menu1 = document.getElementById('menu1');
  if (menu1) menu1.innerText = translations[lang].menu1;

  const menu2 = document.getElementById('menu2');
  if (menu2) menu2.innerText = translations[lang].menu2;

  const menu3 = document.getElementById('menu3');
  if (menu3) menu3.innerText = translations[lang].menu3;

  const welcome = document.getElementById('welcome');
  if (welcome) welcome.innerText = translations[lang].welcome;

  const description = document.getElementById('description');
  if (description) description.innerText = translations[lang].description;

  const coverp2 = document.getElementById('coverp2');
  if (coverp2) coverp2.innerText = translations[lang].coverp2;

  const aboutUsH2 = document.getElementById('home_about_us_h2');
  if (aboutUsH2) aboutUsH2.innerHTML = translations[lang].home_about_us_h2;

  const aboutUsP = document.getElementById('home_about_us_p');
  if (aboutUsP) aboutUsP.innerText = translations[lang].home_about_us_p;

  const aboutCth1 = document.getElementById('home_about_cth1');
  if (aboutCth1) aboutCth1.innerText = translations[lang].home_about_cth1;

  const aboutCtp1 = document.getElementById('home_about_ctp1');
  if (aboutCtp1) aboutCtp1.innerText = translations[lang].home_about_ctp1;

  const productsCth1 = document.getElementById('home_products_cth1');
  if (productsCth1) productsCth1.innerText = translations[lang].home_products_cth1;

  const productsCtp1 = document.getElementById('home_products_ctp1');
  if (productsCtp1) productsCtp1.innerText = translations[lang].home_products_ctp1;

  const solutionsCth1 = document.getElementById('home_solutions_cth1');
  if (solutionsCth1) solutionsCth1.innerText = translations[lang].home_solutions_cth1;

  const servicesSoftwareDevH2 = document.getElementById('services_software_dev_h2');
  if (servicesSoftwareDevH2) servicesSoftwareDevH2.innerText = translations[lang].services_software_dev_h2;

  const servicesSoftwareDevLi1 = document.getElementById('services_software_dev_li1');
  if (servicesSoftwareDevLi1) servicesSoftwareDevLi1.innerHTML = translations[lang].services_software_dev_li1;

  const servicesSoftwareDevLi2 = document.getElementById('services_software_dev_li2');
  if (servicesSoftwareDevLi2) servicesSoftwareDevLi2.innerHTML = translations[lang].services_software_dev_li2;

  const servicesSoftwareDevP = document.getElementById('services_software_dev_p');
  if (servicesSoftwareDevP) servicesSoftwareDevP.innerText = translations[lang].services_software_dev_p;


  const servicesClaudSolH2 = document.getElementById('services_claud_sol_h2');
  if (servicesClaudSolH2) servicesClaudSolH2.innerText = translations[lang].services_claud_sol_h2;

  const servicesClaudSolLi1 = document.getElementById('services_claud_sol_li1');
  if (servicesClaudSolLi1) servicesClaudSolLi1.innerHTML = translations[lang].services_claud_sol_li1;

  const servicesClaudSolLi2 = document.getElementById('services_claud_sol_li2');
  if (servicesClaudSolLi2) servicesClaudSolLi2.innerHTML = translations[lang].services_claud_sol_li2;

  const servicesClaudSolLi3 = document.getElementById('services_claud_sol_li3');
  if (servicesClaudSolLi3) servicesClaudSolLi3.innerHTML = translations[lang].services_claud_sol_li3;

  const servicesClaudSolP = document.getElementById('services_claud_sol_p');
  if (servicesClaudSolP) servicesClaudSolP.innerText = translations[lang].services_claud_sol_p;

  const serviceNetworkInfraH2 = document.getElementById('services_network_infra_h2');
  if (serviceNetworkInfraH2) serviceNetworkInfraH2.innerText = translations[lang].services_network_infra_h2;

  const serviceNetworkInfraLi1 = document.getElementById('services_network_infra_li1');
  if (serviceNetworkInfraLi1) serviceNetworkInfraLi1.innerHTML = translations[lang].services_network_infra_li1;

  const serviceNetworkInfraLi2 = document.getElementById('services_network_infra_li2');
  if (serviceNetworkInfraLi2) serviceNetworkInfraLi2.innerHTML = translations[lang].services_network_infra_li2;

  const serviceNetworkInfraP = document.getElementById('services_network_infra_p');
  if (serviceNetworkInfraP) serviceNetworkInfraP.innerText = translations[lang].services_network_infra_p;

  const serviceItConsultingH2 = document.getElementById('services_it_consulting_h2');
  if (serviceItConsultingH2) serviceItConsultingH2.innerText = translations[lang].services_it_consulting_h2;

  const serviceItConsultingLi1 = document.getElementById('services_it_consulting_li1');
  if (serviceItConsultingLi1) serviceItConsultingLi1.innerHTML = translations[lang].services_it_consulting_li1;

  const serviceItConsultingLi2 = document.getElementById('services_it_consulting_li2');
  if (serviceItConsultingLi2) serviceItConsultingLi2.innerHTML = translations[lang].services_it_consulting_li2;

  const serviceItConsultingP = document.getElementById('services_it_consulting_p');
  if (serviceItConsultingP) serviceItConsultingP.innerText = translations[lang].services_it_consulting_p;

  const servicesItSystemsIntegrH2 = document.getElementById('services_it_systems_integr_h2');
  if (servicesItSystemsIntegrH2) servicesItSystemsIntegrH2.innerText = translations[lang].services_it_systems_integr_h2;

  const servicesItSystemsIntegrLi1 = document.getElementById('services_it_systems_integr_li1');
  if (servicesItSystemsIntegrLi1) servicesItSystemsIntegrLi1.innerHTML = translations[lang].services_it_systems_integr_li1;

  const servicesItSystemsIntegrLi2 = document.getElementById('services_it_systems_integr_li2');
  if (servicesItSystemsIntegrLi2) servicesItSystemsIntegrLi2.innerHTML = translations[lang].services_it_systems_integr_li2;

  const servicesItSystemsIntegrP = document.getElementById('services_it_systems_integr_p');
  if (servicesItSystemsIntegrP) servicesItSystemsIntegrP.innerText = translations[lang].services_it_systems_integr_p;

  const servicesCctvH2 = document.getElementById('services_cctv_h2');
  if (servicesCctvH2) servicesCctvH2.innerText = translations[lang].services_cctv_h2;
  
  const servicesCctvLi1 = document.getElementById('services_cctv_li1');
  if (servicesCctvLi1) servicesCctvLi1.innerHTML = translations[lang].services_cctv_li1;

  const servicesCctvP = document.getElementById('services_cctv_p');
  if (servicesCctvP) servicesCctvP.innerText = translations[lang].services_cctv_p;

  const aboutWeAreH1 = document.getElementById('about_we_are_h1');
  if (aboutWeAreH1) aboutWeAreH1.innerText = translations[lang].about_we_are_h1;

  const aboutWeAreP = document.getElementById('about_we_are_p');
  if (aboutWeAreP) aboutWeAreP.innerText = translations[lang].about_we_are_p;

  const aboutMissionH2 = document.getElementById('about_mission_h2');
  if (aboutMissionH2) aboutMissionH2.innerText = translations[lang].about_mission_h2;
  
  const aboutMissionP = document.getElementById('about_mission_p');
  if (aboutMissionP) aboutMissionP.innerText = translations[lang].about_mission_p;

  const aboutVisionH2 = document.getElementById('about_vision_h2');
  if (aboutVisionH2) aboutVisionH2.innerText = translations[lang].about_vision_h2;

  const aboutVisionP = document.getElementById('about_vision_p');
  if (aboutVisionP) aboutVisionP.innerText = translations[lang].about_vision_p;

  const aboutWhyUsH2 = document.getElementById('about_why_us_h2');
  if (aboutWhyUsH2) aboutWhyUsH2.innerText = translations[lang].about_why_us_h2;

  const aboutWhyUsExperticeH3 = document.getElementById('about_why_us_expertise_h3');
  if (aboutWhyUsExperticeH3) aboutWhyUsExperticeH3.innerText = translations[lang].about_why_us_expertise_h3;

  const aboutWhyUsExperticeP = document.getElementById('about_why_us_expertise_p');
  if (aboutWhyUsExperticeP) aboutWhyUsExperticeP.innerText = translations[lang].about_why_us_expertise_p;

  const aboutWhyUsInnovationH3 = document.getElementById('about_why_us_innovation_h3');
  if (aboutWhyUsInnovationH3) aboutWhyUsInnovationH3.innerText = translations[lang].about_why_us_innovation_h3;

  const aboutWhyUsInnovationP = document.getElementById('about_why_us_innovation_p');
  if (aboutWhyUsInnovationP) aboutWhyUsInnovationP.innerText = translations[lang].about_why_us_innovation_p;

  const aboutWhyUsCustomerFocusH3 = document.getElementById('about_why_us_customer_focus_h3');
  if (aboutWhyUsCustomerFocusH3) aboutWhyUsCustomerFocusH3.innerText = translations[lang].about_why_us_customer_focus_h3;

  const aboutWhyUsCustomerFocusP = document.getElementById('about_why_us_customer_focus_p');
  if (aboutWhyUsCustomerFocusP) aboutWhyUsCustomerFocusP.innerText = translations[lang].about_why_us_customer_focus_p;

  const contactTouchH2 = document.getElementById('contact_touch_h2');
  if (contactTouchH2) contactTouchH2.innerText = translations[lang].contact_touch_h2;

  const contactTouchP = document.getElementById('contact_touch_p');
  if (contactTouchP) contactTouchP.innerText = translations[lang].contact_touch_p;


}


function updateButtonTextforLang() {
  if (document.body.classList.contains('en')) {
    langToggle.textContent = 'Geo'; 
    langToggleMobile.textContent = 'Geo'; 
  } else {
    langToggle.textContent = 'Eng';
    langToggleMobile.textContent = 'Eng'; 
  }
}

langToggle.addEventListener('click', () => {
  const isEnglish = document.body.classList.toggle('en'); 
  const newLang = isEnglish ? 'en' : 'geo';
  updateText(newLang);
  updateButtonTextforLang();
  localStorage.setItem('lang', newLang); 
});

langToggleMobile.addEventListener('click', () => {
  const isEnglish = document.body.classList.toggle('en'); 
  const newLang = isEnglish ? 'en' : 'geo';
  updateText(newLang);
  updateButtonTextforLang();
  localStorage.setItem('lang', newLang); 
});

setInitialLanguage();


//-------theme script-----------------

const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('dark', savedTheme === 'dark');
  document.body.classList.toggle('light-mode-bg', savedTheme === 'light');
  updateButtonText();
}

function updateButtonText() {
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
  themeToggleMobile.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  document.body.classList.toggle('light-mode-bg', !isDark);
  const newTheme = isDark ? 'dark' : 'light';
  updateButtonText();
  localStorage.setItem('theme', newTheme);
});

themeToggleMobile.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  document.body.classList.toggle('light-mode-bg', !isDark);
  const newTheme = isDark ? 'dark' : 'light';
  updateButtonText();
  localStorage.setItem('theme', newTheme);
})

setInitialTheme();


//-------carousell script-----------------
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto', 
  spaceBetween: 10,       
  loop: true,            
  initialSlide: 0,      
  autoplay: {
    delay: 2000,          
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;
  const menuItems = {
    "/": "menu0",
    "/services.html": "menu1",
    "/about.html": "menu2",
    "/contact.html": "menu3"
  };

  if (menuItems[currentPath]) {
    document.getElementById(menuItems[currentPath]).classList.add('active');
  }
});


document.getElementById('menu-toggle').addEventListener('click', function() {
  const mobileMenu = document.querySelector('.nav-list-mobile');
  mobileMenu.classList.toggle('hidden'); 
});

document.addEventListener('click', function(event) {
  const mobileMenu = document.querySelector('.nav-list-mobile');
  const menuToggle = document.getElementById('menu-toggle');
  
  if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    mobileMenu.classList.add('hidden'); 
  }
});


