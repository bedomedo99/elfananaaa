let no = document.getElementById("no");
let yes = document.getElementById("yes");
let content = document.getElementById("content");
let loveContainer = document.getElementById("loveContainer");

// دالة هروب الزرار للصفحة الأولى
function escapeButton() {
  let maxX = window.innerWidth - no.offsetWidth;
  let maxY = window.innerHeight - no.offsetHeight;
  
  let randomX = Math.floor(Math.random() * maxX);
  let randomY = Math.floor(Math.random() * maxY);
  
  randomX = Math.max(10, Math.min(randomX, maxX - 10));
  randomY = Math.max(10, Math.min(randomY, maxY - 10));
  
  no.style.position = "fixed"; 
  no.style.top = randomY + "px";
  no.style.left = randomX + "px";
}

no.addEventListener("mouseover", escapeButton);

no.addEventListener("touchstart", function (e) {
  e.preventDefault(); 
  escapeButton();
});

// التعديل هنا: إظهار الصفحة التانية
yes.addEventListener("click", () => {
  content.classList.add("hidden"); // بيخفي الصفحة الأولى
  
  // السطر ده هو اللي هيحل المشكلة ويظهر الصورة والكلام
  loveContainer.classList.remove("hidden"); 
  loveContainer.style.display = "flex"; 
});