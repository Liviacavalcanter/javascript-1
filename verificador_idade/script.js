function verificar() {
   var data = new Date() //data atual
   var ano = data.getFullYear() //ano atual com 4 dígitos
   var form_ano= document.getElementById ("txtano")
   var res = document.getElementById ("res")

     if (form_ano.value.length == 0 || Number(form_ano.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
     } else {
          var form_sex = document.getElementsByName("radsex")
          var idade = ano - Number(form_ano.value)   
          var genero = ''
          
          //Add imagem por JS
          var img = document.createElement('img')//criando um elemento
          img.setAttribute('id', 'foto') //atribuindo um id ao elemento "img" criado acima
          //mesma coisa de (<img id ="foto">) no HTML
          if (form_sex[0].checked){
          genero ='Homem'
               if (idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'bebe_homem.png')
               } else if (idade < 30){
                    //Jovem
                    img.setAttribute('src', 'jovem_homem.png')
               } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'adulto_homem.png')
               } else{
                    //Idoso
                    img.setAttribute('src', 'idoso_homem.png')
               }
          } else if (form_sex[1].checked){
          genero = 'Mulher'
               if (idade >=0 && idade < 10){
                    //Criança
                    img.setAttribute('src', 'bebe_mulher.png')
               } else if (idade < 30){
                    //Jovem
                    img.setAttribute('src', 'jovem_mulher.png')
               } else if (idade < 50){
                    //Adulto
                    img.setAttribute('src', 'adulto_mulher.png')
               } else{
                    //Idoso
                    img.setAttribute('src', 'idoso_mulher.png')
               }
          }
          res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
          res.appendChild(img)
     }
}