document.addEventListener("DOMContentLoaded", () => {
  const initCarousel = (trackId, prevBtnId, nextBtnId) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);

    if (track) {
      const getScrollAmount = () => {
        const card = track.querySelector(".product_card");
        return card ? card.offsetWidth + 16 : 228;
      };

      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          track.scrollBy({
            left: getScrollAmount(), //use for right side scroll
            behavior: "smooth",
          });
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener("click", () => {
          track.scrollBy({
            left: -getScrollAmount(), //use - sign for left side scroll
            behavior: "smooth",
          });
        });
      }
    }
  };

  initCarousel("priceSlashTrack", "priceSlashPrev", "priceSlashNext");
  initCarousel("popularTrack", "popularPrev", "popularNext");
  initCarousel("buy2Track", "buy2Prev", "buy2Next");
  initCarousel("pickOfDayTrack", "pickOfDayPrev", "pickOfDayNext");
  initCarousel("recentTrack", "recentPrev", "recentNext");
  initCarousel("bestTrack", "bestPrev", "bestNext");
  initCarousel("extraTrack", "extraPrev", "extraNext");
  initCarousel("fitTrack", "fitPrev", "fitNext");

  // Mobile Navigation Toggle
  const hamburgerBtn = document.getElementById("headerHamburger");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const drawerCloseBtn = document.getElementById("drawerClose");

  const openDrawer = () => {
    if (mobileDrawer && hamburgerBtn) {
      mobileDrawer.classList.add("open");
      drawerBackdrop?.classList.add("open");
      hamburgerBtn.classList.add("is-active");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      document.body.classList.add("drawer_open");
      document.body.style.overflow = "hidden";
    }
  };

  const closeDrawer = () => {
    if (mobileDrawer && hamburgerBtn) {
      mobileDrawer.classList.remove("open");
      drawerBackdrop?.classList.remove("open");
      hamburgerBtn.classList.remove("is-active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("drawer_open");
      document.body.style.overflow = "";
    }
  };

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = mobileDrawer?.classList.contains("open");
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  drawerCloseBtn?.addEventListener("click", closeDrawer);
  drawerBackdrop?.addEventListener("click", closeDrawer);

  // image preview
  const thumbnails = document.querySelectorAll("#productThumbnails img");
  const mainImage = document.getElementById("productMainImg");

  thumbnails.forEach((thumbnail) =>
    thumbnail.addEventListener("click", function () {
      mainImage.src = this.src;

      thumbnail.forEach((img) => img.classList.remove("active"));

      this.classList.add("active");
    }),
  );

  // Scroll thumbnails on Next button click
  const thumbnailRow = document.getElementById("productThumbnails");
  const nextBtn = document.getElementById("thumbnailNextBtn");

  if (thumbnailRow && nextBtn) {
    nextBtn.addEventListener("click", () => {
      thumbnailRow.scrollBy({
        top: 100,
        behavior: "smooth",
      });
    });
  }

  // like unlike button
  const wishlistBtns = document.querySelectorAll(".product_action_btn");

  wishlistBtns.forEach((btn) => {
    const heartIcon = btn.querySelector(".fa-heart");

    if (!heartIcon) return;

    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      heartIcon.classList.toggle("fa-regular");
      heartIcon.classList.toggle("fa-solid");
    });
  });
});
