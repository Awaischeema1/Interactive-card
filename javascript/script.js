const detailTag = document.querySelector('.detail-content'),
form = document.querySelector('form'),
nameTag = form.querySelector('#name'),
numTag = form.querySelector('#number'),
monthTag = form.querySelector('#month'),
yearTag = form.querySelector('#year'),
cvcTag = form.querySelector('#cvc'),
conBTn = document.querySelector('.con');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = nameTag.value;
    const number = numTag.value;
    const month = monthTag.value;
    const year = yearTag.value;
    const cvc = cvcTag.value;
    
   if(name === ' '){
    document.querySelector('.name-error').innerText = 'Enter your name';
    return;
   }else if(!/^[0-9]+$/.test(number)){
    document.querySelector('.num-error').innerText = 'Wrong format,numbers only';
    return;
   }else if(!/^[0-9]+$/.test(month) || month > 12){
    document.querySelector('.date-error').innerText = 'Enter valid month';
    return;
   }else if(!/^[0-9]+$/.test(year)){
    document.querySelector('.date-error').innerText = 'Enter valid year';
    return;
   }else{
    document.querySelector('.card-num').innerText = number
    document.querySelector('.name-exp .name').innerText = name
    document.querySelector('.name-exp .over').innerText = month
    document.querySelector('.name-exp .under').innerText = year
    document.querySelector('.back-side .back-detail').innerText = cvc
    detailTag.classList.add('comp')
   }
})
conBTn.addEventListener('click',()=>{
    location.reload();
})