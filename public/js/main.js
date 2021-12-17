let mobile = false;
window.onload = (e) => {
  let date = new Date("Jan 5, 2022 15:37:25").getTime();
  setInterval(() => {
    let now = new Date().getTime();
    let distance = date - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let daysCon = document.getElementById("days");
    let hoursCon = document.getElementById("hours");
    let minutesCon = document.getElementById("minutes");
    let secondsCon = document.getElementById("seconds");

    daysCon.innerHTML = days;
    hoursCon.innerHTML = hours;
    minutesCon.innerHTML = minutes;
    secondsCon.innerHTML = seconds;
  }, 1000);

  // let magic = new IntersectionObserver((entries) => {
  //   if (entries[0].intersectionRatio > 0) {
  //     entries[0].target.style.animation = "PopLeft  ease 250ms 0s";
  //     entries[0].target.style.opacity = "1";
  //   } else {
  //     entries[0].target.style.animation = "none ";
  //     entries[0].target.style.opacity = "0";
  //   }
  // });

  // let animElements = document.querySelectorAll(".anim");
  // animElements.forEach((e) => {
  //   magic.observe(e);
  // });

  if (window.outerWidth < 400) {
    mobile = true;
  } else {
    mobile = false;
  }

  let items = document.getElementsByClassName("menu_item");
  Array.from(items).forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(mobile);
      if (mobile) {
        toggleMenu(false);
      }

      Array.from(items).forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
};

window.onresize = (e) => {
  console.log(window.outerWidth);
  if (window.outerWidth < 400) {
    mobile = true;
  } else {
    mobile = false;
  }
  console.log("From Resize", mobile);
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.onscroll = (e) => {
  let scrollToTop = document.getElementById("scrollToTop");
  let con = document.getElementById("nav_header");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.opacity = 1;
    scrollToTop.style.transform = "scale(1)";
  } else {
    scrollToTop.style.opacity = 0;
    scrollToTop.style.transform = "scale(0)";
  }
};

document.onresize = (e) => {
  console.log(e);
};

function toggleMenu(show) {
  let nav = document.getElementById("nav_menu");
  let con = document.getElementById("nav_header");
  let items = document.getElementsByClassName("menu_item");
  let itemsCon = document.getElementById("nav_itemCon");

  if (show) {
    document.body.style.overflow = "hidden";
    // con.style.backgroundColor = "#3aafa9";
    con.style.height = "100vh";
    con.style.alignItems = "center";
    itemsCon.style.display = "flex";
    nav.href = "javascript:toggleMenu(false)";
    nav.innerHTML = "<img src='./asset/close.svg' alt='menu' />";
    Array.from(items).forEach((item) => {
      item.style.display = "block";
    });
  } else {
    document.body.style.overflow = "auto";
    con.style.alignItems = "unset";
    itemsCon.style.display = "none";
    con.style.height = "60px";
    nav.href = "javascript:toggleMenu(true)";
    nav.innerHTML = "<img src='./asset/menu.svg' alt='menu' />";
    Array.from(items).forEach((item) => {
      item.style.display = "none";
    });
  }
}
