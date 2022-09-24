 // content
 const toggleContent = document.querySelector("#toggle-content");

 //   parent btn
 const parentShowDetail = document.querySelector(".parent-show-detail");
 const parentHideDetail = document.querySelector(".parent-hide-detail");

 //   button
 const showButton = document.querySelector("#show-button");
 const hideButton = document.querySelector("#hide-button");

 showButton.addEventListener("click", function (e) {
   e.preventDefault();
   toggleContent.style.height = "40vh";
   toggleContent.classList.add("mt-3");
   parentHideDetail.classList.remove("d-none");
   parentShowDetail.classList.add("d-none");
 });

 hideButton.addEventListener("click", function (e) {
   e.preventDefault();
   toggleContent.style.height = "0";
   toggleContent.classList.remove("mt-3");
   parentHideDetail.classList.add("d-none");
   parentShowDetail.classList.remove("d-none");
 });

 //   showButton.addEventListener("click", function (e) {
 //     e.preventDefault();
 //     if (toggleContent.classList.contains("show-content")) {
 //       toggleContent.style.height = "40vh";
 //       toggleContent.classList.remove("show-content");
 //     } else {
 //       toggleContent.style.height = "0";
 //       toggleContent.classList.add("show-content");
 //     }
 //   });