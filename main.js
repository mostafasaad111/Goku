let section = document.querySelector(".skills");
let spans = document.querySelectorAll(" .prog-holder  .prog  span");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop -300) {
    console.log("Reached Section prog");
    spans.forEach((span)=>{
    span.style.width = span.dataset.width;
    });
  }
};
