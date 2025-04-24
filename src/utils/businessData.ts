export const STORE_TYPES = {
    RETAIL: 'retail',
    FOOD_STALL: 'food_stall',
    EATERY: 'eatery',
    GROCERY: 'grocery',
    KIOSK: 'kiosk',
    MARKET_VENDOR: 'market_vendor',
    OTHER: 'other'
};

export const storeTypeOptions = [
    { value: '--SELECT--', label: '--SELECT--', disabled: true },
    { value: 'retail', label: 'Retail Store' },
    { value: 'food_stall', label: 'Food Stall / Vendor' },
    { value: 'eatery', label: 'Eatery / Carinderia' },
    { value: 'grocery', label: 'Grocery / Mini Mart' },
    { value: 'kiosk', label: 'Kiosk' },
    { value: 'market_vendor', label: 'Market Vendor' },
    { value: 'other', label: 'Other' }
];

export const productCategoryOptions = [
    { value: '--SELECT--', label: '--SELECT--', disabled: true },
    { value: 'snacks', label: 'Snacks' },
    { value: 'beverages', label: 'Beverages' },
    { value: 'canned_goods', label: 'Canned Goods' },
    { value: 'instant_noodles', label: 'Instant Noodles' },
    { value: 'rice_and_grains', label: 'Rice & Grains' },
    { value: 'bread_and_bakery', label: 'Bread & Bakery' },
    { value: 'frozen_goods', label: 'Frozen Goods' },
    { value: 'condiments_and_sauces', label: 'Condiments & Sauces' },
    { value: 'cooking_essentials', label: 'Cooking Essentials' },
    { value: 'personal_care', label: 'Personal Care' },
    { value: 'cleaning_supplies', label: 'Cleaning Supplies' },
    { value: 'pet_supplies', label: 'Pet Supplies' },
    { value: 'sari_sari_essentials', label: 'Sari-sari Store Essentials' },
    { value: 'e_services', label: 'Mobile Load & E-Services' },
    { value: 'stationery', label: 'Stationery' },
    { value: 'toys_accessories', label: 'Toys & Accessories' },
    { value: 'home_kitchen', label: 'Home & Kitchen Items' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'fruits', label: 'Fruits' },
    { value: 'others', label: 'Others' }
];

export const businessInvestmentTypeOptions = [
    { value: '--SELECT--', label: '--SELECT--', disabled: true },
    { value: 'capital', label: 'Capital' },
    { value: 'raw_materials', label: 'Raw Materials' }
];

export const businessInvestmentSourceTypeOptions = [
    { value: '--SELECT--', label: '--SELECT--', disabled: true },
    { value: 'personal', label: 'Personal' },
    { value: 'loan', label: 'Loan' },
    { value: 'supplier', label: 'Supplier' }
];
  