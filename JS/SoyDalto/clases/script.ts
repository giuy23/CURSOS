interface Telefono {
  color: string;
  peso: string;
  pantalla: string;
  camara: string;
  ram: string;
  encendido: boolean;
  nuevaCamara?: string;
}

class Celular implements Telefono {
  color: string;
  peso: string;
  pantalla: string;
  camara: string;
  ram: string;
  encendido: boolean;
  
  constructor(color, peso, pantalla, camara, ram) {
    this.color = color;
    this.peso = peso;
    this.pantalla = pantalla;
    this.camara = camara;
    this.ram = ram;
    this.encendido = false;
  }

  presionarBtn() {
    if (this.encendido === false) {
      this.encendido = true;
      document.write(`El celular se ha encendido <br>`);
    } else {
      this.encendido = false;
      document.write(`El celular se ha apagado <br>`);
    }
  }
  reiniciar() {
    if (this.encendido === true) {
      document.write(`El celular se ha reiniciado <br>`);
    } else {
      document.write(`El celular está apagado <br>`);
    }
  }
  tomarFoto() {
    document.write(`El celular ha tomado una foto <br>`);
  }
  grabar() {
    document.write(`El celular está grabando <br>`);
  }
}

class AltaGama extends Celular {
  nuevaCamara: string;
  constructor(color, peso, pantalla, camara, ram, nuevaCamara) {
    super(color, peso, pantalla, camara, ram);
    this.nuevaCamara = nuevaCamara;
  }
  grabarLento() {
    document.write(`El celular está grabando en cámara super lenta <br>`);
  }

  reconocimientoFacial() {
    document.write(`El celular está reconociendo su rostro <br>`);
  }
}

const huawei = new Celular("negro", "35", "16", "42px", "8gb");
const nokia = new AltaGama("azul", "200", '7"', "42px", "12gb", "18px");

huawei.presionarBtn();
huawei.grabar();
huawei.reiniciar();
huawei.presionarBtn();

document.write("<hr>");

nokia.presionarBtn();
nokia.grabarLento();
nokia.reconocimientoFacial();
