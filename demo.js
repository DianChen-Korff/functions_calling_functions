console.log("***")

//adultAge
//if age is >18 - True
//else <18 - False

//helloOrHey
// if age is >18 - "Hello there!"
// else <18 - Hey Kiddo!

const age = (adultAge) => {
    if(adultAge > "18") {
        return "true";
    }   else if (adultAge < "18") {
        return "false";
    }    
};

const helloOrHey = (adultAge) => {
    if(adultAge > "18") {
        return "Hello There!";
    }   else if (adultAge < "18") {
        return "Hey Kiddo!";
    }    
};

console.log (helloOrHey("25"));
console.log (helloOrHey("10"));

//first VAT exercise

const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

//second VAT exercise

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]