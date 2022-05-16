// Constructor Function

// starts with capital letter and it is a function, eg GunjanSurti(Constructor) instead of gunjanSurti(variable)

function BellBoy(name , age , hasWorkPermit, languages) {
    this.name = name; // name = input  ,  this.name means this object is going to have property called name
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellBoy1 = new BellBoy("Gunjan" , 19 , true , ["Gunjarati" , "Hindi" , "English"]);

var bellBoy2 = new BellBoy("Soham" , 13 , false , ["Gunjarati" , "Hindi" ]);
