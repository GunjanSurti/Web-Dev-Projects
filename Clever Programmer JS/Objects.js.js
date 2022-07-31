
 // Objects are variable having multiple properties  

var x = {
    name : "Gunjan"  ,
    age : 19, 
    gender :  "Male",    // no ";" instead do "," also not "=" but its ":" .
    languages : ["Gunjarati" , "Hindi" , "English"] , // array
    moveSuitcase : function () {
     alert("May I move your Suitcase, Sir!");
     pickUpSuitcase();
     move();
    }
}

// x
// {name: 'Gunjan', age: 19, gender: 'Male', languages: Array(3)}

// x.name  -> finds property called name
// 'Gunjan'    


// x.age ->" finds property called age  "
// '19'

// x.gender -> finds property called gender
// 'Male'


// x.languages
// (3) ['Gunjarati', 'Hindi', 'English']

// x.moveSuitcase =>  function () {
//      alert("May I move your Suitcase, Sir!");
//      pickUpSuitcase();
//      move();
//     }


// x.moveSuitcase() => gives alert means run this function