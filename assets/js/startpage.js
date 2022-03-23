function fadeout() {
    const myBody = document.body.innerHTML;
    document.body.style.opacity=0;
    console.log(document.body.style.opacity);
    function changePage(){
        setTimeout(function() {window.location.href = "index.html"}, 1000);
     }
     changePage();
}