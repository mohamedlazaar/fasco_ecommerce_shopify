document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('header')
    tl= gsap.timeline()
    tl.from(header ,{x:'-100%', opacity:0, ease:'power1.out', duration: 1.2})
})