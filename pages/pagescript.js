const videoPlayer = document.getElementById("videoPlayer");

/* ================
   VIDEO YÜKLEME
================ */
function loadVideo(url) {
  if (!url) return;

  videoPlayer.src = "";
  setTimeout(() => {
    videoPlayer.src = url + "?autoplay=1&mute=1";
  }, 50);
}

/* ================
   ANA KONULAR
================ */
document.querySelectorAll(".topic-header").forEach(header => {
  header.addEventListener("click", () => {

    const topic = header.parentElement;
    const subList = topic.querySelector(".sub-topic-list");
    const directVideo = header.dataset.video;

    // Aktif başlık
    document.querySelectorAll(".topic-header").forEach(h => {
      h.classList.remove("active");
    });
    header.classList.add("active");

    // Diğer alt listeleri kapat
    document.querySelectorAll(".sub-topic-list").forEach(list => {
      if (list !== subList) {
        list.style.maxHeight = null;
      }
    });

    // Alt liste varsa → accordion
    if (subList) {
      const isOpen = subList.style.maxHeight;
      subList.style.maxHeight = isOpen ? null : subList.scrollHeight + "px";
      return;
    }

    // Tek videolu konu
    if (directVideo) {
      loadVideo(directVideo);
    }
  });
});

/* ================
   ALT VİDEOLAR
================ */
document.querySelectorAll(".sub-topic-list li").forEach(item => {
  item.addEventListener("click", () => {

    document.querySelectorAll(".sub-topic-list li").forEach(li => {
      li.classList.remove("active");
    });

    item.classList.add("active");
    loadVideo(item.dataset.video);
  });
});

/* ================
   SAYFA AÇILINCA
================ */
window.addEventListener("DOMContentLoaded", () => {
  const firstVideo = document.querySelector("[data-video]");
  if (firstVideo) {
    loadVideo(firstVideo.dataset.video);
  }
});
