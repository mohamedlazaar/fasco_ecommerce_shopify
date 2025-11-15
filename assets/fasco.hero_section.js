document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(SplitText);
    let tl = gsap.timeline();
    const images = gsap.utils.toArray(' #section_{{section.id}} .item img');
    const highlight = document.querySelector(' #section_{{section.id}} .item_2_content')
    console.log('highlight', highlight)

    let mySplitHighlight = new SplitText(highlight, {type:'lines'})
    console.log("mysplithighlight", mySplitHighlight)
    // text Animation
    tl.from(mySplitHighlight.lines, {opacity: 0, y: 50, stagger: 0.05, ease: "back.out(1.7)", duration: 2}, 1.2)

    //  images Animation
    images.forEach((image, i) => {
        tl.from(image, { opacity: 0, x: "100%", ease: "back.out(1.7)", duration:1 }, i * 0.4 )
    });
});