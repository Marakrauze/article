const article = document.getElementById('content');
const button = document.getElementById('showMore')

function showMore(){
    if (article.className == 'open') {

        article.className = "";
        button.innerHTML = "Show more";
    } else {
        article.className = "open";
        button.innerHTML = "Show less";
    }
}