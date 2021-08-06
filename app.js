console.log('kaboom!!');
//API key:  4b03b8df9ad04b0eaeb380abc8afe463
let newsAccordian = document.getElementById('newsAccordian');
console.log(newsAccordian);
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=4b03b8df9ad04b0eaeb380abc8afe463', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index+1}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index+1}"
                                        aria-expanded="true" aria-controls="collapse${index+1}">
                                        ${element["title"]}
                                    </button>
                                </h5>
                            </div>

                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                                <div class="card-body">${element["content"]}. <a href="${element["url"]}" target = "_blank">Read more here..</a> </div>
                            </div>
                        </div>` ;
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log('Some Error Occured');
    }
}
xhr.send();
