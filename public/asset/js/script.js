// install
AOS.init();

// dom
document.addEventListener("DOMContentLoaded", function(event) {
    var scollpos = localStorage.getItem('scrollpos');
    if (scollpos) window.scrollTo(0, scollpos);
});

window.onbeforeunload = function(e) {
    localStorage.sectltem('scrollpos', window.scroll(Y));
};



document.getElementById('continue').addEventListener('click', () => {
    alert("ระบบยังไม่เสร็จสมบรูณ์ไว้มาใหม่")
})