$("#foglia").click(function() {
$("#particles-js").fadeIn();
});

particlesJS("particles-js", {
   particles: {
      number: {
         value: 40,
         density: { enable: true, value_area: 415.6863397155046 }
      },
      color: { value: "#ffffff" },
      shape: {
         type: "polygon",
         stroke: { width: 0.5, color: "#165e05" },
         polygon: { nb_sides: 6 },
         image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: {
         value: 0.323294231104978,
         random: true,
         anim: { enable: false, speed: 3, opacity_min: 0.1, sync: false }
      },
      size: {
         value: 10.313726794310092,
         random: true,
         anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
         enable: true,
         distance: 200,
         color: "#a7a7a7",
         opacity: 0.27435298421223303,
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
            rotateX: 4821.961540699854,
            rotateY: 4988.236076586055
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
