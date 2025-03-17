import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend();

const Product = EmberObject.extend({
    originalPrice: 100, 

    discountedPrice: computed('originalPrice', function() {
        return this.get('originalPrice') * 0.9; 
    })
});

let product = Product.create({
    originalPrice: 100
});

console.log(`Original Price: $${product.get('originalPrice')}`);
console.log(`Discounted Price: $${product.get('discountedPrice')}`);

product.set('originalPrice', 200);
console.log(`Updated Original Price: $${product.get('originalPrice')}`);
console.log(`Updated Discounted Price: $${product.get('discountedPrice')}`);
