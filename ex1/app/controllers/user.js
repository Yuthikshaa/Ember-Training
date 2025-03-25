import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend();

const Person = EmberObject.extend({
    firstName: null,
    lastName: null,

    fullName: computed('firstName', 'lastName', function(){
        return `${this.get('firstName')} ${this.get('lastName')}`;
    })
});

let person = Person.create({
    firstName: 'John',
    lastName: 'Doe'
});

console.log(person.get('fullName')); 
person.set('firstName', 'Jane');
console.log(person.get('fullName')); 