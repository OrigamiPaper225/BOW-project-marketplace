function fadeout() {
    const myBody = document.body.innerHTML;
    document.body.style.opacity=0;

    // document.getElementByClass("container").style.fade = "0";
    
    changePage();
}

function changePage() {
    setTimeout(window.location.href = "index.html", 5000);
}



// document.body.classList.add('fade');

// document.addEventListener("DOMContentLoaded", () => {
//     window.setTimeout(function() {
//       document.body.classList.remove('fade');
//     }, 5000);
//     window.location.href = "index.html";
//   });



// function windowreplace() {
    
// }
