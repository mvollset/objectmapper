** Object mapper **
Module for mapping objects to other objects using a map.
E.g
'''js
var themap = {
        "value1": "value1",
        "value2": "value2",
        "sumOfValue":function(value,sourceobject){
            return sourceobject.value1 + sourceobject.value2
        }
}
var mapper=requirer('objectmapper');
var map=mapper.create(themap);
var res=map.map({
    value1:2,
    value2:3
});
console.dir(res,true);
//Outputs
//{ value1: 2, value2: 3, sumOfValue: 5 }
//

