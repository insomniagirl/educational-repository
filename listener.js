
function del(obj) {
    if (confirm('удалить пост')) {
        let id = obj.getAttribute("id");
        for (let i = 0; i < photoPosts.length; i++) {
            let el = photoPosts[i];
            if (el.id == id) {
                photoPosts.splice(i, 1);
              
                PP.saveToStorage();
                break;
            }
        }

        obj.parentNode.parentNode.remove();
       
    }
}


function showNewElem() {
Vview.showNewEl();
  let node=document.getElementsByClassName("loading")[0];
    node.style.visibility = 'hidden';
}

function deleteLike(id) {
    let author = document.getElementsByClassName("name_surname")[0].innerHTML;
    let m=0;
    for (let i = 0; i < photoPosts.length; i++) {
        if (photoPosts[i].id==id) {
          m=i;
          break;
        }
    }

console.log(id);
        for(let k=0;k<photoPosts[m].likes.length;k++){
            if (photoPosts[m].likes[k] == author) {
                photoPosts[m].likes.splice(k,1);
               
                break;
            }
        }

        PP.saveToStorage();
        document.location.reload();
}
       

function addLike(id) {
    let author = document.getElementsByClassName("name_surname")[0].innerHTML;
    console.log(id); 
  
    for (let m = 0; m < photoPosts.length; m++) {
        if (photoPosts[m].id==id) {
            photoPosts[m].likes.push(author);
           
          break;
        }
    }
    PP.saveToStorage();
    document.location.reload();
    }

  
  
    


/*function Like(obj) {

    let name = obj.parentNode.parentNode.children[0].children[1].innerHTML;
    let author = document.getElementsByClassName("name_surname")[0].innerHTML;


    for (let i = 0; i < photoPosts.length; i++) {
        if (photoPosts[i].author == name) {
            if (photoPosts[i].likes.includes(author)) {
                if (confirm('удалить лайк?')) {
                    deleteLike(author, i);
                }
            }
            else {
                if (confirm('добавить лайк?')) {
                    addLike(author, i);
                }
            }
            PP.saveToStorage();
            break;
        }
    }
  
}

*/
 


