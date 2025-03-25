import Controller from '@ember/controller';
import EmberObject, { observer } from '@ember/object';

export default Controller.extend();

const User = EmberObject.extend({
    isPremiumUser: false,

    premiumStatusObserver: observer('isPremiumUser', function() {
        console.log(`User premium status changed to ${this.get('isPremiumUser')}`);
    })
});

let user = User.create();

user.toggleProperty('isPremiumUser');
user.toggleProperty('isPremiumUser'); 
