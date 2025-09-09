class Vehiculo{
    constructor(){
        this.automovil = 0;
        this.bus = 0;
        this.camion = 0;
    }

    agregarAutomovil(){
        this.automovil++;
    }

    agregarBus(){
        this.bus++;
    }

    agregarCamion(){
        this.camion++;
    }


    totalRecaudado(){
        let totalMonto = this.automovil * 5000 + this.bus * 10000 + this.camion *15000;
        return totalMonto;
    }
}

export default Vehiculo;