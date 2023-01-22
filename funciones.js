    
    
    const textoIngresado=document.getElementById("ingreso");
    const textoResuelto=document.getElementById("texto");
    const ocultar=document.getElementById("encriptar");
    ocultar.onclick=encriptar;
    const desocultar=document.getElementById("desencriptar");
    desocultar.onclick=desencriptar;
    const copiardora=document.getElementById("copiar");
    copiardora.onclick=copiar;

    function encriptar(){
        if (textoIngresado.value==''){
            alert('No ha escrito nada para trabajar en ello, por favor denme trabajo.');
        }
        else{
            let texto=textoIngresado.value;
            texto=texto.replaceAll('e', 'enter');
            texto=texto.replaceAll('i', 'imes');
            texto=texto.replaceAll('a', 'ai');        
            texto=texto.replaceAll('o', 'ober');
            texto=texto.replaceAll('u', 'ufat');
            let textoEncriptado=texto;
            invisible();
            textoResuelto.value=textoEncriptado;
            aparece();
            textoIngresado.value='';
        }
    }

    function desencriptar(){
        if (textoIngresado.value==''){
            alert('No ha escrito nada para trabajar en ello, por favor deme trabajo.');
        }
        else{
            let texto=textoIngresado.value;
            texto=texto.replaceAll(/enter/g, 'e');
            texto=texto.replaceAll(/imes/g, 'i');
            texto=texto.replaceAll(/ai/g, 'a');     
            texto=texto.replaceAll(/ober/g, 'o');
            texto=texto.replaceAll(/ufat/g, 'u');
            let textoEncriptado=texto;
            invisible();
            textoResuelto.value=textoEncriptado;
            aparece();
            textoIngresado.value='';
        }
    }

    function invisible(){
        document.getElementById("muneco").style.display="none";
        document.getElementById("encontrado").style.display="none";
        document.getElementById("instruccion").style.display="none";
    }
    function aparece(){
        document.getElementById("copiar").style.display="block";
        document.getElementById("texto").style.display="block";
    }
    function copiar(){
        navigator.clipboard.writeText(textoResuelto.value);
    }
