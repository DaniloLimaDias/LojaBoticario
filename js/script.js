let modalQt = 1;

const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

fetch('./dados.json')
    .then(r => r.json())
    .then(json => {
        json.map((item, index) => {
            let boticarioItem = document.querySelector('.models .boticario-item').cloneNode(true);
            odalQt = 1;

            boticarioItem.setAttribute('data-key', index);

            boticarioItem.querySelector('.boticario-item--img img').src = item.images[0].imageUrl; //tentar entender
            boticarioItem.querySelector('.boticario-item--name').innerHTML = item.name;
            boticarioItem.querySelector('.boticario-item--price').innerHTML = `R$ ${item.Value.toFixed(2)}`;
            boticarioItem.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault();
                let key = e.target.closest('.boticario-item').getAttribute('data-key');


                c('.boticario-modal--img img ').src = json[key].images[0].imageUrl;
                c('.boticario-modal--name').innerHTML = json[key].name;
                c('.boticario-modal--price').innerHTML = `R$ ${json[key].Value.toFixed(2)}`;




                c('.item-quantity').innerHTML = modalQt;
                c('.boticario-modal').style.opacity = 0;
                c('.boticario-modal').style.display = 'flex';
                setTimeout(() => {
                    c('.boticario-modal').style.opacity = 1;
                }, 200)


            });

            c('.container-item--area').append(boticarioItem);
        })
    })

    function closeModal() {
        c('.boticario-modal').style.opacity = 0;
        setTimeout(()=> {
            c('.boticario-modal').style.display = 'none';
        }, 500)
    }
    cs('.fechar-modal, .boticario-remove--item').forEach((item)=>{
        item.addEventListener('click', closeModal);
    })