console.log('test');

var elOne = {
    img: 'http://placekitten.com/300/300',
    name: 'cat-1',
    desc: 'cat -1 Lorem elitunem maxime nostrum nulla.'
};

var elTwo = {
    img: 'http://placekitten.com/400/400',
    name: 'cat-2',
    desc: 'cat -2 Lorem elitunem maxime nostrum nulla.'
};

var elTree = {
    img: 'http://placekitten.com/500/500',
    name: 'cat-3',
    desc: 'cat -3 Lorem elitunem maxime nostrum nulla.'
};

var list = document.getElementById('list');

function drawCat(cat){
    var itemCat = document.createElement('li');
    var content = '';
    content = content + `<img src="${cat.img}" class="item-img">`;
    content = content + `<h3>${cat.name}</h3>`;
    content = content + `<p>${cat.desc}</p>`;

    itemCat.classList.add('item');
    itemCat.innerHTML = content;

    list.appendChild(itemCat);
}

array = [elOne, elTwo, elTree];

array.forEach((item) => drawCat(item));



