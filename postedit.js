Load();

var user = location.search.split('user=')[1];
    user=decodeURI(user);



//var id = parseInt(location.search.split('guid=')[1].substring(0,6));
var id = location.search.split('guid=')[1];
var obj = null;

function Init() {
   
    if (id != undefined) {
        id=parseInt(location.search.split('guid=')[1].substring(0,6));
        for (let i = 0; i < photoPosts.length; i++) {
          
            if (parseInt(photoPosts[i].id) == id) {
                obj = photoPosts[i];
                
                break;
            }
        }
        console.log(obj);
        document.getElementById("discount").value = obj.discount;
        document.getElementById("hashtags").value = obj.hashtags;
        document.getElementById("photoLink").value = obj.photoLink;
        document.getElementById("description").value = obj.description;
    }
    else if (id == undefined) {
        obj = new Object();
        obj.createdAt=new Date();
         id = Math.floor(Math.random() * 100000);

        for (let i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                id = Math.floor(Math.random() * 100000);
                break;
            }
        }

        obj.id = id;
        obj.author = document.getElementsByClassName("name_surname")[0].innerHTML;
        console.log(obj.authorL);
        photoPostsSource.push(obj);
        photoPosts.push(obj);
        document.getElementById("hashtags").value= ArrOfHashtags;
        document.getElementById("discount").value = '20';
        document.getElementById("photoLink").value = 'url link';
        document.getElementById("description").value = '';
        }
}



function save(ss) {


      
 
    obj.price = document.getElementById("discount").value;
    obj.hashtags = document.getElementById("hashtags").value;
    obj.photoLink = document.getElementById("photoLink").value;
    obj.description= document.getElementById("description").value;
    obj.author=user;
    console.log(obj);

    PP.saveToStorage();
    alert('Пост успешно создан/изменен.');
    window.location='post_feed.html?user='+user;
   // var user = location.search.split('name=')[1];
}

Init();

