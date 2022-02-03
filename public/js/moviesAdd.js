window.addEventListener('load',function() {
    let inputTituloPeli = document.querySelector('#tituloPelicula');
    inputTituloPeli.focus();
    //console.log('Hola');
    let inputsFormulario = document.querySelectorAll('input');
    let formulario = document.querySelector('form');
    let selectGenero = document.querySelector('#selectGenero');
    
    let errores = []
    /*
    errores [
        title:"Este campo es obligatorio"
    ]
    */
   
    let msjCampoVacio = "Este campo es obligatorio"

    //-----------------Validaciones para los input (faltan replicar para el select)--------------------------
    formulario.addEventListener('submit',function(e){
        errores = []
        e.preventDefault();
        inputsFormulario.forEach (elemento => {
            //console.log(elemento.name);
            if (elemento.value == ""){
                errores.push ({[elemento.name]:msjCampoVacio});
            }
            if(elemento.name == "rating" || elemento.name == "awards"){
                if(elemento.value < 0|| elemento.value > 10){
                    errores.push({[elemento.name]:"El valor permitido para este campo es entre 0 y 10"})
                }

            }
            if(elemento.name=="length"){
                if(elemento.value < 60|| elemento.value > 360){
                    errores.push({[elemento.name]:"El valor permitido para este campo es entre 60 y 360 minutos"})
                }

            }
        }); // output = array de errores completado
        if(errores.length == 0) {
            //this.submit();
            e.currentTarget.submit();//Esto tira un error, revisar
        } else {
            inputsFormulario.forEach(elemento => {
                if(elemento.value ==""){
                    elemento.classList.add('is-invalid');
                } else {
                    elemento.classList.remove('is-invalid');
                }
            })
        }
        //si el formulario no contiene errores, submitir
        if(errores.length == 0) {
            formulario.submit();
        }
    })
//-----------------Fin de Validaciones para los input--------------------------
    inputsFormulario.forEach(elemento => {
        elemento.addEventListener('change',function(){
            //crea array de errores
            if (elemento.value == ""){
                errores.push ({[elemento.name]:msjCampoVacio});
                elemento.classList.add('is-invalid')
                elemento.classList.remove('is-valid');
            } else {
                //eliminar el mensaje de error
                if (errores.length > 0) {
                    errores = errores.filter(objetoError => !objetoError.hasOwnProperty(elemento.name))
                elemento.classList.remove('is-invalid')
                }
                elemento.classList.add('is-valid');
            }
        console.log(errores);
        })
        
    })


});