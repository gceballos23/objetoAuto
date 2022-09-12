class auto{

    //Variables o atributos

    private propietario:string;
    private modelo:string;
    private marca:string;
    private color:string;
    private ruedaAuxilio: boolean;

    constructor(paramMarca:string, paramModelo:string, paramColor:string ){
        this.marca = paramMarca;
        this.modelo = paramModelo;
        this.color = paramColor;
        this.ruedaAuxilio = false;
    }


    // Funciones     
    getPropietario():string{
        return this.propietario;
    }

    setPropietario(paramPropietario:string):void{
        this.propietario = paramPropietario;
    }

    getModelo():string{
        return this.modelo;
    }

    setModelo(paramModelo: string):void{
        this.modelo = paramModelo;
    }

    getColor():string{
        return this.color;
    }

    setColor(paramColor:string):void{
        this.color = paramColor;
    }

    getRuedaAuxilio():boolean{
        return this.ruedaAuxilio;
    }

    setRuedaAuxilio():void{
        this.ruedaAuxilio = !this.ruedaAuxilio;
    }

}

let miAuto = new auto('VW','GOL POWER','BLANCO');

let colorAuto : string = miAuto.getColor();

console.log('Color del Auto: '+ colorAuto);
