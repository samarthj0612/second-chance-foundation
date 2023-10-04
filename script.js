var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main1",
    start: "center center",
    scrub: 2,
    pin: true
  },
});

tl
  .to(
    "#fixmain .band div",
    {
      width: "0%",
      duration: 2,
    },
    "a"
  )
  .to(
    "#fixmain #content .lefttext",
    {
      marginLeft: "0",
    },
    "a"
  )
  .to(
    "#fixmain #content #circle",
    {
      x: "-150px",
    },
    "b"
  )
  .to(
    "#fixmain #content #circle img",
    {
      x: "180px",
    },
    "b"
  );