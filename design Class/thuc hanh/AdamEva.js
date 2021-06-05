class Apple {
    constructor () {
        this.weight = 10;
    }

    decrease() {
        if( this. weight >0) {
            this.weight --;
        }
    }

    isEmpty() {
        return this.weight === 0;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {
    constructor (name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender === 'Male';
    }

    setGender(boolean) {
        if (boolean) {
            this.gender = 'Male';
        } else {
            this.gender = 'Female';
        }
    }

    checkApple(apple) {
        let isNotEmpty = apple.isEmpty() !== true;
        return isNotEmpty;
    }

    eat(apple) {
        apple.decrease();
        this.weight++ ;
    }

    say(String) {
        console.log(String);
    }

    getName() {
        return this.name;
    }


    setName(String) {
        this.name = String;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(int) {
        this.weight = int;
    }
}


let apple1 = new Apple();
let Adam = new Human('Adam', 'Male', 80);
let Eva = new Human('Eva', 'Female', 65);
Adam.say( Adam.getName() +' :Good Morning, Eva');
Eva.say( Eva.getName() + ' :Good morning, Adam');
Adam.say( Adam.getName() + " :Let's eat a apple!! ");
Eva.say( Eva.getName() + ' :Yes, Adam!!');
document.write('Quả táo còn ' + apple1.getWeight() + ' miếng <br/>');
while (Eva.checkApple(apple1)) {
    document.write('Adam cắn mất 1 miếng táo <br/>');
    Adam.eat(apple1);
    document.write('Quả táo còn ' + apple1.getWeight() + ' miếng <br/>');
    document.write('Eva cắn mất 1 miếng táo <br/>');
    Eva.eat(apple1);
    document.write('Quả táo còn ' + apple1.getWeight() + ' miếng <br/>');
}



