let imagesItems = [...document.querySelectorAll(".img-wrap")];
// console.log(imagesItems);
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

//具体的にいつ発動させるのかを決めるオプション
let options ={
    rootMargin: "0px",
    threshold: 0.5,
    };

//監視対象になった瞬間、activeを負荷する関数
setItemActive = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active")
        }
    });
};

//どこにいるのか監視する。そして、特定の位置に来たら関数を呼ぶ
let observer = new IntersectionObserver(setItemActive, options);

//img-wrpは偶数と奇数で出現する場所が違う。そういう処理。
imagesItems.map((item,index) => {
    console.log(item,index);
    item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
observer.observe(item);
});

titles.map((title,index) => {
    index % 2 == 0 ? title.style.left = "45%" :title.style.left = "35%";
    observer.observe(title);
});

observer.observe(titleMessage);
