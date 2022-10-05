function promedio(){


    var notauno = 0;
    var notados = 0;
    var notatres = 0;
    var notacuatro = 0;
    var notacinco = 0;
    var promedio = 0;
    var notafinal = 0;
    var cantidadnotas = 5;

    

    notauno = parseInt(prompt("Ingrese la primer calificacion "));
    notados = parseInt(prompt("Ingrese la segunda calificacion "));
    notatres = parseInt(prompt("Ingrese la tercera calificacion "));
    notacuatro = parseInt(prompt("Ingrese la cuarta calificacion "));
    notacinco = parseInt(prompt("Ingrese la quinta calificacion "));


    promedio = notauno + notados + notatres + notacuatro + notacinco;
    notafinal = promedio/cantidadnotas;

    if(notafinal <=34)

    {
        alert("El estudiante a perdido la materia si calificacion es " + notafinal);

    }
    else if (notafinal =>35)
    {
        alert("El estudiante a perdido la materia si calificacion es " + notafinal );
    }
     else
     {
        alert("No ha ingresado ninguna calificacion");
     }

    }



    function impuestos(){


        var sueldo = 0;


        sueldo = parseInt(prompt("Ingrese su salario actual"));

        if (sueldo >10000000)

        {
            alert ("El proximo año se pagara mas impuestos ");

        }
        else if(sueldo <=10000000)
        {
            alert ("sus impuestos seguira igual");

        }
        else
        {
            alert ("No se a ingresado ningun salario");
        }
    }


    function tablas(){


        var numero = 0;


        numero = parseInt(prompt("Ingrese el numero que desea"));

        for (var i = 1; i <=10; i ++)

        {
            alert (i + "x" + numero + " = "+ (i * numero))
        }
    }

    function numeros(){

        for (var i = 1; i <=100; i ++)

        {
            alert (+i);
        }
    }


    function edad(){

        var edad = parseInt(prompt("Ingrese su edad"));

        switch(true)
        {
            case (edad>=18): alert ("Eres mayor de edad"); break;
            case (edad>=17): alert ("Eres menor de edad"); break;
            default : alert ("No ingresaste ninguna edad");
        
        }
    }

    function determinardia(){

        var estudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes que van a ingresar"));

        switch(true)
        {
            case (estudiantes >10): alert ("Este grupo podra tener clase con normalidad"); break;
            case (estudiantes <= 10): alert ("este grupo no podra tener clase ya que como minimo son 10"); break;
            default : alert ("No ingresaste ninguna cantidad de estudiantes");
        
        }
    }

    