const c_imgs = document.querySelector('.c_imgs');
const c_points = document.querySelector('.c_points');

c_points.forEach((cadaPunto,i)=>{
    c_points[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -50;
        c_imgs.computedStyleMap.transform = 'translateX(${operacion}%)'
        c_points.forEach((cadaPunto,i)=>{
            c_points[i].classList.remove('active')
        })
        c_points[i].classList.add('active')
    })
})