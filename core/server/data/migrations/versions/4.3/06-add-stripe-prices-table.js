const {addTable} = require('../../utils');

module.exports = addTable('stripe_prices', {
    id: {type: 'string', maxlength: 24, nullable: false, primary: true},
    stripe_price_id: {type: 'string', maxlength: 255, nullable: false, unique: true},
    stripe_product_id: {type: 'string', maxlength: 255, nullable: false, unique: false, references: 'stripe_products.stripe_product_id'},
    active: {type: 'boolean', nullable: false},
    livemode: {type: 'boolean', nullable: false},
    nickname: {type: 'string', maxlength: 50, nullable: true},
    currency: {type: 'string', maxLength: 3, nullable: false},
    amount: {type: 'integer', nullable: false},
    type: {type: 'string', maxlength: 50, nullable: false, defaultTo: 'recurring', validations: {isIn: [['recurring', 'one_time']]}},
    interval: {type: 'string', maxlength: 50, nullable: false},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: true}
});
