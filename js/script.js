fetch('./dados.json')
.then(r => r.json())
.then(json => {
    console.log(json)
    json.map((item, index) =>{
        let boticarioItem = document.querySelector('.models .boticario-item').cloneNode(true);

        boticarioItem.querySelector('.boticario-item--img img').src  = item.images.pop().imageUrl; //tentar entender
        boticarioItem.querySelector('.boticario-item--name').innerHTML = item.name;
    boticarioItem.querySelector('.boticario-item--price').innerHTML = `R$ ${item.Value.toFixed(2)}`;

        document.querySelector('.container-item--area').append(boticarioItem);
    })
})