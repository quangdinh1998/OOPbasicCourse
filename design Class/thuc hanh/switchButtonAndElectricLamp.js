class SwitchButton {
    constructor (lamp) {
       
        this.ElectricLamp = lamp;
    }

    connectToLamp(ElectricLamp) {
        document.write('Công tắc đã nối đến đèn');
    }

    switchOff() {
        console.log('Công tắc đang ngắt');
        this.status = false;
        this.ElectricLamp.turnOff();
    }
    
    switchOn() {
        console.log('Công tắc đang đóng');
        this.status = true;
        this.ElectricLamp.turnOn();
    }

}

class ElectricLamp {
    constructor() {
      
    }

    turnOn() {
        console.log('Đèn đang sáng');
    }

    turnOff() {
        console.log(' Đèn đang tắt');
    }
}

let lamp1 =  new ElectricLamp();
let switchButton = new SwitchButton(lamp1);

switchButton.connectToLamp(lamp1);
for (let i = 1; i <=10; i++) {
    switchButton.switchOn();
    switchButton.switchOff();
}