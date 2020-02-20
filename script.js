$("#foglia").click(function() {
$("#particles-js").fadeIn();
});

particlesJS("particles-js", {
   particles: {
      number: {
         value: 40,
         density: { enable: true, value_area: 700.6863397155046 }
      },
      color: { value: "#ffffff" },
      shape: {
         type: "polygon",
         stroke: { width: 0.1, color: "#165e05" },
         polygon: { nb_sides: 6},
         image: { src: "https://image.flaticon.com/icons/svg/464/464140.svg", width: 80, height: 80}
      },
      opacity: {
         value: 0.223294231104978,
         random: true,
         anim: { enable: true, speed:0.5, opacity_min: 0.2, sync: false }
      },
      size: {
         value: 22.313726794310092,
         random: true,
         anim: { enable: true, speed: 4, size_min: 15, sync: false }
      },
      line_linked: {
         enable: true,
         distance: 150,
         color: "#ffffff",
         opacity: 0.57435298421223303,
         width: 1
      },
      move: {
         enable: true,
         speed: 3,
         direction: "none",
         random: true,
         straight: false,
         out_mode: "bounce",
         bounce: false,
         attract: {
            enable: true,
            rotateX: 410.961540699854,
            rotateY: 490.236076586055
         }
      }
   },
    interactivity: {
      detect_on: "canvas",
      events: {
         onhover: { enable: false, mode: "repulse" },
         onclick: { enable: true, mode: "push" },
         resize: true
      },
      modes: {
         grab: { distance: 400, line_linked: { opacity: 1 } },
         bubble: {
            distance: 400,
            size: 40.00000000000001,
            duration: 2,
            opacity: 8,
            speed: 3
         },
         repulse: { distance: 200, duration: 0.4 },
         push: { particles_nb: 4 },
         remove: { particles_nb: 2 }
      }
   },
   retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function() {
   stats.begin();
   stats.end();
   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
   }
   requestAnimationFrame(update);
};
requestAnimationFrame(update);


