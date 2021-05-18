let PP=new PostList(ArrOfHashtags, ArrOfNames);

function Load(){
    //localStorage.clear();
    
if (localStorage.length == 0) {
    for (let l = 0; l < photoPostsSource.length; l++) {
        let key =l;
        var serialItem = JSON.stringify(photoPostsSource[l]);
        localStorage.setItem(key, serialItem);
    }
}

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let obj = JSON.parse(localStorage.getItem(key));
    photoPosts.push(obj);
}

}
