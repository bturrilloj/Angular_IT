interface DatosLibro {

    tematica: string;
    paginas: number;
    precio: number;
    calculaPrecio(): number;

}

class Libro {
   
        public autor:string;
        protected titulo:string;
   
        constructor (autor, titulo){
            this.autor = autor;
            this.titulo = titulo;
        }
}

class Libro2{
    constructor(public autor:string, public titulo:string){}
}

class LibroTecnico extends Libro implements DatosLibro {
    tematica
    paginas
    precio
    //funcion
    public calculaPrecio:(void);
    private capitulos: Array<string>; // string[]


    constructor(autor, titulo, tematica, paginas, precio) {
        super(autor, titulo)
        this.tematica = tematica
        this.paginas = paginas
        this.precio = precio
        this.capitulos = []
    }


    }


    let oLibro = new LibroTecnico("Pepe","Angular","Informatica",200, 30)
    //oLibro.calculaPrecio(1.16)