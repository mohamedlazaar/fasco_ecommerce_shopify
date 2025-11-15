document.addEventListener('DOMContentLoaded', ()=>{
    const header =   document.querySelector('header')
    tl= gsap.timeline()
    tl.fromTo(header ,{y:'-100%', opacity:0}, {y:'0%', opacity:1, ease:'power1.out', duration: 1.2})
})