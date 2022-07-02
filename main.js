let nombreAlumno = prompt("Ingrese el Nombre del Alumno")
while(nombreAlumno.length === 0){
    alert("Nombre ingresado NO válido")
    nombreAlumno = prompt("Ingrese el Nombre del Alumno")
}
let apellidoAlumno = prompt("Ingrese el Apellido del Alumno")
while(apellidoAlumno.length === 0){
    alert("Apellido ingresado NO válido")
    apellidoAlumno = prompt("Ingrese el Apellido del Alumno")
}
console.log("Nombre Alumno " + nombreAlumno + " " + apellidoAlumno)

let notaPrimerTrimestre = parseInt(prompt("Ingrese la nota del Primer Trimestre"))
console.log("Nota Primer Trimestre " + notaPrimerTrimestre)
let notaSegundoTrimestre = parseInt(prompt("Ingrese la nota del Segundo Trimestre"))
console.log("Nota Segundo Trimestre " + notaSegundoTrimestre)
let notaTercerTrimestre = parseInt(prompt("Ingrese la nota del Tercer Trimestre"))
console.log("Nota Tercer Trimestre " + notaTercerTrimestre)
let promedioAnual = (notaPrimerTrimestre + notaSegundoTrimestre + notaTercerTrimestre)/3
console.log("Promedio Alumno " + promedioAnual)

let contribucion = prompt("Ingrese el monto Donado por el Alumno")
let categoriaDonador
if(contribucion >= 50000){
    categoriaDonador = "Gran Donador"
}
else{
    categoriaDonador = "No Donador"
}
console.log(categoriaDonador)

if(notaPrimerTrimestre <=4 || notaSegundoTrimestre <=4 || notaTercerTrimestre <=4){
    if(categoriaDonador == "Gran Donador"){
        alert("El promedio de " + nombreAlumno + " " + apellidoAlumno + " es " + promedioAnual + ". Debiera recuperar algún Trimestre, sin embargo se lo aprueba por Gran Donador")
    }
    else{
        alert("El promedio de " + nombreAlumno + " " + apellidoAlumno + " es " + promedioAnual + ". Alumno Reprobado. Debe Recuperar algún Trimestre")
    }
    
}
else{
    if(promedioAnual >= 7){
        alert("El promedio de " + nombreAlumno + " " + apellidoAlumno + " es " + promedioAnual + ". El Alumno se encuentra aprobado")
    }
    else{
        if(categoriaDonador == "Gran Donador"){
            alert("El promedio de " + nombreAlumno + "  " + apellidoAlumno + " es " + promedioAnual + ". Sin embargo Segundo lo aprueba por Gran Donador")
        }
        else{
            alert("El promedio de " + nombreAlumno + "  " + apellidoAlumno + " es " + promedioAnual + ". Alumno Reprobado")
        }
    }
}
