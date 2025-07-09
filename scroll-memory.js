// স্ক্রল পজিশন সংরক্ষণ
window.addEventListener("beforeunload", function () {
    localStorage.setItem("scrollPosition", window.scrollY);
});

// স্ক্রল পজিশন পুনরুদ্ধার
window.addEventListener("load", function () {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition));
    }
});