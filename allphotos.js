var photoPosts=new Array();

var photoPostsSource = [
    {
        id:'167438',
        discount:'10',
        description:'Представитель компании Аква Дарида. Скидка, указанная выше, предоставляется для IT компаний. Скидка действительна после оптовой закупки от 15 л.',
        author:'Смирнова Юлия',
        photoLink:'https://www.darida.by/upload/iblock/32e/32e4f6b329cc7f09293f8b4035b0712a.jpg',
        createdAt: new Date('2020-01-13T23:00:00'),
        likes:new Array('Иванов Иван','Смирнова Юлия'),
        hashtags:new Array('#Water','#ITcompany')
    },
   
    {
        id:'167433',
        discount:'7',
        description:'Представитель компании Боржоми.Скидка, указанная выше, предоставляется для IT компаний. Скидка действительна после оптовой закупки от 3 л.',
        author:'Василевский Василий',
        photoLink:'https://www.gastroscan.ru/handbook/images-aqua/borjomi-4bottles-01.jpg',
        createdAt: new Date('2003-10-11T23:00:00'),
        likes:new Array('Иванов Иван','Скуратова Дарья'),
        hashtags:new Array('#ThisIsPopular','#Product')
    },
    {
        id:'177438',
        discount:'30',
        description:'Представитель компании по продаже мышок.Скидка, указанная выше, предоставляется для IT компаний. Скидка действительна после оптовой закупки от 20 мышек.',
        author:'Смирнова Юлия',
        photoLink:'https://aliradar.com/api/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB11ixoeDfN8KJjSZFjq6xGvpXah%2FHot-sale-MOSUNX-Wireless-Game-Mouse-Gifts-Wholesale-Wireless-Ergonomic-Vertical-Optical-USB-Mouse-5D-Optical.jpg_640x640.jpg',
        createdAt: new Date('2020-03-23T23:00:00'),
        likes:new Array('Василевский Василий,Скуратова Дарья'),
        hashtags:new Array('#Product','#Discount')
    },
    {
        id:'107438',
        discount:'10',
        description:'Представитель компании по продаже серверов.Скидка, указанная выше, предоставляется для IT компаний. Скидка действительна после оптовой закупки от 2 серверов.',
        author:'Скуратова Дарья',
        photoLink:'https://timeweb.com/ru/community/article/64/64e16bc7ae700df6d35bffc9c361a4d2.jpg',
        createdAt: new Date('2018-12-23T23:00:00'),
        likes:new Array('Масюк Женя','Сазон Ваня'),
        hashtags:new Array('#ThisIsPopular','#Discount')
    },
    {
        id:'197438',
        discount:'70',
        description:'Представитель компании по продаже кружек.Скидка, указанная выше, предоставляется для IT компаний. Скидка действительна после оптовой закупки от 30 кружек.',
        author:'Василевский Василий',
        photoLink:'https://printonator.ru/static/store/8521/pic/pic1gold.jpg',
        createdAt: new Date('2021-03-23T23:00:00'),
        likes:new Array('Масюк Женя','Смирнова Юлия'),
        hashtags:new Array('#ThisIsPopular','#MyGift')
    },
    {
        id:'187438',
        discount:'30',
        description:'Представитель компании по проведению корпортивов.Скидка, указанная выше, предоставляется для IT компаний.',
        author:'Шарандикова Алина',
        photoLink:'https://www.e-xecutive.ru/uploads/article/image/1746964/thumb_corporative_sovet.jpg',
        createdAt: new Date('2017-10-23T23:00:00'),
        likes:new Array('Масюк Женя','Скуратова Дарья'),
        hashtags:new Array('#ThisIsPopular','#MyGift')
    },
    {
        id:'007438',
        discount:'10',
        description:'Представитель компании по проведению мастер классов по йоге.Скидка, указанная выше, предоставляется для IT компаний.',
        author:'Сазон Ваня',
        photoLink:'https://cdnmyslo.ru/CityImage/72/f7/72f7c6e3-f94e-40e9-a1f2-68e4e40d7536_1.jpg',
        createdAt: new Date('2019-01-03T23:00:00'),
        likes:new Array('Иванов Иван','Шарандикова Алина'),
        hashtags:new Array('#ITcompany','#IT')
    },
    {
        id:'123438',
        discount:'30',
        description:' Представитель компании по продаже самой разной IT техники.Скидка, указанная выше, предоставляется для IT компаний. ',
        author:'Бизюк Мария',
        photoLink:'https://ru.all.biz/img/ru/catalog/8656182.jpeg',
        createdAt: new Date('2001-02-20T23:00:00'),
        likes:new Array('Иванов Иван','Ветрова Юлия'),
        hashtags:new Array('#Product','#MyGift','#Discount')
    },
    {
        id:'156438',
        discount:'70',
        description:'Представитель компании по продаже протеиновых батончиков для сотрудников IT компаний. Скидка действует при покупке от 50 штук. ',
        author:'Масюк Женя',
        photoLink:'https://fizcult.by/upload/iblock/471/4711f7e4f3a0ff11a8f57946d886cf57.jpg',
        createdAt: new Date('2002-03-15T23:00:00'),
        likes:new Array('Иванов Иван','Сазон Ваня'),
        hashtags:new Array('#Gift','#Discount')
    },
    {
        id:'106438',
        discount:'3',
        description:'Представитель компании по продаже энергетиков Red Bull для сотрудников IT компаний. Скидка действует при покупке от 10 штук. ',
        author:'Бизюк Мария',
        photoLink:'https://vzboltay.com/uploads/posts/2019-05/1556825816_red-bull.jpg',
        createdAt: new Date('2011-07-12T23:00:00'),
        likes:new Array('Шарандикова Алина','Масюк Женя'),
        hashtags:new Array('#MyGift','#ITcompany')
    },
    {
        id:'999438',
        discount:'30',
        description:'Представитель компании по продаже энергетиков Monster для сотрудников IT компаний. Скидка действует при покупке от 30 штук.',
        author:'Василевский Василий',
        photoLink:'https://kifa.by/upload/iblock/a41/a414b4490f5bd20a6aca64acde9ac83d.jpg',
        createdAt: new Date('2013-02-23T23:00:00'),
        likes:new Array('Сазон Ваня','Шарандикова Алина'),
        hashtags:new Array('#ThisIsPopular','#IT')
    },
    {
        id:'167038',
        discount:'15',
        description:'Представитель спортзала Gym24, скидка для всех для сотрудников IT компаний. ',
        author:'Иванов Иван',
        photoLink:'https://www.gym24.by/wp-content/uploads/2019/10/gym24-klub.jpg',
        createdAt: new Date('2007-01-09T23:00:00'),
        likes:new Array('Иванов Иван','Смирнова Юлия'),
        hashtags:new Array('#ThisIsPopular','#MyGift')
    },
    {
        id:'167538',
        discount:'8',
        description:'Представитель фитнес клуба Zeus, скидка для всех для сотрудников IT компаний.',
        author:'Смирнова Юлия',
        photoLink:'https://vse-kursy.by/uploads/posts/2018-11/medium/1541745320_zeus.jpg',
        createdAt: new Date('2010-03-20T23:00:00'),
        likes:new Array('Сазон Ваня','Шарандикова Алина'),
        hashtags:new Array('#ThisIsPopular','#MyGift')
    },
    {
        id:'157798',
        discount:'12',
        description:'Представитель клуба виртуальной реальности. Отличная возможность для IT-шников!',
        author:'Масюк Женя',
        photoLink:'https://s0.rbk.ru/v6_top_pics/media/img/5/08/755797716056085.jpg',
        createdAt: new Date('2014-06-23T23:00:00'),
        likes:new Array('Сазон Ваня','Шарандикова Алина'),
        hashtags:new Array('#ThisIsPopular','#ITcompany')
    },
    {
        id:'165538',
        discount:'11',
        description:'Представитель чилл зоны для вашего нетворкинга. Отличная возможность для IT-шников!',
        author:'Шарандикова Алина',
        photoLink:'https://www.quasa.io/storage/photos/%D0%A4%D0%BE%D1%82%D0%BE/00%20Net%201.jpg',
        createdAt: new Date('2018-02-23T23:00:00'),
        likes:new Array('Масюк Женя','Бизюк Мария'),
        hashtags:new Array('#Gift','#ITcompany','#IT')
    },
    {
        id:'167490',
        discount:'25',
        description:'Представитель пиццерии Маргарита. Совмещайте рабочее время с приятными моментами своей жизни!',
        author:'Бизюк Мария',
        photoLink:'https://media-cdn.tripadvisor.com/media/photo-s/06/e3/70/d9/caption.jpg',
        createdAt: new Date('2013-03-10T23:00:00'),
        likes:new Array('Василевский Василий','Сазон Ваня'),
        hashtags:new Array('#MyGift')
    },
    {
        id:'167555',
        discount:'13',
        description:'Представитель пиццерии Пицца Темпо. Хорошего настроения!',
        author:'Иванов Иван',
        photoLink:'https://www.tuda-suda.by/images/countries/europe/belarus/minsk/pitstseriya-pitstsa-tempo-na-nezavisimosti/pitstseriya-pitstsa-tempo-na-nezavisimosti.JPG',
        createdAt: new Date('2018-02-23T23:00:00'),
        likes:new Array('Василевский Василий','Сазон Ваня'),
        hashtags:new Array('#MyGift')
    },
    {
        id:'167777',
        discount:'5',
        description:'Кофейня Грей Хауз для вашего нетворкинга. Скидка на всю нашу продукцию+ один пирожок бесплатно! ',
        author:'Василевский Василий',
        photoLink:'https://static.relax.by/images/common/wysiwyg/2017/05/e452acffe99a9d886a12d018d7cf69a7.jpg',
        createdAt: new Date('2018-02-23T23:00:00'),
        likes:new Array('Василевский Василий','Сазон Ваня'),
        hashtags:new Array('#ThisIsPopular','#Product')
    },
    {
        id:'167432',
        discount:'40',
        description:'Кофейня Кофикс для вашего нетворкинга. Скидка на всю нашу продукцию, цены не кусаются. Вы так же получите один капучино бесплатно!',
        author:'Сазон Ваня',
        photoLink:'https://www.cofix.ru/images/company_new.jpg',
        createdAt: new Date('2009-05-10T23:00:00'),
        likes:new Array('Сазон Ваня','Шарандикова Алина'),
        hashtags:new Array('#ThisIsPopular')
    },
    {
        id:'117132',
        discount:'30',
        description:'Магазин по продаже велосипедов. Ваша возможность добираться до работы без пробок!',
        author:'Бизюк Мария',
        photoLink:'https://shop.by/images/aist_28_130_1.jpg',
        createdAt: new Date('2018-02-23T23:00:00'),
        likes:new Array('Сазон Ваня','Шарандикова Алина'),
        hashtags:new Array('#Product','#MyGift')
    }
];
           
var ArrOfHashtags=['#Water','#MyGift','#Discount','#Gift','#ITcompany','#IT','#party'];
var ArrOfNames=['Смирнова Юлия','Василевский Василий','Сазон Ваня','Шарандикова Алина','Иванов Иван','Масюк Женя','Бизюк Мария','Скуратова Дарья'];
//var ArrOfModels=['эсминец','корвет','авианосец','десантный корабль','миноносец','крейсер'];
//console.log(photoPosts);