import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend();

const Cars = EmberObject.extend({
    brand: null,
    model: null,
    year: null,

    getCarDetails(){
        return `${this.get('brand')} ${this.get('model')} (${this.get('year')})`;
    }
});

let car1 = Cars.create({
    brand : 'Toyota',
    model : 'Camry',
    year : 2024,
});

console.log(car1.getCarDetails());