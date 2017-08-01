require('dotenv').config()


const fetch = require('node-fetch')

let authObj = {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'X-AUTH-TOKEN': process.env.BE_QUICK_TOKEN,
                }
              }


// FETCH ALL PRODUCTS -> FILTER TO RETURN ONLY PHONES
fetch('https://griz-atom-api.bequickapps.com/products', authObj)
  .then((response) => response.json())
  .then((responseData) => {
    const phones = responseData.products.filter(p =>
      p.product_type_id === 1
    )
    console.log(phones)
    return phones
  })
  .catch(e => {
    console.log(e);
    return e;
  })


// PRODUCT TYPES
// https://griz-atom-api.bequickapps.com/product_types

// - Product Types
//   - Phones: 1
//   - SIM_Card: 2
//   - Plans: 3
//   - Accessories: 4
//   - Shipping Options: 11

// Product Type property on actual Product is
// product_type_id

// GET PRODUCT BY ID
// https://griz-atom-api.bequickapps.com/products?ids%5B%5D=31

// ALL WAREHOUSES
// https://griz-atom-api.bequickapps.com/warehouses
// optionall append /:id


// ALL PRODUCTS
// https://griz-atom-api.bequickapps.com/products


// USER GROUPS
// admins etc
// https://griz-atom-api.bequickapps.com/user_groups/:id


// ALL SUBSCRIBERS (CUSTOMERS)
// https://griz-atom-api.bequickapps.com/subscribers
