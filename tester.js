var articlemap = {
        "value1": "value1",
        "value2": function(val, source) {
            return {
                value: source.value1 + source.value2
            };
        },
        "array":"value3",
        "status": "status",
        "subber":{
            "test":"value3",
            "test3":"value1",
            level:{
                value:"sub.test",
                $fixed:true
            }
        },
        "sub.test2":"value3",
        "sub2":{
            name:"aa",
            value:"nok en verdi",
            $fixed:true
        },
        
    
}
var mapper=require("./index");
var map=mapper.create(articlemap);
var result=map.map({
    value1:1,
    value2:2,
    value3:[1,3,5,3,2],
    status:"active",
    sub:{
        test:"Yihaa"
    }
});
console.dir(result);
var themap = {
        "value1": "value1",
        "value2": "value2",
        //You can nest object
        "someObject":{
               val:"value1",
               someInnerObject:{
               val2:"value2"
               }
        },
        //Or write with . notation
        "someObject.someInnerObject.val1":"value1"
}
//var mapper=requirer('objectmapper');
var map=mapper.create(themap);
var res=map.map({
    value1:2,
    value2:3
});
console.dir(res,true);
        