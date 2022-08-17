// SLIDE

const imgs = document.querySelector(".home-slides");
const img = document.querySelectorAll(".home-slides li");

let idx = 0;

function carrosel(){
    idx++;

    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 65}vw)`;
}

setInterval(carrosel, 4000);

// Contatos Modal

const btnMenu = document.querySelector(".menu-aluno-area")
const modal = document.querySelector(".modal")
const navMenu = document.querySelector(".menu")
btnMenu.addEventListener("click", () => {
  modal.classList.toggle("modal-toggle")
  navMenu.classList.toggle("menu-toggle")

})


const $cards = document.querySelectorAll(".js-card");
const $menu = document.querySelector(".js-menu");
const sectionToggleClass = "js-section-toggle";
const $menuToggles = $menu.querySelectorAll(`.${sectionToggleClass}`);

$menu.addEventListener("click", (e) => {
  if (e.target.classList.contains(sectionToggleClass)) {
    activateCard(e.target.parentElement);
    markAsActiveMenuItem(e.target);
  }
});

function activateCard(el) {
  const socialnetwork = el.dataset.socialNetwork;

  $cards.forEach(($card) => {
    $card.classList.remove("is-active");

    if ($card.classList.value.includes(socialnetwork)) {
      $card.classList.add("is-active");
    }
  });
}

function markAsActiveMenuItem(el) {
  $menuToggles.forEach(($item) => {
    $item.classList.remove("is-active");
  });

  el.classList.add("is-active");
}
