import {calculos} from "./calculos";
export const Table = (datos, operaciones)=>{
    let clases = obtenerClases(operaciones.k);
    let li = obtenerLimites(datos, operaciones);
    let frecuencias = obtenerFrecuencias(datos, li)
    let mc = obtenerMarcaClase(li);
    let tabla = {clases,li,frecuencias,mc};
    return tabla;
}

const obtenerClases = (k) => {
    let j = 65+k;
    let letras=[];
    for (let i = 65; i < j; i++){
        letras.push(String.fromCharCode(i));
    }
    return letras;
}

export function numberPar (arrayNumbers){
    let newArray = [];

    for(let i = 0; i < arrayNumbers.length; i++){
        newArray.push(arrayNumbers[i])
    }
    
    let dataLen = newArray.length;
    for(let i=0; i < dataLen; i++){
      for(let j=0; j < dataLen; j++){
        if(j+1 !== dataLen){
            console.log();
          if(Number(newArray[j]) > Number(newArray[j+1])){
            let swapElement = Number(newArray[j+1]);
            newArray[j+1] = Number(newArray[j]);
            newArray[j] = Number(swapElement);
          }
        }  
      }
    }
    return newArray;
}