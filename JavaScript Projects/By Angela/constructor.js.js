// Constructor Function
// it is used to creat objects -> object factory , objects can be created many times with less effort
// starts with capital letter and it is a function, eg GunjanSurti(Constructor) instead of gunjanSurti(variable)

function BellBoy(name , age , hasWorkPermit, languages) {
    this.name = name; // name = input  ,  this.name means this object is going to have property called name
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function (){
         alert("I am " + this.name + ", May I move your Suitcase, Sir!");  // name or this.name both works same
         pickUpSuitcase();  // does nothing
         move();  //  does nothing
    }
}

var bellBoy1 = new BellBoy("Gunjan" , 19 , true , ["Gunjarati" , "Hindi" , "English"]);

var bellBoy2 = new BellBoy("Soham" , 13 , false , ["Gunjarati" , "Hindi" ]);

var bellBoy3 = new BellBoy("Alpha" , 20 , true , ["English"])