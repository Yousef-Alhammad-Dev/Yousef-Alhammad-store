const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  consle.log(xhr.response);
});

xhr.open(
  "GET",
  "https://yousef-alhammad-dev.github.io/Yousef-Alhammad-store/store.html"
);
xhr.send();
