     const body = document.querySelector('header');
     const registar = document.querySelector('.registar');
     const olimpiadalar = document.querySelector('.olimpiada');
     const container = document.createElement('div')
     const title = document.createElement('h1');
     const input_div = document.createElement('div')
     const email = document.createElement('input');
     const password = document.createElement('input');
     const phone_num = document.createElement('input');
     const button = document.createElement('button')
     const turlar = document.createElement('div')
     const birinchisi = document.createElement("div")
     const ikinchi = document.createElement('div')
     const matematika = document.createElement('div')
     const ingliz_tili = document.createElement('div')
     const rus_tili = document.createElement("div")
     const informatika = document.createElement("div")
     const uchunchisi = document.createElement("div")
     registar.addEventListener('click',operation)
     function operation(){
     container.classList.add('container');
     container.style.width = '460px'
     container.style.height = '630px'
     container.style.backgroundColor = 'rgb(136,124,102)'
     container.style.borderRadius = '20px'
     container.style.display = 'flex'
     container.style.flexDirection = 'column'
     container.style.gap = '80px'
     container.style.alignItems = 'centre'
     container.style.padding = '40px'
     body.appendChild(container)
     title.classList.add('title')
     title.innerHTML = "Formani to'diring"
     title.style.textAlign = 'centre'
     title.style.fontSize = '36pt'
     title.style.fontFamily = 'sans-serif'
     title.style.marginLeft = '30px'
     title.style.color = 'white'
     container.appendChild(title)
     input_div.classList.add('input_div')
     container.appendChild(input_div)
     email.type = 'email'
     email.placeholder = 'email...'
     email.classList.add('user_email')
     email.style.marginTop = '100px'
     email.style.padding = '15px 25px'
     email.style.borderRadius = '15px'
     input_div.appendChild(email)
     password.type = 'password'
     password.placeholder = 'Password...'
     password.classList.add('user_email')
     password.style.padding = '15px 25px'
     password.style.borderRadius = '15px'
     input_div.appendChild(password)
     phone_num.type = 'number'
     phone_num.placeholder = 'Phone number...'
     phone_num.classList.add('user_email')
     phone_num.style.padding = '15px 25px'
     phone_num.style.borderRadius = '15px'
     input_div.appendChild(phone_num)
         button.classList.add('button')
         input_div.appendChild(button)
         button.innerText = 'sign up';
         button.addEventListener('click',press)
         function press(){
             if (email.value === ""&&password.value ===""&&phone_num.value ===""){
                 const error = document.createElement('div');
                 error.innerHTML = "Siz bu formuloni toldirmadingiz!"
                 error.style.width = "400px"
                 error.style.height = "200px"
                 error.style.backgroundColor = "red"
                 error.style.color = "white"
                 error.style.textAlign = "centre"
                 error.style.padding = "20px"
                 error.style.borderRadius = "15px"
                 error.style.fontFamily = "sans-serif"
                 input_div.appendChild(error)
                 error.addEventListener('click',error_o)
                 function error_o (){
                     error.classList.add('d-none')
                 }
                 console.log('error')
             }
             else if (phone_num.value === ""){
                 const error = document.createElement('div');
                 error.innerHTML = "Siz telefon raqamingizni toldirmadingiz!"
                 error.style.width = "400px"
                 error.style.height = "200px"
                 error.style.backgroundColor = "red"
                 error.style.color = "white"
                 error.style.textAlign = "centre"
                 error.style.padding = "20px"
                 error.style.borderRadius = "15px"
                 error.style.fontFamily = "sans-serif"
                 input_div.appendChild(error)
                 error.addEventListener('click',error_o)
                 function error_o (){
                     error.classList.add('d-none')
                 }
             }
             else if (email.value === ""&& password.value === ""){
                 const error = document.createElement('div');
                 error.innerHTML = "Siz emailingizni va paro'lingizni toldirmadingiz!"
                 error.style.width = "400px"
                 error.style.height = "200px"
                 error.style.backgroundColor = "red"
                 error.style.color = "white"
                 error.style.textAlign = "centre"
                 error.style.padding = "20px"
                 error.style.borderRadius = "15px"
                 error.style.fontFamily = "sans-serif"
                 input_div.appendChild(error)
                 error.addEventListener('click',error_o)
                 function error_o (){
                     error.classList.add('d-none')
                 }
             }
             else if (email.value === ""&& phone_num.value === ""){
                 const error = document.createElement('div');
                 error.innerHTML = "Siz emailingizni va telefo'n raqamingizni toldirmadingiz!"
                 error.style.width = "400px"
                 error.style.height = "200px"
                 error.style.backgroundColor = "red"
                 error.style.color = "white"
                 error.style.textAlign = "centre"
                 error.style.padding = "20px"
                 error.style.borderRadius = "15px"
                 error.style.fontFamily = "sans-serif"
                 input_div.appendChild(error)
                 error.addEventListener('click',error_o)
                 function error_o (){
                     error.classList.add('d-none')
                 }
             }
             else if (password.value === ""&& phone_num.value === ""){
                 const error = document.createElement('div');
                 error.innerHTML = "Siz emailingizni va telefo'n raqamingizni toldirmadingiz!"
                 error.style.width = "400px"
                 error.style.height = "200px"
                 error.style.backgroundColor = "red"
                 error.style.color = "white"
                 error.style.textAlign = "centre"
                 error.style.padding = "20px"
                 error.style.borderRadius = "15px"
                 error.style.fontFamily = "sans-serif"
                 input_div.appendChild(error)
                 error.addEventListener('click',error_o)
                 function error_o (){
                     error.classList.add('d-none')
                 }
             }
             else{
                 const error = document.createElement('div');
                 error.innerHTML = "siz bu saytga muvofaqiyatli qo'shildingiz!!"
                 error.style.width = "400px"
                 error.style.height = "200px"
                 error.style.backgroundColor = "green"
                 error.style.color = "white"
                 error.style.textAlign = "centre"
                 error.style.padding = "20px"
                 error.style.borderRadius = "15px"
                 error.style.fontFamily = "sans-serif"
                 input_div.appendChild(error)
                 error.addEventListener('click',error_o)
                 function error_o (){
                     error.classList.add('d-none')
                 }
             }
     }
     body.removeChild(turlar)
     turlar.removeChild(birinchisi)
     turlar.removeChild(ikinchi)
     console.log('welcome to registratsion')
     }
     olimpiadalar.addEventListener('click',second)
     function second(){
     body.removeChild(container)
     container.removeChild(input_div)
     input_div.removeChild(email)
     input_div.removeChild(password)
     input_div.removeChild(phone_num)
     turlar.classList.add('turlar')

     body.appendChild(turlar)
     turlar.appendChild(birinchisi);
     turlar.appendChild(ikinchi);
     birinchisi.appendChild(matematika)
     birinchisi.appendChild(informatika)
     ikinchi.appendChild(ingliz_tili)
     ikinchi.appendChild(rus_tili)
     birinchisi.style.display = "flex"
     birinchisi.style.flexDirection = "row"
     birinchisi.style.gap = "100px"
     matematika.innerHTML = 'Matematika'
     matematika.style.padding = "70px"
     matematika.style.fontSize = "30pt"
     matematika.style.backgroundColor = "darkgoldenrod"
     matematika.style.marginTop = "40px"
     matematika.style.borderRadius = "20px"
     matematika.style.color = "white"
     informatika.innerHTML = 'Informatika'
     informatika.style.padding = "70px"
     informatika.style.fontSize = "30pt"
     informatika.style.backgroundColor = "darkgreen"
     informatika.style.marginTop = "40px"
     informatika.style.borderRadius = "20px"
     informatika.style.color = "white"
     ikinchi.appendChild(ingliz_tili)
     ikinchi.appendChild(rus_tili)
     ingliz_tili.innerHTML = 'Ingliz-tili'
     ingliz_tili.style.padding = "70px"
     ingliz_tili.style.fontSize = "30pt"
     ingliz_tili.style.backgroundColor = "red"
     ingliz_tili.style.marginTop = "40px"
     ingliz_tili.style.borderRadius = "20px"
     ingliz_tili.style.color = "white"
     turlar.appendChild(uchunchisi)
     uchunchisi.appendChild(rus_tili)
     rus_tili.innerHTML = 'Rus-tili'
     rus_tili.style.padding = "70px"
     rus_tili.style.fontSize = "30pt"
     rus_tili.style.backgroundColor = "blueviolet"
     rus_tili.style.marginTop = "40px"
     rus_tili.style.borderRadius = "20px"
     rus_tili.style.color = "white"

     matematika
     console.log('welcome to olimpadalar')
     }