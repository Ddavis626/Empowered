//const sectionOne = document.querySelector("#about");
const sections = document.querySelectorAll(".fade");
const faders = document.querySelector(".fade-in");
const options ={
  root: null,
  threshold: 0,
  rootMargin: "-150px"
}

const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      return;
    }
    console.log(entry.target)
    entry.target.classList.toggle("fadeInLeft");
    observer.unobserve(entry.target)
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
})

const appearOptions = {} 
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      return
    }else{
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  })
}, appearOptions);
 
faders.forEach(faders => {
  
})