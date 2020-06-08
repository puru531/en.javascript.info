"use strict";

describe("byField", function(){
  
  let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  it("sorts users by name", function(){
    let nameSortedKey = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson"},    
      { name: "Pete", age: 18, surname: "Peterson" },
    ];
    let nameSortedAnswer = users.sort(byField("name"));
    assert.equal(JSON.stringify(nameSortedKey), JSON.stringify(nameSortedAnswer));
  });

  it("sorts users by age", function(){
    let ageSortedKey = [
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson"}, 
    ];
    let ageSortedAnswer = users.sort(byField("age"));
    assert.equal(JSON.stringify(ageSortedKey), JSON.stringify(ageSortedKey));
  });

  it("sorts users by surname", function(){
    let surnameSortedKey = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson"},
      { name: "Pete", age: 18, surname: "Peterson" },
    ];
    let surnameSortedAnswer = users.sort(byField("surname"));
    assert.equal(JSON.stringify(surnameSortedAnswer), JSON.stringify(surnameSortedKey));
  });

});