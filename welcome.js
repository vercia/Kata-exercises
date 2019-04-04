function greet(language) {
	var welcomes = "";
  
  switch(language) {
  case 'english':
    welcomes="Welcome";
    break;
  case "czech":
    welcomes='Vitejte';
    break;
  case "danish":
    welcomes='Velkomst';
    break;
  case "dutch":
    welcomes='Welkom';
    break;
  case "estonian":
    welcomes='Tere tulemast';
    break;
  case "finnish":
    welcomes='Tervetuloa';
    break;
  case "flemish":
    welcomes='Welgekomen';
    break;
  case "french":
    welcomes='Bienvenue';
    break;
   case "german":
    welcomes='Willkommen';
    break;
   case "irish":
    welcomes='Failte';
    break;
   case "italian":
    welcomes='Benvenuto';
    break;
   case "latvian":
    welcomes='Gaidits';
    break;
   case "lithuanian":
    welcomes='Laukiamas';
    break;
   case "polish":
    welcomes='Witamy';
    break;
   case "spanish":
    welcomes='Bienvenido';
    break;
   case "swedish":
    welcomes='Valkommen';
    break;
   case "welsh":
    welcomes='Croeso';
    break;
   default:
   welcomes='Welcome'
   break;
  }
  


  return welcomes;
}

greet("english");