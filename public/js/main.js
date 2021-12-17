window.onload = (e) => {
  let platform = navigator.userAgent;
  console.log(platform);
  let date = new Date("May 13, 2022 00:00:00").getTime();
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

  // Nav
  let items = document.getElementsByClassName("menu_item");
  Array.from(items).forEach((item) => {
    item.addEventListener("click", (e) => {
      Array.from(items).forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });

  // Mobile Nav
  let mitems = document.getElementsByClassName("m_menu_item");
  Array.from(mitems).forEach((item) => {
    item.addEventListener("click", (e) => {
      toggleMenu(false);
      Array.from(mitems).forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.onscroll = (e) => {
  let scrollToTop = document.getElementById("scrollToTop");
  let con = document.getElementById("m_nav_header");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    con.style.visibility = "visible";
    scrollToTop.style.opacity = 1;
    scrollToTop.style.transform = "scale(1)";
  } else {
    con.style.visibility = "hidden";
    scrollToTop.style.opacity = 0;
    scrollToTop.style.transform = "scale(0)";
  }
};

function toggleMenu(show) {
  let nav = document.getElementById("m_nav_menu");
  let con = document.getElementById("m_nav_header");
  let items = document.getElementsByClassName("m_menu_item");
  let itemsCon = document.getElementById("m_nav_itemCon");

  if (show) {
    document.body.style.overflow = "hidden";
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
