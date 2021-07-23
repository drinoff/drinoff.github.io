const meBtn = document.getElementById("meBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactsBtn = document.getElementById("contactsBtn");
const meCards = document.getElementById("me");
const projectCards = document.getElementById("projects");
const contactsCards = document.getElementById("contacts");
const cardElement = document.getElementsByClassName("card");

projectsBtn.addEventListener("click", function () {
  if (projectCards.style.display !== "flex") {
    let dissapear = [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ];
    let appear = [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ];
    contactsCards.animate(dissapear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-out",
    });
    meCards.animate(dissapear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-out",
    });
    projectCards.animate(appear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-in",
    });
    setTimeout(function () {
      meCards.style.display = "none";
      contactsCards.style.display = "none";
      projectCards.style.display = "flex";
      projectCards.style.opacity = 1;
    }, 1000);
  }
});

meBtn.addEventListener("click", function () {
  if (meCards.style.display !== "flex") {
    let dissapear = [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ];
    let appear = [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ];
    contactsCards.animate(dissapear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-out",
    });
    projectCards.animate(dissapear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-in",
    });
    meCards.animate(appear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-out",
    });
    setTimeout(function () {
      projectCards.style.display = "none";
      contactsCards.style.display = "none";
      meCards.style.display = "flex";
      meCards.style.opacity = 1;
    }, 1000);
  }
});

contactsBtn.addEventListener("click", function () {
  if (contactsCards.style.display !== "flex") {
    let dissapear = [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ];
    let appear = [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ];

    projectCards.animate(dissapear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-in",
    });
    meCards.animate(dissapear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-out",
    });
    contactsCards.animate(appear, {
      duration: 500,
      fill: "forwards",
      easing: "ease-out",
    });
    setTimeout(function () {
      meCards.style.display = "none";
      projectCards.style.display = "none";
      contactsCards.style.display = "flex";
      contactsCards.style.opacity = 1;
    }, 1000);
  }
});
