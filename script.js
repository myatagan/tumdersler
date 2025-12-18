// ELEMENTLERİ SEÇ
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const videoPlayer = document.getElementById('videoPlayer');
const unitTitles = document.querySelectorAll('.unit-title');
const topics = document.querySelectorAll('.topic-list li');


// HAMBURGER MENÜ
hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
  hamburger.textContent = hamburger.textContent === '☰' ? '✖' : '☰';
});


// SCREEN RESIZE RESET
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    menu.classList.remove('show');
    hamburger.textContent = '☰';
  }
});


// KONULARA TIKLANINCA VİDEO DEĞİŞSİN
topics.forEach(topic => {
  topic.addEventListener('click', () => {
    const pageURL = topic.getAttribute('data-page');
    window.location.href= pageURL; 

    topics.forEach(t => t.classList.remove('active'));
    topic.classList.add('active');
  });
});


// ÜNİTE AKORDİYONU ✅
unitTitles.forEach(title => {
  title.addEventListener('click', () => {
    const topicList = title.parentElement.querySelector('.topic-list');
    topicList.classList.toggle('show');
    title.classList.toggle('active');
  });
});
document.getElementById('testcoz').addEventListener('click', () => {
  // Şu an quizBox gösteriyordu, onu kaldırıyoruz
  window.location.href = "test.html"; // ✅ test.html sayfasına gider
});
const contentData = {
  "Mevsimlerin Oluşumu": {
    summary: "Hava olayları, yeryüzüne yakın atmosferde gerçekleşen kısa süreli değişimlerdir...",
    outcomes: [
      "Sıcaklık ile hava olaylarının ilişkisini açıklar.",
      "Mevsimlerin oluşum nedenlerini açıklar."
    ],
    pdf: "dosyalar/sicaklik.pdf"
  },
  "İklim ve Hava Hareketleri": {
    summary: "İklim, bir bölgedeki uzun yıllar boyunca gözlenen hava olaylarının ortalama durumudur...",
    outcomes: [
      "İklim ile hava olaylarını karşılaştırır.",
      "Türkiye'nin iklim özelliklerini kavrar."
    ],
    pdf: "dosyalar/iklim.pdf"
  }
};

