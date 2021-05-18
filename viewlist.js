class View {
    //(date.toLocaleDateString('en-US'));
    view(post) {

        let dt=new Date(post.createdAt);
        let tmp = '<div class="item">' +
            ' <div class="item-top">' +
            ' <img src="MAN.png">' +
            '<span class="fio">' + post.author + '</span>' +
            '<span class="date">' + dt.getDay()+'/'+(dt.getMonth()+1)+'/'+dt.getFullYear() + '</span>' +
            '</div>' +
            '<div class="item-middle">' +
            '<div class="photo">' +
            '<img src="' + post.photoLink + '">' +
            '</div>' +
            '<div class="text">' +
          

            '<div class="p">скидка</div>' +
            '<div class="i">' + post.discount + '</div>' +
            '</div>' +
            '<div class="discription">' + post.description+'</div>';

        let tmp1 = '';
        for (let i of post.hashtags) {
            tmp1 += i;
        }

        let el = document.getElementsByClassName("name_surname")[0];
      
        tmp+=
            '<div class="hash"  style="grid-area: hash">' + tmp1 + '</div>' +
            '</div>';
          
        tmp+='<div class="item-bottom">';
        let isLike=false;
        for (let i=0;i<post.likes.length;i++) {
            if(post.likes[i]===el.innerHTML) isLike=true;
        }
        if(isLike) tmp+='<img src="Heart-icon.png" class="item_like" onclick="deleteLike('+post.id+')">';
        else tmp+='<img src="Gaming-Hearts-icon.png" class="item_like" onclick="addLike('+post.id+')">';
           
        tmp+='<a href="message.html?name='+el.innerHTML+'"><img src="message_icon.png"></a>' +
            '<img src="refresh-icon.png">';

          
           
        if (el.innerHTML ===post.author) {

            tmp += '<img src="delete.png" id=' + post.id + ' class="item_del" onclick="del(this)">' +
                '<a href="post_edit.html?guid=' + post.id + '&name='+el.innerHTML+'"><img src="ed.png"></a>';
        }
        tmp +=
          '</div>' +       
        '</div>';
        return tmp;
    }


    showEl(first,last) {
        let tmp='';
        for(let i=first;i<last;i++) {
             tmp += this.view(photoPosts[i]);
        }
        document.getElementsByClassName("right-list")[0].innerHTML=tmp;
    }

    showNewEl(){

        let el = document.getElementsByClassName("right-list")[0];
        let tmp="";
        let size=el.childNodes.length;
        for(let i=size;i<Math.min(size+10, photoPosts.length);i++) {
                tmp += this.view(photoPosts[i]);
            }
        if(tmp.length>0) el.innerHTML+=tmp;
    }

}


