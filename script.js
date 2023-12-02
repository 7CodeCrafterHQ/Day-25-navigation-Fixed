gsap.to("nav , #part2", {
    height: 7 + "vh",
    backgroundColor: "white",
    color:"black",
    scrollTrigger: {
        trigger: "nav",
        scroll: "#page1",
        start: "top -40%",
        end: "top -45%",
        scrub: 2
    }
})