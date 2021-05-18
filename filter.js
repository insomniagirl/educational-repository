function iteration(phHashtags, filterHashtags) {

    let m = 0;
    for (let i of filterHashtags) {
        if (phHashtags.includes(i)) m++;
    }
    if (m>0) return 1;
    // if (s === phHashtags.length) return 1;
  return 0;
}


function Sort(tt) {
    var author=document.getElementById("name").value;
    var tags=document.getElementById("tags").value;


    let result = [];
    for (let i = 0; i < photoPosts.length; i++) {
        if(author!='' && photoPosts[i].author.indexOf(author)>=0){
            result.push(photoPosts[i]);
            continue;
        }
        if(tags!='' && photoPosts[i].hashtags.includes(tags)){
            result.push(photoPosts[i]);
            continue;
        }

    }

    var doc = document.getElementsByClassName("right-list")[0];

  
    let tmp = "";
    for (let i = 0; i < result.length; i++) {
        tmp += VV.view(result[i]);
    }
    if (result.length == 0) doc.innerHTML = '<h1>По вашему запросу ничего не найдено. Уточните критерии поиска</h1>';
     else doc.innerHTML = tmp;
}

