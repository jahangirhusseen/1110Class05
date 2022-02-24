// Age function Value
let name = prompt('Enter Your Name : ');
let year = Number(prompt('Enter Your Years : '))
// // Area Calculation
let type =prompt('Type : Rectangle / Square / triangle');
let length =parseInt(prompt('Length'));
let width =parseInt(prompt('Width'));

// // BMI Calculation
let w= Number(prompt('Your Weight (kg): '));
let h=Number(prompt('Your Height (cm): '));

// Currentcy Calculation
let currency =prompt('Enter Your Currency Name : USD/CAD/POUND/EURO ');
let amount =Number(prompt('Enter Your Amount : '));

// Old Cal

let s_name =prompt('Enter Your Name');
let age =parseInt(prompt('Enter Your Age'));


function Cala(){
    this.agecal = function(name, year){
        return `hi ${name}, your are ${ 2021 - year } Years old`;
    }
    // area of a rectangle, square, triangle
    this.area = function (type,length,width){
        if(type == 'square'){
            return length * length;
        }else if(type == 'rectangular'){
            return length * width;
        }else if( type == 'triangle'){
            return .5 * length * width;
        }
        else{
            return(`Please Select the Correct Type`);
        }
    }

    this.bmiCal =  function(w,h){
        this.bmi;
        if( w == ""  || h == ""){
            alert(`Please Fill in everything correctly`);
        }
        else{ 
           
           return  bmi = w / (h/100 * h/100);
        } 
   }
   this.currencyCon = function (currency,amount){
    this.total;
    if ( currency == 'usd' || currency == 'Usd' || currency == 'USD' ) {
       total = `${amount} USD = ${amount * 84} BDT `;
    }
    else if ( currency == 'cad' || currency == 'Cad' || currency == 'CAD' ) {
        total = `${amount} CAD = ${amount * 66} BDT `;
     }
     else if ( currency == 'pound' || currency == 'Pound' || currency == 'POUND' ) {
        total = `${amount} POUND = ${amount * 90} BDT `;
     }
     else if ( currency == 'euro' || currency == 'Euro' || currency == 'EURO' ) {
        total = `${amount} EURO = ${amount * 115} BDT `;
     }
     else if(amount == ''){
        alert(`Please Fill in amount correctly`);
     }
     else{
        alert(`Please Fill in everything correctly`);
     }
    return total;
}

    this.peopleYearsCal =  function (age) {
    this.agesteps;
    if (age >= 1 && age <5) {
        agesteps = `Hi ${s_name} You are children now`;
    }
    else if (age >= 5 && age <18) {
        agesteps = `Hi ${s_name} You are teenagers now`;
    }
    else if (age >= 18 && age <32) {
        agesteps = ` Hi ${s_name} You are young now`; 
    }
    else if (age >= 32 && age <50) {
        agesteps = `Hi ${s_name} You are Maturity now`;
    }
    else if (age >= 50 && age <150) {
        agesteps = `Hi ${s_name} You are Old now`;
    }
    else{
        alert(`Please Fill in everything correctly`);
    }
    return agesteps;
}




}
 result = new Cala();
console.log(`
                AGECAL

${result.agecal(name,year)}
================================

Land             = ${length}
Width            = ${width}
=============================================
Area of a ${type} = ${result.area(type,length,width)}

                BMI Result

Your BMI =   ${result.bmiCal(w,h).toFixed(2)}

                Currency Result

${result.currencyCon(currency,amount)}

                Currency Result

 ${result.peopleYearsCal(age)}
`);


