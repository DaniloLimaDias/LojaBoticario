fetch('./dados.json')
.then(r => r.json())
.then(json => {
    console.log(json)
    json.map((item, index) =>{
        let boticarioItem = document.querySelector('.container-item .models .boticario-item').cloneNode(true);

        boticarioItem.querySelector('.boticario-item--img img').src  = item.images = item.images.pop().imageUrl;
        boticarioItem.querySelector('.boticario-item--name').innerHTML = item.name;
        boticarioItem.querySelector('.boticario-item--price').innerHTML = item.Value;

        document.querySelector('.container-item').append(boticarioItem);
    })
})