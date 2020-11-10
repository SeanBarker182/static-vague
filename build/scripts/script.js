gsap.from(".cta-item",{opacity:0,y:-50,duration:.5,stagger:.6}),gsap.from(".services-card",{y:55,duration:1,delay:.85}),ScrollTrigger.matchMedia({"(min-width: 1027px)":function(){gsap.from(".services-server-bg",{scrollTrigger:{trigger:".services-server-img",start:"top center"},y:"-75px",x:"-50px",duration:1.5})},"(max-width: 1026px)":function(){gsap.from(".services-server-bg",{scrollTrigger:{trigger:".services-server-img",start:"top center"},y:"-50px",x:"-35px",duration:1.5})},all:function(){gsap.from(".about-text-container",{scrollTrigger:{trigger:".about-section-bg",start:"top bottom"},x:500,opacity:0,duration:1.5})}});const hamburgerBtn=document.querySelector(".hamburger-btn-container"),navItems=document.querySelector(".nav-items"),root=document.querySelector("html");let mobileMenuOpen=!1;function toggleMobileMenu(){mobileMenuOpen?(hamburgerBtn.classList.remove("mobile-menu-open"),navItems.classList.remove("mobile-menu-open"),root.classList.remove("scroll-lock"),mobileMenuOpen=!1):(hamburgerBtn.classList.add("mobile-menu-open"),navItems.classList.add("mobile-menu-open"),root.classList.add("scroll-lock"),mobileMenuOpen=!0)}function smoothScroll(e,t){let n=document.querySelector(e).getBoundingClientRect().top,o=window.pageYOffset,r=null;requestAnimationFrame((function e(a){null===r&&(r=a);let c=a-r,s=(i=c,l=o,m=n,(i/=t/2)<1?m/2*i*i*i+l:m/2*((i-=2)*i*i+2)+l);var i,l,m;window.scrollTo(0,s),c<t&&requestAnimationFrame(e)}))}hamburgerBtn.addEventListener("click",()=>{toggleMobileMenu()});const learnMore=document.getElementById("learnMoreBtn"),contactUs=document.getElementById("contactUsBtn"),navServices=document.getElementById("navServices"),navAbout=document.getElementById("navAbout"),navContact=document.getElementById("navContact");learnMore.addEventListener("click",()=>{smoothScroll(".about-section",1e3)}),contactUs.addEventListener("click",()=>{smoothScroll(".contact-form",1e3)}),navServices.addEventListener("click",e=>{e.preventDefault(),window.innerWidth<768&&toggleMobileMenu(),smoothScroll("#services",1e3)}),navAbout.addEventListener("click",e=>{e.preventDefault(),window.innerWidth<768&&toggleMobileMenu(),smoothScroll("#about",1e3)}),navContact.addEventListener("click",e=>{e.preventDefault(),window.innerWidth<768&&toggleMobileMenu(),smoothScroll("#contact",1e3)});const contactFormName=document.getElementById("form-name"),contactFormEmail=document.getElementById("form-email"),contactFormTextarea=document.getElementById("form-textarea"),contactForm=document.getElementById("contact-form"),spinner=document.getElementById("form-spinner"),message=document.getElementById("form-message");contactForm.addEventListener("submit",e=>{e.preventDefault(),spinner.classList.add("spinner-spinning"),spinner.classList.remove("spinner-off"),setInterval(()=>{contactFormName.value="",contactFormEmail.value="",contactFormTextarea.value="",spinner.classList.add("spinner-off"),spinner.classList.remove("spinner-spinning"),message.innerHTML="Thanks for your submission!"},2e3)});