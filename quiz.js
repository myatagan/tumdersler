// Radio tıklanınca OMR güncelle
document.querySelectorAll('input[type="radio"]').forEach(radio => {  // tipi radio olan tüm nesneleri seç
  radio.addEventListener('change', () => {                           // tüm radyo nesnelerine dinleyici, ata, biri değişince tetiklensin
    const q = radio.name;         // sorunun adı (q1, q2, ...)      // tetiklenince q adında değişken soru numarasını , value adında değişken şıkın değerini tutsun
    const val = radio.value;

    document.querySelectorAll(`.bubble[data-q="${q}"]`)     // Aynı soruya ait tüm OMR balonlarından seçili görünümü kaldırır
      .forEach(b => b.classList.remove("selected"));  // burada b geçiçi değişken, döndürülern tüm buble elemanlarının teker teker gezmek için kullanılıyor.
                                                          // tümünün selected classını kaldırır
    document.querySelector(`.bubble[data-q="${q}"][data-val="${val}"]`)  // bu kez hem soruyu hem de değeri ile eşleşen balonları bulur
      .classList.add("selected");                                      // ve seçili görünümü ekler, yani her tıklamada önce o sorudaki önceki tıklamayı siler, daha sonra 
  });                                               // tıklanan balona seçili görünümü ekler                  
});                                                 // burada sorunun adı ve değeri ile işlem yapacağımızdan önce onları q ve val değişkenlerine atıyotuz

// OMR bubble tıklanınca radio güncelle
/*document.querySelectorAll('.bubble').forEach(bubble => {   //buble içeren elemanların tümünü seç
  bubble.addEventListener('click', () => {                // bu seçilen elemanlara tıklanırsa
    const q = bubble.dataset.q;                           // bubble elemanının q değerini ve val değerini tutan bir q ve val değişkeni oluştur.
    const val = bubble.dataset.val;  */

    document.querySelector(`input[name="${q}"][value="${val}"]`)     // kullanıcının tıkladığı q ve val değerini input olarak alır ve seçer
    bubble.parentElement.parentElement
      .querySelectorAll('.bubble')
      .forEach(b => b.classList.remove("selected"));

    bubble.classList.add("selected");
 // });
//});
