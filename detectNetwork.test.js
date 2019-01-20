/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   // it('Throws an error so it fails', function() {
//   //   throw new Error('Delete me!');
//   // });

//   // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//   //   // This test doesn't really test anything at all! It will pass no matter what.
//   //   var even = function(num){
//   //     return num/2 === 0;
//   //   }
//   //   return even(10) === true;
//   // });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var assert = chai.assert;
 
  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011567890123456') === 'Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011567890123456789') === 'Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    assert(detectNetwork('6444567890123456') === 'Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    assert(detectNetwork('6444567890123456789') === 'Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    assert(detectNetwork('6454567890123456') === 'Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    assert(detectNetwork('6454567890123456789') === 'Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    assert(detectNetwork('6464567890123456') === 'Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    assert(detectNetwork('6464567890123456789') === 'Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    assert(detectNetwork('6474567890123456') === 'Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    assert(detectNetwork('6474567890123456789') === 'Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    assert(detectNetwork('6484567890123456') === 'Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    assert(detectNetwork('6484567890123456789') === 'Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    assert(detectNetwork('6494567890123456') === 'Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    assert(detectNetwork('6494567890123456789') === 'Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6544567890123456') === 'Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6544567890123456789') === 'Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card. Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
var expect = chai.expect;
 
  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501856789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50185678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50185678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018567890123456789')).to.equal('Maestro');
  });


  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502056789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50205678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502056789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50205678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502056789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020567890123456789')).to.equal('Maestro');
  });


  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503856789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038567890123')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50385678901234')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503856789012345')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50385678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503856789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038567890123456789')).to.equal('Maestro');
  });


  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630456789012')).to.equal('Maestro');
  });
 
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304567890123')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63045678901234')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630456789012345')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304567890123456')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63045678901234567')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630456789012345678')).to.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304567890123456789')).to.equal('Maestro');
  });

});



describe('should support China UnionPay', function() {
  var assert = chai.assert;
  
   
  it('has a prefix of 622126 and a length of 16', function() {assert(detectNetwork('6221267890123456') === 'China UnionPay');})
  it('has a prefix of 622127 and a length of 16', function() {assert(detectNetwork('6221277890123456') === 'China UnionPay');})
  it('has a prefix of 622128 and a length of 16', function() {assert(detectNetwork('6221287890123456') === 'China UnionPay');})
  it('has a prefix of 622129 and a length of 16', function() {assert(detectNetwork('6221297890123456') === 'China UnionPay');})
  it('has a prefix of 622130 and a length of 16', function() {assert(detectNetwork('6221307890123456') === 'China UnionPay');})
  it('has a prefix of 622131 and a length of 16', function() {assert(detectNetwork('6221317890123456') === 'China UnionPay');})
  it('has a prefix of 622132 and a length of 16', function() {assert(detectNetwork('6221327890123456') === 'China UnionPay');})
  it('has a prefix of 622133 and a length of 16', function() {assert(detectNetwork('6221337890123456') === 'China UnionPay');})
  it('has a prefix of 622134 and a length of 16', function() {assert(detectNetwork('6221347890123456') === 'China UnionPay');})
  it('has a prefix of 622135 and a length of 16', function() {assert(detectNetwork('6221357890123456') === 'China UnionPay');})
  it('has a prefix of 622136 and a length of 16', function() {assert(detectNetwork('6221367890123456') === 'China UnionPay');})
  it('has a prefix of 622137 and a length of 16', function() {assert(detectNetwork('6221377890123456') === 'China UnionPay');})
  it('has a prefix of 622138 and a length of 16', function() {assert(detectNetwork('6221387890123456') === 'China UnionPay');})
  it('has a prefix of 622139 and a length of 16', function() {assert(detectNetwork('6221397890123456') === 'China UnionPay');})
  it('has a prefix of 622140 and a length of 16', function() {assert(detectNetwork('6221407890123456') === 'China UnionPay');})
  it('has a prefix of 622141 and a length of 16', function() {assert(detectNetwork('6221417890123456') === 'China UnionPay');})
  it('has a prefix of 622142 and a length of 16', function() {assert(detectNetwork('6221427890123456') === 'China UnionPay');})
  it('has a prefix of 622143 and a length of 16', function() {assert(detectNetwork('6221437890123456') === 'China UnionPay');})
  it('has a prefix of 622144 and a length of 16', function() {assert(detectNetwork('6221447890123456') === 'China UnionPay');})
  it('has a prefix of 622145 and a length of 16', function() {assert(detectNetwork('6221457890123456') === 'China UnionPay');})
  it('has a prefix of 622146 and a length of 16', function() {assert(detectNetwork('6221467890123456') === 'China UnionPay');})
  it('has a prefix of 622147 and a length of 16', function() {assert(detectNetwork('6221477890123456') === 'China UnionPay');})
  it('has a prefix of 622148 and a length of 16', function() {assert(detectNetwork('6221487890123456') === 'China UnionPay');})
  it('has a prefix of 622149 and a length of 16', function() {assert(detectNetwork('6221497890123456') === 'China UnionPay');})
  it('has a prefix of 622150 and a length of 16', function() {assert(detectNetwork('6221507890123456') === 'China UnionPay');})
  it('has a prefix of 622151 and a length of 16', function() {assert(detectNetwork('6221517890123456') === 'China UnionPay');})
  it('has a prefix of 622152 and a length of 16', function() {assert(detectNetwork('6221527890123456') === 'China UnionPay');})
  it('has a prefix of 622153 and a length of 16', function() {assert(detectNetwork('6221537890123456') === 'China UnionPay');})
  it('has a prefix of 622154 and a length of 16', function() {assert(detectNetwork('6221547890123456') === 'China UnionPay');})
  it('has a prefix of 622155 and a length of 16', function() {assert(detectNetwork('6221557890123456') === 'China UnionPay');})
  it('has a prefix of 622156 and a length of 16', function() {assert(detectNetwork('6221567890123456') === 'China UnionPay');})
  it('has a prefix of 622157 and a length of 16', function() {assert(detectNetwork('6221577890123456') === 'China UnionPay');})
  it('has a prefix of 622158 and a length of 16', function() {assert(detectNetwork('6221587890123456') === 'China UnionPay');})
  it('has a prefix of 622159 and a length of 16', function() {assert(detectNetwork('6221597890123456') === 'China UnionPay');})
  it('has a prefix of 622160 and a length of 16', function() {assert(detectNetwork('6221607890123456') === 'China UnionPay');})
  it('has a prefix of 622161 and a length of 16', function() {assert(detectNetwork('6221617890123456') === 'China UnionPay');})
  it('has a prefix of 622162 and a length of 16', function() {assert(detectNetwork('6221627890123456') === 'China UnionPay');})
  it('has a prefix of 622163 and a length of 16', function() {assert(detectNetwork('6221637890123456') === 'China UnionPay');})
  it('has a prefix of 622164 and a length of 16', function() {assert(detectNetwork('6221647890123456') === 'China UnionPay');})
  it('has a prefix of 622165 and a length of 16', function() {assert(detectNetwork('6221657890123456') === 'China UnionPay');})
  it('has a prefix of 622166 and a length of 16', function() {assert(detectNetwork('6221667890123456') === 'China UnionPay');})
  it('has a prefix of 622167 and a length of 16', function() {assert(detectNetwork('6221677890123456') === 'China UnionPay');})
  it('has a prefix of 622168 and a length of 16', function() {assert(detectNetwork('6221687890123456') === 'China UnionPay');})
  it('has a prefix of 622169 and a length of 16', function() {assert(detectNetwork('6221697890123456') === 'China UnionPay');})
  it('has a prefix of 622170 and a length of 16', function() {assert(detectNetwork('6221707890123456') === 'China UnionPay');})
  it('has a prefix of 622171 and a length of 16', function() {assert(detectNetwork('6221717890123456') === 'China UnionPay');})
  it('has a prefix of 622172 and a length of 16', function() {assert(detectNetwork('6221727890123456') === 'China UnionPay');})
  it('has a prefix of 622173 and a length of 16', function() {assert(detectNetwork('6221737890123456') === 'China UnionPay');})
  it('has a prefix of 622174 and a length of 16', function() {assert(detectNetwork('6221747890123456') === 'China UnionPay');})
  it('has a prefix of 622175 and a length of 16', function() {assert(detectNetwork('6221757890123456') === 'China UnionPay');})
  it('has a prefix of 622176 and a length of 16', function() {assert(detectNetwork('6221767890123456') === 'China UnionPay');})
  it('has a prefix of 622177 and a length of 16', function() {assert(detectNetwork('6221777890123456') === 'China UnionPay');})
  it('has a prefix of 622178 and a length of 16', function() {assert(detectNetwork('6221787890123456') === 'China UnionPay');})
  it('has a prefix of 622179 and a length of 16', function() {assert(detectNetwork('6221797890123456') === 'China UnionPay');})
  it('has a prefix of 622180 and a length of 16', function() {assert(detectNetwork('6221807890123456') === 'China UnionPay');})
  it('has a prefix of 622181 and a length of 16', function() {assert(detectNetwork('6221817890123456') === 'China UnionPay');})
  it('has a prefix of 622182 and a length of 16', function() {assert(detectNetwork('6221827890123456') === 'China UnionPay');})
  it('has a prefix of 622183 and a length of 16', function() {assert(detectNetwork('6221837890123456') === 'China UnionPay');})
  it('has a prefix of 622184 and a length of 16', function() {assert(detectNetwork('6221847890123456') === 'China UnionPay');})
  it('has a prefix of 622185 and a length of 16', function() {assert(detectNetwork('6221857890123456') === 'China UnionPay');})
  it('has a prefix of 622186 and a length of 16', function() {assert(detectNetwork('6221867890123456') === 'China UnionPay');})
  it('has a prefix of 622187 and a length of 16', function() {assert(detectNetwork('6221877890123456') === 'China UnionPay');})
  it('has a prefix of 622188 and a length of 16', function() {assert(detectNetwork('6221887890123456') === 'China UnionPay');})
  it('has a prefix of 622189 and a length of 16', function() {assert(detectNetwork('6221897890123456') === 'China UnionPay');})
  it('has a prefix of 622190 and a length of 16', function() {assert(detectNetwork('6221907890123456') === 'China UnionPay');})
  it('has a prefix of 622191 and a length of 16', function() {assert(detectNetwork('6221917890123456') === 'China UnionPay');})
  it('has a prefix of 622192 and a length of 16', function() {assert(detectNetwork('6221927890123456') === 'China UnionPay');})
  it('has a prefix of 622193 and a length of 16', function() {assert(detectNetwork('6221937890123456') === 'China UnionPay');})
  it('has a prefix of 622194 and a length of 16', function() {assert(detectNetwork('6221947890123456') === 'China UnionPay');})
  it('has a prefix of 622195 and a length of 16', function() {assert(detectNetwork('6221957890123456') === 'China UnionPay');})
  it('has a prefix of 622196 and a length of 16', function() {assert(detectNetwork('6221967890123456') === 'China UnionPay');})
  it('has a prefix of 622197 and a length of 16', function() {assert(detectNetwork('6221977890123456') === 'China UnionPay');})
  it('has a prefix of 622198 and a length of 16', function() {assert(detectNetwork('6221987890123456') === 'China UnionPay');})
  it('has a prefix of 622199 and a length of 16', function() {assert(detectNetwork('6221997890123456') === 'China UnionPay');})
  it('has a prefix of 622200 and a length of 16', function() {assert(detectNetwork('6222007890123456') === 'China UnionPay');})
  it('has a prefix of 622201 and a length of 16', function() {assert(detectNetwork('6222017890123456') === 'China UnionPay');})
  it('has a prefix of 622202 and a length of 16', function() {assert(detectNetwork('6222027890123456') === 'China UnionPay');})
  it('has a prefix of 622203 and a length of 16', function() {assert(detectNetwork('6222037890123456') === 'China UnionPay');})
  it('has a prefix of 622204 and a length of 16', function() {assert(detectNetwork('6222047890123456') === 'China UnionPay');})
  it('has a prefix of 622205 and a length of 16', function() {assert(detectNetwork('6222057890123456') === 'China UnionPay');})
  it('has a prefix of 622206 and a length of 16', function() {assert(detectNetwork('6222067890123456') === 'China UnionPay');})
  it('has a prefix of 622207 and a length of 16', function() {assert(detectNetwork('6222077890123456') === 'China UnionPay');})
  it('has a prefix of 622208 and a length of 16', function() {assert(detectNetwork('6222087890123456') === 'China UnionPay');})
  it('has a prefix of 622209 and a length of 16', function() {assert(detectNetwork('6222097890123456') === 'China UnionPay');})
  it('has a prefix of 622210 and a length of 16', function() {assert(detectNetwork('6222107890123456') === 'China UnionPay');})
  it('has a prefix of 622211 and a length of 16', function() {assert(detectNetwork('6222117890123456') === 'China UnionPay');})
  it('has a prefix of 622212 and a length of 16', function() {assert(detectNetwork('6222127890123456') === 'China UnionPay');})
  it('has a prefix of 622213 and a length of 16', function() {assert(detectNetwork('6222137890123456') === 'China UnionPay');})
  it('has a prefix of 622214 and a length of 16', function() {assert(detectNetwork('6222147890123456') === 'China UnionPay');})
  it('has a prefix of 622215 and a length of 16', function() {assert(detectNetwork('6222157890123456') === 'China UnionPay');})
  it('has a prefix of 622216 and a length of 16', function() {assert(detectNetwork('6222167890123456') === 'China UnionPay');})
  it('has a prefix of 622217 and a length of 16', function() {assert(detectNetwork('6222177890123456') === 'China UnionPay');})
  it('has a prefix of 622218 and a length of 16', function() {assert(detectNetwork('6222187890123456') === 'China UnionPay');})
  it('has a prefix of 622219 and a length of 16', function() {assert(detectNetwork('6222197890123456') === 'China UnionPay');})
  it('has a prefix of 622220 and a length of 16', function() {assert(detectNetwork('6222207890123456') === 'China UnionPay');})
  it('has a prefix of 622221 and a length of 16', function() {assert(detectNetwork('6222217890123456') === 'China UnionPay');})
  it('has a prefix of 622222 and a length of 16', function() {assert(detectNetwork('6222227890123456') === 'China UnionPay');})
  it('has a prefix of 622223 and a length of 16', function() {assert(detectNetwork('6222237890123456') === 'China UnionPay');})
  it('has a prefix of 622224 and a length of 16', function() {assert(detectNetwork('6222247890123456') === 'China UnionPay');})
  it('has a prefix of 622225 and a length of 16', function() {assert(detectNetwork('6222257890123456') === 'China UnionPay');})
  it('has a prefix of 622226 and a length of 16', function() {assert(detectNetwork('6222267890123456') === 'China UnionPay');})
  it('has a prefix of 622227 and a length of 16', function() {assert(detectNetwork('6222277890123456') === 'China UnionPay');})
  it('has a prefix of 622228 and a length of 16', function() {assert(detectNetwork('6222287890123456') === 'China UnionPay');})
  it('has a prefix of 622229 and a length of 16', function() {assert(detectNetwork('6222297890123456') === 'China UnionPay');})
  it('has a prefix of 622230 and a length of 16', function() {assert(detectNetwork('6222307890123456') === 'China UnionPay');})
  it('has a prefix of 622231 and a length of 16', function() {assert(detectNetwork('6222317890123456') === 'China UnionPay');})
  it('has a prefix of 622232 and a length of 16', function() {assert(detectNetwork('6222327890123456') === 'China UnionPay');})
  it('has a prefix of 622233 and a length of 16', function() {assert(detectNetwork('6222337890123456') === 'China UnionPay');})
  it('has a prefix of 622234 and a length of 16', function() {assert(detectNetwork('6222347890123456') === 'China UnionPay');})
  it('has a prefix of 622235 and a length of 16', function() {assert(detectNetwork('6222357890123456') === 'China UnionPay');})
  it('has a prefix of 622236 and a length of 16', function() {assert(detectNetwork('6222367890123456') === 'China UnionPay');})
  it('has a prefix of 622237 and a length of 16', function() {assert(detectNetwork('6222377890123456') === 'China UnionPay');})
  it('has a prefix of 622238 and a length of 16', function() {assert(detectNetwork('6222387890123456') === 'China UnionPay');})
  it('has a prefix of 622239 and a length of 16', function() {assert(detectNetwork('6222397890123456') === 'China UnionPay');})
  it('has a prefix of 622240 and a length of 16', function() {assert(detectNetwork('6222407890123456') === 'China UnionPay');})
  it('has a prefix of 622241 and a length of 16', function() {assert(detectNetwork('6222417890123456') === 'China UnionPay');})
  it('has a prefix of 622242 and a length of 16', function() {assert(detectNetwork('6222427890123456') === 'China UnionPay');})
  it('has a prefix of 622243 and a length of 16', function() {assert(detectNetwork('6222437890123456') === 'China UnionPay');})
  it('has a prefix of 622244 and a length of 16', function() {assert(detectNetwork('6222447890123456') === 'China UnionPay');})
  it('has a prefix of 622245 and a length of 16', function() {assert(detectNetwork('6222457890123456') === 'China UnionPay');})
  it('has a prefix of 622246 and a length of 16', function() {assert(detectNetwork('6222467890123456') === 'China UnionPay');})
  it('has a prefix of 622247 and a length of 16', function() {assert(detectNetwork('6222477890123456') === 'China UnionPay');})
  it('has a prefix of 622248 and a length of 16', function() {assert(detectNetwork('6222487890123456') === 'China UnionPay');})
  it('has a prefix of 622249 and a length of 16', function() {assert(detectNetwork('6222497890123456') === 'China UnionPay');})
  it('has a prefix of 622250 and a length of 16', function() {assert(detectNetwork('6222507890123456') === 'China UnionPay');})
  it('has a prefix of 622251 and a length of 16', function() {assert(detectNetwork('6222517890123456') === 'China UnionPay');})
  it('has a prefix of 622252 and a length of 16', function() {assert(detectNetwork('6222527890123456') === 'China UnionPay');})
  it('has a prefix of 622253 and a length of 16', function() {assert(detectNetwork('6222537890123456') === 'China UnionPay');})
  it('has a prefix of 622254 and a length of 16', function() {assert(detectNetwork('6222547890123456') === 'China UnionPay');})
  it('has a prefix of 622255 and a length of 16', function() {assert(detectNetwork('6222557890123456') === 'China UnionPay');})
  it('has a prefix of 622256 and a length of 16', function() {assert(detectNetwork('6222567890123456') === 'China UnionPay');})
  it('has a prefix of 622257 and a length of 16', function() {assert(detectNetwork('6222577890123456') === 'China UnionPay');})
  it('has a prefix of 622258 and a length of 16', function() {assert(detectNetwork('6222587890123456') === 'China UnionPay');})
  it('has a prefix of 622259 and a length of 16', function() {assert(detectNetwork('6222597890123456') === 'China UnionPay');})
  it('has a prefix of 622260 and a length of 16', function() {assert(detectNetwork('6222607890123456') === 'China UnionPay');})
  it('has a prefix of 622261 and a length of 16', function() {assert(detectNetwork('6222617890123456') === 'China UnionPay');})
  it('has a prefix of 622262 and a length of 16', function() {assert(detectNetwork('6222627890123456') === 'China UnionPay');})
  it('has a prefix of 622263 and a length of 16', function() {assert(detectNetwork('6222637890123456') === 'China UnionPay');})
  it('has a prefix of 622264 and a length of 16', function() {assert(detectNetwork('6222647890123456') === 'China UnionPay');})
  it('has a prefix of 622265 and a length of 16', function() {assert(detectNetwork('6222657890123456') === 'China UnionPay');})
  it('has a prefix of 622266 and a length of 16', function() {assert(detectNetwork('6222667890123456') === 'China UnionPay');})
  it('has a prefix of 622267 and a length of 16', function() {assert(detectNetwork('6222677890123456') === 'China UnionPay');})
  it('has a prefix of 622268 and a length of 16', function() {assert(detectNetwork('6222687890123456') === 'China UnionPay');})
  it('has a prefix of 622269 and a length of 16', function() {assert(detectNetwork('6222697890123456') === 'China UnionPay');})
  it('has a prefix of 622270 and a length of 16', function() {assert(detectNetwork('6222707890123456') === 'China UnionPay');})
  it('has a prefix of 622271 and a length of 16', function() {assert(detectNetwork('6222717890123456') === 'China UnionPay');})
  it('has a prefix of 622272 and a length of 16', function() {assert(detectNetwork('6222727890123456') === 'China UnionPay');})
  it('has a prefix of 622273 and a length of 16', function() {assert(detectNetwork('6222737890123456') === 'China UnionPay');})
  it('has a prefix of 622274 and a length of 16', function() {assert(detectNetwork('6222747890123456') === 'China UnionPay');})
  it('has a prefix of 622275 and a length of 16', function() {assert(detectNetwork('6222757890123456') === 'China UnionPay');})
  it('has a prefix of 622276 and a length of 16', function() {assert(detectNetwork('6222767890123456') === 'China UnionPay');})
  it('has a prefix of 622277 and a length of 16', function() {assert(detectNetwork('6222777890123456') === 'China UnionPay');})
  it('has a prefix of 622278 and a length of 16', function() {assert(detectNetwork('6222787890123456') === 'China UnionPay');})
  it('has a prefix of 622279 and a length of 16', function() {assert(detectNetwork('6222797890123456') === 'China UnionPay');})
  it('has a prefix of 622280 and a length of 16', function() {assert(detectNetwork('6222807890123456') === 'China UnionPay');})
  it('has a prefix of 622281 and a length of 16', function() {assert(detectNetwork('6222817890123456') === 'China UnionPay');})
  it('has a prefix of 622282 and a length of 16', function() {assert(detectNetwork('6222827890123456') === 'China UnionPay');})
  it('has a prefix of 622283 and a length of 16', function() {assert(detectNetwork('6222837890123456') === 'China UnionPay');})
  it('has a prefix of 622284 and a length of 16', function() {assert(detectNetwork('6222847890123456') === 'China UnionPay');})
  it('has a prefix of 622285 and a length of 16', function() {assert(detectNetwork('6222857890123456') === 'China UnionPay');})
  it('has a prefix of 622286 and a length of 16', function() {assert(detectNetwork('6222867890123456') === 'China UnionPay');})
  it('has a prefix of 622287 and a length of 16', function() {assert(detectNetwork('6222877890123456') === 'China UnionPay');})
  it('has a prefix of 622288 and a length of 16', function() {assert(detectNetwork('6222887890123456') === 'China UnionPay');})
  it('has a prefix of 622289 and a length of 16', function() {assert(detectNetwork('6222897890123456') === 'China UnionPay');})
  it('has a prefix of 622290 and a length of 16', function() {assert(detectNetwork('6222907890123456') === 'China UnionPay');})
  it('has a prefix of 622291 and a length of 16', function() {assert(detectNetwork('6222917890123456') === 'China UnionPay');})
  it('has a prefix of 622292 and a length of 16', function() {assert(detectNetwork('6222927890123456') === 'China UnionPay');})
  it('has a prefix of 622293 and a length of 16', function() {assert(detectNetwork('6222937890123456') === 'China UnionPay');})
  it('has a prefix of 622294 and a length of 16', function() {assert(detectNetwork('6222947890123456') === 'China UnionPay');})
  it('has a prefix of 622295 and a length of 16', function() {assert(detectNetwork('6222957890123456') === 'China UnionPay');})
  it('has a prefix of 622296 and a length of 16', function() {assert(detectNetwork('6222967890123456') === 'China UnionPay');})
  it('has a prefix of 622297 and a length of 16', function() {assert(detectNetwork('6222977890123456') === 'China UnionPay');})
  it('has a prefix of 622298 and a length of 16', function() {assert(detectNetwork('6222987890123456') === 'China UnionPay');})
  it('has a prefix of 622299 and a length of 16', function() {assert(detectNetwork('6222997890123456') === 'China UnionPay');})
  it('has a prefix of 622300 and a length of 16', function() {assert(detectNetwork('6223007890123456') === 'China UnionPay');})
  it('has a prefix of 622301 and a length of 16', function() {assert(detectNetwork('6223017890123456') === 'China UnionPay');})
  it('has a prefix of 622302 and a length of 16', function() {assert(detectNetwork('6223027890123456') === 'China UnionPay');})
  it('has a prefix of 622303 and a length of 16', function() {assert(detectNetwork('6223037890123456') === 'China UnionPay');})
  it('has a prefix of 622304 and a length of 16', function() {assert(detectNetwork('6223047890123456') === 'China UnionPay');})
  it('has a prefix of 622305 and a length of 16', function() {assert(detectNetwork('6223057890123456') === 'China UnionPay');})
  it('has a prefix of 622306 and a length of 16', function() {assert(detectNetwork('6223067890123456') === 'China UnionPay');})
  it('has a prefix of 622307 and a length of 16', function() {assert(detectNetwork('6223077890123456') === 'China UnionPay');})
  it('has a prefix of 622308 and a length of 16', function() {assert(detectNetwork('6223087890123456') === 'China UnionPay');})
  it('has a prefix of 622309 and a length of 16', function() {assert(detectNetwork('6223097890123456') === 'China UnionPay');})
  it('has a prefix of 622310 and a length of 16', function() {assert(detectNetwork('6223107890123456') === 'China UnionPay');})
  it('has a prefix of 622311 and a length of 16', function() {assert(detectNetwork('6223117890123456') === 'China UnionPay');})
  it('has a prefix of 622312 and a length of 16', function() {assert(detectNetwork('6223127890123456') === 'China UnionPay');})
  it('has a prefix of 622313 and a length of 16', function() {assert(detectNetwork('6223137890123456') === 'China UnionPay');})
  it('has a prefix of 622314 and a length of 16', function() {assert(detectNetwork('6223147890123456') === 'China UnionPay');})
  it('has a prefix of 622315 and a length of 16', function() {assert(detectNetwork('6223157890123456') === 'China UnionPay');})
  it('has a prefix of 622316 and a length of 16', function() {assert(detectNetwork('6223167890123456') === 'China UnionPay');})
  it('has a prefix of 622317 and a length of 16', function() {assert(detectNetwork('6223177890123456') === 'China UnionPay');})
  it('has a prefix of 622318 and a length of 16', function() {assert(detectNetwork('6223187890123456') === 'China UnionPay');})
  it('has a prefix of 622319 and a length of 16', function() {assert(detectNetwork('6223197890123456') === 'China UnionPay');})
  it('has a prefix of 622320 and a length of 16', function() {assert(detectNetwork('6223207890123456') === 'China UnionPay');})
  it('has a prefix of 622321 and a length of 16', function() {assert(detectNetwork('6223217890123456') === 'China UnionPay');})
  it('has a prefix of 622322 and a length of 16', function() {assert(detectNetwork('6223227890123456') === 'China UnionPay');})
  it('has a prefix of 622323 and a length of 16', function() {assert(detectNetwork('6223237890123456') === 'China UnionPay');})
  it('has a prefix of 622324 and a length of 16', function() {assert(detectNetwork('6223247890123456') === 'China UnionPay');})
  it('has a prefix of 622325 and a length of 16', function() {assert(detectNetwork('6223257890123456') === 'China UnionPay');})
  it('has a prefix of 622326 and a length of 16', function() {assert(detectNetwork('6223267890123456') === 'China UnionPay');})
  it('has a prefix of 622327 and a length of 16', function() {assert(detectNetwork('6223277890123456') === 'China UnionPay');})
  it('has a prefix of 622328 and a length of 16', function() {assert(detectNetwork('6223287890123456') === 'China UnionPay');})
  it('has a prefix of 622329 and a length of 16', function() {assert(detectNetwork('6223297890123456') === 'China UnionPay');})
  it('has a prefix of 622330 and a length of 16', function() {assert(detectNetwork('6223307890123456') === 'China UnionPay');})
  it('has a prefix of 622331 and a length of 16', function() {assert(detectNetwork('6223317890123456') === 'China UnionPay');})
  it('has a prefix of 622332 and a length of 16', function() {assert(detectNetwork('6223327890123456') === 'China UnionPay');})
  it('has a prefix of 622333 and a length of 16', function() {assert(detectNetwork('6223337890123456') === 'China UnionPay');})
  it('has a prefix of 622334 and a length of 16', function() {assert(detectNetwork('6223347890123456') === 'China UnionPay');})
  it('has a prefix of 622335 and a length of 16', function() {assert(detectNetwork('6223357890123456') === 'China UnionPay');})
  it('has a prefix of 622336 and a length of 16', function() {assert(detectNetwork('6223367890123456') === 'China UnionPay');})
  it('has a prefix of 622337 and a length of 16', function() {assert(detectNetwork('6223377890123456') === 'China UnionPay');})
  it('has a prefix of 622338 and a length of 16', function() {assert(detectNetwork('6223387890123456') === 'China UnionPay');})
  it('has a prefix of 622339 and a length of 16', function() {assert(detectNetwork('6223397890123456') === 'China UnionPay');})
  it('has a prefix of 622340 and a length of 16', function() {assert(detectNetwork('6223407890123456') === 'China UnionPay');})
  it('has a prefix of 622341 and a length of 16', function() {assert(detectNetwork('6223417890123456') === 'China UnionPay');})
  it('has a prefix of 622342 and a length of 16', function() {assert(detectNetwork('6223427890123456') === 'China UnionPay');})
  it('has a prefix of 622343 and a length of 16', function() {assert(detectNetwork('6223437890123456') === 'China UnionPay');})
  it('has a prefix of 622344 and a length of 16', function() {assert(detectNetwork('6223447890123456') === 'China UnionPay');})
  it('has a prefix of 622345 and a length of 16', function() {assert(detectNetwork('6223457890123456') === 'China UnionPay');})
  it('has a prefix of 622346 and a length of 16', function() {assert(detectNetwork('6223467890123456') === 'China UnionPay');})
  it('has a prefix of 622347 and a length of 16', function() {assert(detectNetwork('6223477890123456') === 'China UnionPay');})
  it('has a prefix of 622348 and a length of 16', function() {assert(detectNetwork('6223487890123456') === 'China UnionPay');})
  it('has a prefix of 622349 and a length of 16', function() {assert(detectNetwork('6223497890123456') === 'China UnionPay');})
  it('has a prefix of 622350 and a length of 16', function() {assert(detectNetwork('6223507890123456') === 'China UnionPay');})
  it('has a prefix of 622351 and a length of 16', function() {assert(detectNetwork('6223517890123456') === 'China UnionPay');})
  it('has a prefix of 622352 and a length of 16', function() {assert(detectNetwork('6223527890123456') === 'China UnionPay');})
  it('has a prefix of 622353 and a length of 16', function() {assert(detectNetwork('6223537890123456') === 'China UnionPay');})
  it('has a prefix of 622354 and a length of 16', function() {assert(detectNetwork('6223547890123456') === 'China UnionPay');})
  it('has a prefix of 622355 and a length of 16', function() {assert(detectNetwork('6223557890123456') === 'China UnionPay');})
  it('has a prefix of 622356 and a length of 16', function() {assert(detectNetwork('6223567890123456') === 'China UnionPay');})
  it('has a prefix of 622357 and a length of 16', function() {assert(detectNetwork('6223577890123456') === 'China UnionPay');})
  it('has a prefix of 622358 and a length of 16', function() {assert(detectNetwork('6223587890123456') === 'China UnionPay');})
  it('has a prefix of 622359 and a length of 16', function() {assert(detectNetwork('6223597890123456') === 'China UnionPay');})
  it('has a prefix of 622360 and a length of 16', function() {assert(detectNetwork('6223607890123456') === 'China UnionPay');})
  it('has a prefix of 622361 and a length of 16', function() {assert(detectNetwork('6223617890123456') === 'China UnionPay');})
  it('has a prefix of 622362 and a length of 16', function() {assert(detectNetwork('6223627890123456') === 'China UnionPay');})
  it('has a prefix of 622363 and a length of 16', function() {assert(detectNetwork('6223637890123456') === 'China UnionPay');})
  it('has a prefix of 622364 and a length of 16', function() {assert(detectNetwork('6223647890123456') === 'China UnionPay');})
  it('has a prefix of 622365 and a length of 16', function() {assert(detectNetwork('6223657890123456') === 'China UnionPay');})
  it('has a prefix of 622366 and a length of 16', function() {assert(detectNetwork('6223667890123456') === 'China UnionPay');})
  it('has a prefix of 622367 and a length of 16', function() {assert(detectNetwork('6223677890123456') === 'China UnionPay');})
  it('has a prefix of 622368 and a length of 16', function() {assert(detectNetwork('6223687890123456') === 'China UnionPay');})
  it('has a prefix of 622369 and a length of 16', function() {assert(detectNetwork('6223697890123456') === 'China UnionPay');})
  it('has a prefix of 622370 and a length of 16', function() {assert(detectNetwork('6223707890123456') === 'China UnionPay');})
  it('has a prefix of 622371 and a length of 16', function() {assert(detectNetwork('6223717890123456') === 'China UnionPay');})
  it('has a prefix of 622372 and a length of 16', function() {assert(detectNetwork('6223727890123456') === 'China UnionPay');})
  it('has a prefix of 622373 and a length of 16', function() {assert(detectNetwork('6223737890123456') === 'China UnionPay');})
  it('has a prefix of 622374 and a length of 16', function() {assert(detectNetwork('6223747890123456') === 'China UnionPay');})
  it('has a prefix of 622375 and a length of 16', function() {assert(detectNetwork('6223757890123456') === 'China UnionPay');})
  it('has a prefix of 622376 and a length of 16', function() {assert(detectNetwork('6223767890123456') === 'China UnionPay');})
  it('has a prefix of 622377 and a length of 16', function() {assert(detectNetwork('6223777890123456') === 'China UnionPay');})
  it('has a prefix of 622378 and a length of 16', function() {assert(detectNetwork('6223787890123456') === 'China UnionPay');})
  it('has a prefix of 622379 and a length of 16', function() {assert(detectNetwork('6223797890123456') === 'China UnionPay');})
  it('has a prefix of 622380 and a length of 16', function() {assert(detectNetwork('6223807890123456') === 'China UnionPay');})
  it('has a prefix of 622381 and a length of 16', function() {assert(detectNetwork('6223817890123456') === 'China UnionPay');})
  it('has a prefix of 622382 and a length of 16', function() {assert(detectNetwork('6223827890123456') === 'China UnionPay');})
  it('has a prefix of 622383 and a length of 16', function() {assert(detectNetwork('6223837890123456') === 'China UnionPay');})
  it('has a prefix of 622384 and a length of 16', function() {assert(detectNetwork('6223847890123456') === 'China UnionPay');})
  it('has a prefix of 622385 and a length of 16', function() {assert(detectNetwork('6223857890123456') === 'China UnionPay');})
  it('has a prefix of 622386 and a length of 16', function() {assert(detectNetwork('6223867890123456') === 'China UnionPay');})
  it('has a prefix of 622387 and a length of 16', function() {assert(detectNetwork('6223877890123456') === 'China UnionPay');})
  it('has a prefix of 622388 and a length of 16', function() {assert(detectNetwork('6223887890123456') === 'China UnionPay');})
  it('has a prefix of 622389 and a length of 16', function() {assert(detectNetwork('6223897890123456') === 'China UnionPay');})
  it('has a prefix of 622390 and a length of 16', function() {assert(detectNetwork('6223907890123456') === 'China UnionPay');})
  it('has a prefix of 622391 and a length of 16', function() {assert(detectNetwork('6223917890123456') === 'China UnionPay');})
  it('has a prefix of 622392 and a length of 16', function() {assert(detectNetwork('6223927890123456') === 'China UnionPay');})
  it('has a prefix of 622393 and a length of 16', function() {assert(detectNetwork('6223937890123456') === 'China UnionPay');})
  it('has a prefix of 622394 and a length of 16', function() {assert(detectNetwork('6223947890123456') === 'China UnionPay');})
  it('has a prefix of 622395 and a length of 16', function() {assert(detectNetwork('6223957890123456') === 'China UnionPay');})
  it('has a prefix of 622396 and a length of 16', function() {assert(detectNetwork('6223967890123456') === 'China UnionPay');})
  it('has a prefix of 622397 and a length of 16', function() {assert(detectNetwork('6223977890123456') === 'China UnionPay');})
  it('has a prefix of 622398 and a length of 16', function() {assert(detectNetwork('6223987890123456') === 'China UnionPay');})
  it('has a prefix of 622399 and a length of 16', function() {assert(detectNetwork('6223997890123456') === 'China UnionPay');})
  it('has a prefix of 622400 and a length of 16', function() {assert(detectNetwork('6224007890123456') === 'China UnionPay');})
  it('has a prefix of 622401 and a length of 16', function() {assert(detectNetwork('6224017890123456') === 'China UnionPay');})
  it('has a prefix of 622402 and a length of 16', function() {assert(detectNetwork('6224027890123456') === 'China UnionPay');})
  it('has a prefix of 622403 and a length of 16', function() {assert(detectNetwork('6224037890123456') === 'China UnionPay');})
  it('has a prefix of 622404 and a length of 16', function() {assert(detectNetwork('6224047890123456') === 'China UnionPay');})
  it('has a prefix of 622405 and a length of 16', function() {assert(detectNetwork('6224057890123456') === 'China UnionPay');})
  it('has a prefix of 622406 and a length of 16', function() {assert(detectNetwork('6224067890123456') === 'China UnionPay');})
  it('has a prefix of 622407 and a length of 16', function() {assert(detectNetwork('6224077890123456') === 'China UnionPay');})
  it('has a prefix of 622408 and a length of 16', function() {assert(detectNetwork('6224087890123456') === 'China UnionPay');})
  it('has a prefix of 622409 and a length of 16', function() {assert(detectNetwork('6224097890123456') === 'China UnionPay');})
  it('has a prefix of 622410 and a length of 16', function() {assert(detectNetwork('6224107890123456') === 'China UnionPay');})
  it('has a prefix of 622411 and a length of 16', function() {assert(detectNetwork('6224117890123456') === 'China UnionPay');})
  it('has a prefix of 622412 and a length of 16', function() {assert(detectNetwork('6224127890123456') === 'China UnionPay');})
  it('has a prefix of 622413 and a length of 16', function() {assert(detectNetwork('6224137890123456') === 'China UnionPay');})
  it('has a prefix of 622414 and a length of 16', function() {assert(detectNetwork('6224147890123456') === 'China UnionPay');})
  it('has a prefix of 622415 and a length of 16', function() {assert(detectNetwork('6224157890123456') === 'China UnionPay');})
  it('has a prefix of 622416 and a length of 16', function() {assert(detectNetwork('6224167890123456') === 'China UnionPay');})
  it('has a prefix of 622417 and a length of 16', function() {assert(detectNetwork('6224177890123456') === 'China UnionPay');})
  it('has a prefix of 622418 and a length of 16', function() {assert(detectNetwork('6224187890123456') === 'China UnionPay');})
  it('has a prefix of 622419 and a length of 16', function() {assert(detectNetwork('6224197890123456') === 'China UnionPay');})
  it('has a prefix of 622420 and a length of 16', function() {assert(detectNetwork('6224207890123456') === 'China UnionPay');})
  it('has a prefix of 622421 and a length of 16', function() {assert(detectNetwork('6224217890123456') === 'China UnionPay');})
  it('has a prefix of 622422 and a length of 16', function() {assert(detectNetwork('6224227890123456') === 'China UnionPay');})
  it('has a prefix of 622423 and a length of 16', function() {assert(detectNetwork('6224237890123456') === 'China UnionPay');})
  it('has a prefix of 622424 and a length of 16', function() {assert(detectNetwork('6224247890123456') === 'China UnionPay');})
  it('has a prefix of 622425 and a length of 16', function() {assert(detectNetwork('6224257890123456') === 'China UnionPay');})
  it('has a prefix of 622426 and a length of 16', function() {assert(detectNetwork('6224267890123456') === 'China UnionPay');})
  it('has a prefix of 622427 and a length of 16', function() {assert(detectNetwork('6224277890123456') === 'China UnionPay');})
  it('has a prefix of 622428 and a length of 16', function() {assert(detectNetwork('6224287890123456') === 'China UnionPay');})
  it('has a prefix of 622429 and a length of 16', function() {assert(detectNetwork('6224297890123456') === 'China UnionPay');})
  it('has a prefix of 622430 and a length of 16', function() {assert(detectNetwork('6224307890123456') === 'China UnionPay');})
  it('has a prefix of 622431 and a length of 16', function() {assert(detectNetwork('6224317890123456') === 'China UnionPay');})
  it('has a prefix of 622432 and a length of 16', function() {assert(detectNetwork('6224327890123456') === 'China UnionPay');})
  it('has a prefix of 622433 and a length of 16', function() {assert(detectNetwork('6224337890123456') === 'China UnionPay');})
  it('has a prefix of 622434 and a length of 16', function() {assert(detectNetwork('6224347890123456') === 'China UnionPay');})
  it('has a prefix of 622435 and a length of 16', function() {assert(detectNetwork('6224357890123456') === 'China UnionPay');})
  it('has a prefix of 622436 and a length of 16', function() {assert(detectNetwork('6224367890123456') === 'China UnionPay');})
  it('has a prefix of 622437 and a length of 16', function() {assert(detectNetwork('6224377890123456') === 'China UnionPay');})
  it('has a prefix of 622438 and a length of 16', function() {assert(detectNetwork('6224387890123456') === 'China UnionPay');})
  it('has a prefix of 622439 and a length of 16', function() {assert(detectNetwork('6224397890123456') === 'China UnionPay');})
  it('has a prefix of 622440 and a length of 16', function() {assert(detectNetwork('6224407890123456') === 'China UnionPay');})
  it('has a prefix of 622441 and a length of 16', function() {assert(detectNetwork('6224417890123456') === 'China UnionPay');})
  it('has a prefix of 622442 and a length of 16', function() {assert(detectNetwork('6224427890123456') === 'China UnionPay');})
  it('has a prefix of 622443 and a length of 16', function() {assert(detectNetwork('6224437890123456') === 'China UnionPay');})
  it('has a prefix of 622444 and a length of 16', function() {assert(detectNetwork('6224447890123456') === 'China UnionPay');})
  it('has a prefix of 622445 and a length of 16', function() {assert(detectNetwork('6224457890123456') === 'China UnionPay');})
  it('has a prefix of 622446 and a length of 16', function() {assert(detectNetwork('6224467890123456') === 'China UnionPay');})
  it('has a prefix of 622447 and a length of 16', function() {assert(detectNetwork('6224477890123456') === 'China UnionPay');})
  it('has a prefix of 622448 and a length of 16', function() {assert(detectNetwork('6224487890123456') === 'China UnionPay');})
  it('has a prefix of 622449 and a length of 16', function() {assert(detectNetwork('6224497890123456') === 'China UnionPay');})
  it('has a prefix of 622450 and a length of 16', function() {assert(detectNetwork('6224507890123456') === 'China UnionPay');})
  it('has a prefix of 622451 and a length of 16', function() {assert(detectNetwork('6224517890123456') === 'China UnionPay');})
  it('has a prefix of 622452 and a length of 16', function() {assert(detectNetwork('6224527890123456') === 'China UnionPay');})
  it('has a prefix of 622453 and a length of 16', function() {assert(detectNetwork('6224537890123456') === 'China UnionPay');})
  it('has a prefix of 622454 and a length of 16', function() {assert(detectNetwork('6224547890123456') === 'China UnionPay');})
  it('has a prefix of 622455 and a length of 16', function() {assert(detectNetwork('6224557890123456') === 'China UnionPay');})
  it('has a prefix of 622456 and a length of 16', function() {assert(detectNetwork('6224567890123456') === 'China UnionPay');})
  it('has a prefix of 622457 and a length of 16', function() {assert(detectNetwork('6224577890123456') === 'China UnionPay');})
  it('has a prefix of 622458 and a length of 16', function() {assert(detectNetwork('6224587890123456') === 'China UnionPay');})
  it('has a prefix of 622459 and a length of 16', function() {assert(detectNetwork('6224597890123456') === 'China UnionPay');})
  it('has a prefix of 622460 and a length of 16', function() {assert(detectNetwork('6224607890123456') === 'China UnionPay');})
  it('has a prefix of 622461 and a length of 16', function() {assert(detectNetwork('6224617890123456') === 'China UnionPay');})
  it('has a prefix of 622462 and a length of 16', function() {assert(detectNetwork('6224627890123456') === 'China UnionPay');})
  it('has a prefix of 622463 and a length of 16', function() {assert(detectNetwork('6224637890123456') === 'China UnionPay');})
  it('has a prefix of 622464 and a length of 16', function() {assert(detectNetwork('6224647890123456') === 'China UnionPay');})
  it('has a prefix of 622465 and a length of 16', function() {assert(detectNetwork('6224657890123456') === 'China UnionPay');})
  it('has a prefix of 622466 and a length of 16', function() {assert(detectNetwork('6224667890123456') === 'China UnionPay');})
  it('has a prefix of 622467 and a length of 16', function() {assert(detectNetwork('6224677890123456') === 'China UnionPay');})
  it('has a prefix of 622468 and a length of 16', function() {assert(detectNetwork('6224687890123456') === 'China UnionPay');})
  it('has a prefix of 622469 and a length of 16', function() {assert(detectNetwork('6224697890123456') === 'China UnionPay');})
  it('has a prefix of 622470 and a length of 16', function() {assert(detectNetwork('6224707890123456') === 'China UnionPay');})
  it('has a prefix of 622471 and a length of 16', function() {assert(detectNetwork('6224717890123456') === 'China UnionPay');})
  it('has a prefix of 622472 and a length of 16', function() {assert(detectNetwork('6224727890123456') === 'China UnionPay');})
  it('has a prefix of 622473 and a length of 16', function() {assert(detectNetwork('6224737890123456') === 'China UnionPay');})
  it('has a prefix of 622474 and a length of 16', function() {assert(detectNetwork('6224747890123456') === 'China UnionPay');})
  it('has a prefix of 622475 and a length of 16', function() {assert(detectNetwork('6224757890123456') === 'China UnionPay');})
  it('has a prefix of 622476 and a length of 16', function() {assert(detectNetwork('6224767890123456') === 'China UnionPay');})
  it('has a prefix of 622477 and a length of 16', function() {assert(detectNetwork('6224777890123456') === 'China UnionPay');})
  it('has a prefix of 622478 and a length of 16', function() {assert(detectNetwork('6224787890123456') === 'China UnionPay');})
  it('has a prefix of 622479 and a length of 16', function() {assert(detectNetwork('6224797890123456') === 'China UnionPay');})
  it('has a prefix of 622480 and a length of 16', function() {assert(detectNetwork('6224807890123456') === 'China UnionPay');})
  it('has a prefix of 622481 and a length of 16', function() {assert(detectNetwork('6224817890123456') === 'China UnionPay');})
  it('has a prefix of 622482 and a length of 16', function() {assert(detectNetwork('6224827890123456') === 'China UnionPay');})
  it('has a prefix of 622483 and a length of 16', function() {assert(detectNetwork('6224837890123456') === 'China UnionPay');})
  it('has a prefix of 622484 and a length of 16', function() {assert(detectNetwork('6224847890123456') === 'China UnionPay');})
  it('has a prefix of 622485 and a length of 16', function() {assert(detectNetwork('6224857890123456') === 'China UnionPay');})
  it('has a prefix of 622486 and a length of 16', function() {assert(detectNetwork('6224867890123456') === 'China UnionPay');})
  it('has a prefix of 622487 and a length of 16', function() {assert(detectNetwork('6224877890123456') === 'China UnionPay');})
  it('has a prefix of 622488 and a length of 16', function() {assert(detectNetwork('6224887890123456') === 'China UnionPay');})
  it('has a prefix of 622489 and a length of 16', function() {assert(detectNetwork('6224897890123456') === 'China UnionPay');})
  it('has a prefix of 622490 and a length of 16', function() {assert(detectNetwork('6224907890123456') === 'China UnionPay');})
  it('has a prefix of 622491 and a length of 16', function() {assert(detectNetwork('6224917890123456') === 'China UnionPay');})
  it('has a prefix of 622492 and a length of 16', function() {assert(detectNetwork('6224927890123456') === 'China UnionPay');})
  it('has a prefix of 622493 and a length of 16', function() {assert(detectNetwork('6224937890123456') === 'China UnionPay');})
  it('has a prefix of 622494 and a length of 16', function() {assert(detectNetwork('6224947890123456') === 'China UnionPay');})
  it('has a prefix of 622495 and a length of 16', function() {assert(detectNetwork('6224957890123456') === 'China UnionPay');})
  it('has a prefix of 622496 and a length of 16', function() {assert(detectNetwork('6224967890123456') === 'China UnionPay');})
  it('has a prefix of 622497 and a length of 16', function() {assert(detectNetwork('6224977890123456') === 'China UnionPay');})
  it('has a prefix of 622498 and a length of 16', function() {assert(detectNetwork('6224987890123456') === 'China UnionPay');})
  it('has a prefix of 622499 and a length of 16', function() {assert(detectNetwork('6224997890123456') === 'China UnionPay');})
  it('has a prefix of 622500 and a length of 16', function() {assert(detectNetwork('6225007890123456') === 'China UnionPay');})
  it('has a prefix of 622501 and a length of 16', function() {assert(detectNetwork('6225017890123456') === 'China UnionPay');})
  it('has a prefix of 622502 and a length of 16', function() {assert(detectNetwork('6225027890123456') === 'China UnionPay');})
  it('has a prefix of 622503 and a length of 16', function() {assert(detectNetwork('6225037890123456') === 'China UnionPay');})
  it('has a prefix of 622504 and a length of 16', function() {assert(detectNetwork('6225047890123456') === 'China UnionPay');})
  it('has a prefix of 622505 and a length of 16', function() {assert(detectNetwork('6225057890123456') === 'China UnionPay');})
  it('has a prefix of 622506 and a length of 16', function() {assert(detectNetwork('6225067890123456') === 'China UnionPay');})
  it('has a prefix of 622507 and a length of 16', function() {assert(detectNetwork('6225077890123456') === 'China UnionPay');})
  it('has a prefix of 622508 and a length of 16', function() {assert(detectNetwork('6225087890123456') === 'China UnionPay');})
  it('has a prefix of 622509 and a length of 16', function() {assert(detectNetwork('6225097890123456') === 'China UnionPay');})
  it('has a prefix of 622510 and a length of 16', function() {assert(detectNetwork('6225107890123456') === 'China UnionPay');})
  it('has a prefix of 622511 and a length of 16', function() {assert(detectNetwork('6225117890123456') === 'China UnionPay');})
  it('has a prefix of 622512 and a length of 16', function() {assert(detectNetwork('6225127890123456') === 'China UnionPay');})
  it('has a prefix of 622513 and a length of 16', function() {assert(detectNetwork('6225137890123456') === 'China UnionPay');})
  it('has a prefix of 622514 and a length of 16', function() {assert(detectNetwork('6225147890123456') === 'China UnionPay');})
  it('has a prefix of 622515 and a length of 16', function() {assert(detectNetwork('6225157890123456') === 'China UnionPay');})
  it('has a prefix of 622516 and a length of 16', function() {assert(detectNetwork('6225167890123456') === 'China UnionPay');})
  it('has a prefix of 622517 and a length of 16', function() {assert(detectNetwork('6225177890123456') === 'China UnionPay');})
  it('has a prefix of 622518 and a length of 16', function() {assert(detectNetwork('6225187890123456') === 'China UnionPay');})
  it('has a prefix of 622519 and a length of 16', function() {assert(detectNetwork('6225197890123456') === 'China UnionPay');})
  it('has a prefix of 622520 and a length of 16', function() {assert(detectNetwork('6225207890123456') === 'China UnionPay');})
  it('has a prefix of 622521 and a length of 16', function() {assert(detectNetwork('6225217890123456') === 'China UnionPay');})
  it('has a prefix of 622522 and a length of 16', function() {assert(detectNetwork('6225227890123456') === 'China UnionPay');})
  it('has a prefix of 622523 and a length of 16', function() {assert(detectNetwork('6225237890123456') === 'China UnionPay');})
  it('has a prefix of 622524 and a length of 16', function() {assert(detectNetwork('6225247890123456') === 'China UnionPay');})
  it('has a prefix of 622525 and a length of 16', function() {assert(detectNetwork('6225257890123456') === 'China UnionPay');})
  it('has a prefix of 622526 and a length of 16', function() {assert(detectNetwork('6225267890123456') === 'China UnionPay');})
  it('has a prefix of 622527 and a length of 16', function() {assert(detectNetwork('6225277890123456') === 'China UnionPay');})
  it('has a prefix of 622528 and a length of 16', function() {assert(detectNetwork('6225287890123456') === 'China UnionPay');})
  it('has a prefix of 622529 and a length of 16', function() {assert(detectNetwork('6225297890123456') === 'China UnionPay');})
  it('has a prefix of 622530 and a length of 16', function() {assert(detectNetwork('6225307890123456') === 'China UnionPay');})
  it('has a prefix of 622531 and a length of 16', function() {assert(detectNetwork('6225317890123456') === 'China UnionPay');})
  it('has a prefix of 622532 and a length of 16', function() {assert(detectNetwork('6225327890123456') === 'China UnionPay');})
  it('has a prefix of 622533 and a length of 16', function() {assert(detectNetwork('6225337890123456') === 'China UnionPay');})
  it('has a prefix of 622534 and a length of 16', function() {assert(detectNetwork('6225347890123456') === 'China UnionPay');})
  it('has a prefix of 622535 and a length of 16', function() {assert(detectNetwork('6225357890123456') === 'China UnionPay');})
  it('has a prefix of 622536 and a length of 16', function() {assert(detectNetwork('6225367890123456') === 'China UnionPay');})
  it('has a prefix of 622537 and a length of 16', function() {assert(detectNetwork('6225377890123456') === 'China UnionPay');})
  it('has a prefix of 622538 and a length of 16', function() {assert(detectNetwork('6225387890123456') === 'China UnionPay');})
  it('has a prefix of 622539 and a length of 16', function() {assert(detectNetwork('6225397890123456') === 'China UnionPay');})
  it('has a prefix of 622540 and a length of 16', function() {assert(detectNetwork('6225407890123456') === 'China UnionPay');})
  it('has a prefix of 622541 and a length of 16', function() {assert(detectNetwork('6225417890123456') === 'China UnionPay');})
  it('has a prefix of 622542 and a length of 16', function() {assert(detectNetwork('6225427890123456') === 'China UnionPay');})
  it('has a prefix of 622543 and a length of 16', function() {assert(detectNetwork('6225437890123456') === 'China UnionPay');})
  it('has a prefix of 622544 and a length of 16', function() {assert(detectNetwork('6225447890123456') === 'China UnionPay');})
  it('has a prefix of 622545 and a length of 16', function() {assert(detectNetwork('6225457890123456') === 'China UnionPay');})
  it('has a prefix of 622546 and a length of 16', function() {assert(detectNetwork('6225467890123456') === 'China UnionPay');})
  it('has a prefix of 622547 and a length of 16', function() {assert(detectNetwork('6225477890123456') === 'China UnionPay');})
  it('has a prefix of 622548 and a length of 16', function() {assert(detectNetwork('6225487890123456') === 'China UnionPay');})
  it('has a prefix of 622549 and a length of 16', function() {assert(detectNetwork('6225497890123456') === 'China UnionPay');})
  it('has a prefix of 622550 and a length of 16', function() {assert(detectNetwork('6225507890123456') === 'China UnionPay');})
  it('has a prefix of 622551 and a length of 16', function() {assert(detectNetwork('6225517890123456') === 'China UnionPay');})
  it('has a prefix of 622552 and a length of 16', function() {assert(detectNetwork('6225527890123456') === 'China UnionPay');})
  it('has a prefix of 622553 and a length of 16', function() {assert(detectNetwork('6225537890123456') === 'China UnionPay');})
  it('has a prefix of 622554 and a length of 16', function() {assert(detectNetwork('6225547890123456') === 'China UnionPay');})
  it('has a prefix of 622555 and a length of 16', function() {assert(detectNetwork('6225557890123456') === 'China UnionPay');})
  it('has a prefix of 622556 and a length of 16', function() {assert(detectNetwork('6225567890123456') === 'China UnionPay');})
  it('has a prefix of 622557 and a length of 16', function() {assert(detectNetwork('6225577890123456') === 'China UnionPay');})
  it('has a prefix of 622558 and a length of 16', function() {assert(detectNetwork('6225587890123456') === 'China UnionPay');})
  it('has a prefix of 622559 and a length of 16', function() {assert(detectNetwork('6225597890123456') === 'China UnionPay');})
  it('has a prefix of 622560 and a length of 16', function() {assert(detectNetwork('6225607890123456') === 'China UnionPay');})
  it('has a prefix of 622561 and a length of 16', function() {assert(detectNetwork('6225617890123456') === 'China UnionPay');})
  it('has a prefix of 622562 and a length of 16', function() {assert(detectNetwork('6225627890123456') === 'China UnionPay');})
  it('has a prefix of 622563 and a length of 16', function() {assert(detectNetwork('6225637890123456') === 'China UnionPay');})
  it('has a prefix of 622564 and a length of 16', function() {assert(detectNetwork('6225647890123456') === 'China UnionPay');})
  it('has a prefix of 622565 and a length of 16', function() {assert(detectNetwork('6225657890123456') === 'China UnionPay');})
  it('has a prefix of 622566 and a length of 16', function() {assert(detectNetwork('6225667890123456') === 'China UnionPay');})
  it('has a prefix of 622567 and a length of 16', function() {assert(detectNetwork('6225677890123456') === 'China UnionPay');})
  it('has a prefix of 622568 and a length of 16', function() {assert(detectNetwork('6225687890123456') === 'China UnionPay');})
  it('has a prefix of 622569 and a length of 16', function() {assert(detectNetwork('6225697890123456') === 'China UnionPay');})
  it('has a prefix of 622570 and a length of 16', function() {assert(detectNetwork('6225707890123456') === 'China UnionPay');})
  it('has a prefix of 622571 and a length of 16', function() {assert(detectNetwork('6225717890123456') === 'China UnionPay');})
  it('has a prefix of 622572 and a length of 16', function() {assert(detectNetwork('6225727890123456') === 'China UnionPay');})
  it('has a prefix of 622573 and a length of 16', function() {assert(detectNetwork('6225737890123456') === 'China UnionPay');})
  it('has a prefix of 622574 and a length of 16', function() {assert(detectNetwork('6225747890123456') === 'China UnionPay');})
  it('has a prefix of 622575 and a length of 16', function() {assert(detectNetwork('6225757890123456') === 'China UnionPay');})
  it('has a prefix of 622576 and a length of 16', function() {assert(detectNetwork('6225767890123456') === 'China UnionPay');})
  it('has a prefix of 622577 and a length of 16', function() {assert(detectNetwork('6225777890123456') === 'China UnionPay');})
  it('has a prefix of 622578 and a length of 16', function() {assert(detectNetwork('6225787890123456') === 'China UnionPay');})
  it('has a prefix of 622579 and a length of 16', function() {assert(detectNetwork('6225797890123456') === 'China UnionPay');})
  it('has a prefix of 622580 and a length of 16', function() {assert(detectNetwork('6225807890123456') === 'China UnionPay');})
  it('has a prefix of 622581 and a length of 16', function() {assert(detectNetwork('6225817890123456') === 'China UnionPay');})
  it('has a prefix of 622582 and a length of 16', function() {assert(detectNetwork('6225827890123456') === 'China UnionPay');})
  it('has a prefix of 622583 and a length of 16', function() {assert(detectNetwork('6225837890123456') === 'China UnionPay');})
  it('has a prefix of 622584 and a length of 16', function() {assert(detectNetwork('6225847890123456') === 'China UnionPay');})
  it('has a prefix of 622585 and a length of 16', function() {assert(detectNetwork('6225857890123456') === 'China UnionPay');})
  it('has a prefix of 622586 and a length of 16', function() {assert(detectNetwork('6225867890123456') === 'China UnionPay');})
  it('has a prefix of 622587 and a length of 16', function() {assert(detectNetwork('6225877890123456') === 'China UnionPay');})
  it('has a prefix of 622588 and a length of 16', function() {assert(detectNetwork('6225887890123456') === 'China UnionPay');})
  it('has a prefix of 622589 and a length of 16', function() {assert(detectNetwork('6225897890123456') === 'China UnionPay');})
  it('has a prefix of 622590 and a length of 16', function() {assert(detectNetwork('6225907890123456') === 'China UnionPay');})
  it('has a prefix of 622591 and a length of 16', function() {assert(detectNetwork('6225917890123456') === 'China UnionPay');})
  it('has a prefix of 622592 and a length of 16', function() {assert(detectNetwork('6225927890123456') === 'China UnionPay');})
  it('has a prefix of 622593 and a length of 16', function() {assert(detectNetwork('6225937890123456') === 'China UnionPay');})
  it('has a prefix of 622594 and a length of 16', function() {assert(detectNetwork('6225947890123456') === 'China UnionPay');})
  it('has a prefix of 622595 and a length of 16', function() {assert(detectNetwork('6225957890123456') === 'China UnionPay');})
  it('has a prefix of 622596 and a length of 16', function() {assert(detectNetwork('6225967890123456') === 'China UnionPay');})
  it('has a prefix of 622597 and a length of 16', function() {assert(detectNetwork('6225977890123456') === 'China UnionPay');})
  it('has a prefix of 622598 and a length of 16', function() {assert(detectNetwork('6225987890123456') === 'China UnionPay');})
  it('has a prefix of 622599 and a length of 16', function() {assert(detectNetwork('6225997890123456') === 'China UnionPay');})
  it('has a prefix of 622600 and a length of 16', function() {assert(detectNetwork('6226007890123456') === 'China UnionPay');})
  it('has a prefix of 622601 and a length of 16', function() {assert(detectNetwork('6226017890123456') === 'China UnionPay');})
  it('has a prefix of 622602 and a length of 16', function() {assert(detectNetwork('6226027890123456') === 'China UnionPay');})
  it('has a prefix of 622603 and a length of 16', function() {assert(detectNetwork('6226037890123456') === 'China UnionPay');})
  it('has a prefix of 622604 and a length of 16', function() {assert(detectNetwork('6226047890123456') === 'China UnionPay');})
  it('has a prefix of 622605 and a length of 16', function() {assert(detectNetwork('6226057890123456') === 'China UnionPay');})
  it('has a prefix of 622606 and a length of 16', function() {assert(detectNetwork('6226067890123456') === 'China UnionPay');})
  it('has a prefix of 622607 and a length of 16', function() {assert(detectNetwork('6226077890123456') === 'China UnionPay');})
  it('has a prefix of 622608 and a length of 16', function() {assert(detectNetwork('6226087890123456') === 'China UnionPay');})
  it('has a prefix of 622609 and a length of 16', function() {assert(detectNetwork('6226097890123456') === 'China UnionPay');})
  it('has a prefix of 622610 and a length of 16', function() {assert(detectNetwork('6226107890123456') === 'China UnionPay');})
  it('has a prefix of 622611 and a length of 16', function() {assert(detectNetwork('6226117890123456') === 'China UnionPay');})
  it('has a prefix of 622612 and a length of 16', function() {assert(detectNetwork('6226127890123456') === 'China UnionPay');})
  it('has a prefix of 622613 and a length of 16', function() {assert(detectNetwork('6226137890123456') === 'China UnionPay');})
  it('has a prefix of 622614 and a length of 16', function() {assert(detectNetwork('6226147890123456') === 'China UnionPay');})
  it('has a prefix of 622615 and a length of 16', function() {assert(detectNetwork('6226157890123456') === 'China UnionPay');})
  it('has a prefix of 622616 and a length of 16', function() {assert(detectNetwork('6226167890123456') === 'China UnionPay');})
  it('has a prefix of 622617 and a length of 16', function() {assert(detectNetwork('6226177890123456') === 'China UnionPay');})
  it('has a prefix of 622618 and a length of 16', function() {assert(detectNetwork('6226187890123456') === 'China UnionPay');})
  it('has a prefix of 622619 and a length of 16', function() {assert(detectNetwork('6226197890123456') === 'China UnionPay');})
  it('has a prefix of 622620 and a length of 16', function() {assert(detectNetwork('6226207890123456') === 'China UnionPay');})
  it('has a prefix of 622621 and a length of 16', function() {assert(detectNetwork('6226217890123456') === 'China UnionPay');})
  it('has a prefix of 622622 and a length of 16', function() {assert(detectNetwork('6226227890123456') === 'China UnionPay');})
  it('has a prefix of 622623 and a length of 16', function() {assert(detectNetwork('6226237890123456') === 'China UnionPay');})
  it('has a prefix of 622624 and a length of 16', function() {assert(detectNetwork('6226247890123456') === 'China UnionPay');})
  it('has a prefix of 622625 and a length of 16', function() {assert(detectNetwork('6226257890123456') === 'China UnionPay');})
  it('has a prefix of 622626 and a length of 16', function() {assert(detectNetwork('6226267890123456') === 'China UnionPay');})
  it('has a prefix of 622627 and a length of 16', function() {assert(detectNetwork('6226277890123456') === 'China UnionPay');})
  it('has a prefix of 622628 and a length of 16', function() {assert(detectNetwork('6226287890123456') === 'China UnionPay');})
  it('has a prefix of 622629 and a length of 16', function() {assert(detectNetwork('6226297890123456') === 'China UnionPay');})
  it('has a prefix of 622630 and a length of 16', function() {assert(detectNetwork('6226307890123456') === 'China UnionPay');})
  it('has a prefix of 622631 and a length of 16', function() {assert(detectNetwork('6226317890123456') === 'China UnionPay');})
  it('has a prefix of 622632 and a length of 16', function() {assert(detectNetwork('6226327890123456') === 'China UnionPay');})
  it('has a prefix of 622633 and a length of 16', function() {assert(detectNetwork('6226337890123456') === 'China UnionPay');})
  it('has a prefix of 622634 and a length of 16', function() {assert(detectNetwork('6226347890123456') === 'China UnionPay');})
  it('has a prefix of 622635 and a length of 16', function() {assert(detectNetwork('6226357890123456') === 'China UnionPay');})
  it('has a prefix of 622636 and a length of 16', function() {assert(detectNetwork('6226367890123456') === 'China UnionPay');})
  it('has a prefix of 622637 and a length of 16', function() {assert(detectNetwork('6226377890123456') === 'China UnionPay');})
  it('has a prefix of 622638 and a length of 16', function() {assert(detectNetwork('6226387890123456') === 'China UnionPay');})
  it('has a prefix of 622639 and a length of 16', function() {assert(detectNetwork('6226397890123456') === 'China UnionPay');})
  it('has a prefix of 622640 and a length of 16', function() {assert(detectNetwork('6226407890123456') === 'China UnionPay');})
  it('has a prefix of 622641 and a length of 16', function() {assert(detectNetwork('6226417890123456') === 'China UnionPay');})
  it('has a prefix of 622642 and a length of 16', function() {assert(detectNetwork('6226427890123456') === 'China UnionPay');})
  it('has a prefix of 622643 and a length of 16', function() {assert(detectNetwork('6226437890123456') === 'China UnionPay');})
  it('has a prefix of 622644 and a length of 16', function() {assert(detectNetwork('6226447890123456') === 'China UnionPay');})
  it('has a prefix of 622645 and a length of 16', function() {assert(detectNetwork('6226457890123456') === 'China UnionPay');})
  it('has a prefix of 622646 and a length of 16', function() {assert(detectNetwork('6226467890123456') === 'China UnionPay');})
  it('has a prefix of 622647 and a length of 16', function() {assert(detectNetwork('6226477890123456') === 'China UnionPay');})
  it('has a prefix of 622648 and a length of 16', function() {assert(detectNetwork('6226487890123456') === 'China UnionPay');})
  it('has a prefix of 622649 and a length of 16', function() {assert(detectNetwork('6226497890123456') === 'China UnionPay');})
  it('has a prefix of 622650 and a length of 16', function() {assert(detectNetwork('6226507890123456') === 'China UnionPay');})
  it('has a prefix of 622651 and a length of 16', function() {assert(detectNetwork('6226517890123456') === 'China UnionPay');})
  it('has a prefix of 622652 and a length of 16', function() {assert(detectNetwork('6226527890123456') === 'China UnionPay');})
  it('has a prefix of 622653 and a length of 16', function() {assert(detectNetwork('6226537890123456') === 'China UnionPay');})
  it('has a prefix of 622654 and a length of 16', function() {assert(detectNetwork('6226547890123456') === 'China UnionPay');})
  it('has a prefix of 622655 and a length of 16', function() {assert(detectNetwork('6226557890123456') === 'China UnionPay');})
  it('has a prefix of 622656 and a length of 16', function() {assert(detectNetwork('6226567890123456') === 'China UnionPay');})
  it('has a prefix of 622657 and a length of 16', function() {assert(detectNetwork('6226577890123456') === 'China UnionPay');})
  it('has a prefix of 622658 and a length of 16', function() {assert(detectNetwork('6226587890123456') === 'China UnionPay');})
  it('has a prefix of 622659 and a length of 16', function() {assert(detectNetwork('6226597890123456') === 'China UnionPay');})
  it('has a prefix of 622660 and a length of 16', function() {assert(detectNetwork('6226607890123456') === 'China UnionPay');})
  it('has a prefix of 622661 and a length of 16', function() {assert(detectNetwork('6226617890123456') === 'China UnionPay');})
  it('has a prefix of 622662 and a length of 16', function() {assert(detectNetwork('6226627890123456') === 'China UnionPay');})
  it('has a prefix of 622663 and a length of 16', function() {assert(detectNetwork('6226637890123456') === 'China UnionPay');})
  it('has a prefix of 622664 and a length of 16', function() {assert(detectNetwork('6226647890123456') === 'China UnionPay');})
  it('has a prefix of 622665 and a length of 16', function() {assert(detectNetwork('6226657890123456') === 'China UnionPay');})
  it('has a prefix of 622666 and a length of 16', function() {assert(detectNetwork('6226667890123456') === 'China UnionPay');})
  it('has a prefix of 622667 and a length of 16', function() {assert(detectNetwork('6226677890123456') === 'China UnionPay');})
  it('has a prefix of 622668 and a length of 16', function() {assert(detectNetwork('6226687890123456') === 'China UnionPay');})
  it('has a prefix of 622669 and a length of 16', function() {assert(detectNetwork('6226697890123456') === 'China UnionPay');})
  it('has a prefix of 622670 and a length of 16', function() {assert(detectNetwork('6226707890123456') === 'China UnionPay');})
  it('has a prefix of 622671 and a length of 16', function() {assert(detectNetwork('6226717890123456') === 'China UnionPay');})
  it('has a prefix of 622672 and a length of 16', function() {assert(detectNetwork('6226727890123456') === 'China UnionPay');})
  it('has a prefix of 622673 and a length of 16', function() {assert(detectNetwork('6226737890123456') === 'China UnionPay');})
  it('has a prefix of 622674 and a length of 16', function() {assert(detectNetwork('6226747890123456') === 'China UnionPay');})
  it('has a prefix of 622675 and a length of 16', function() {assert(detectNetwork('6226757890123456') === 'China UnionPay');})
  it('has a prefix of 622676 and a length of 16', function() {assert(detectNetwork('6226767890123456') === 'China UnionPay');})
  it('has a prefix of 622677 and a length of 16', function() {assert(detectNetwork('6226777890123456') === 'China UnionPay');})
  it('has a prefix of 622678 and a length of 16', function() {assert(detectNetwork('6226787890123456') === 'China UnionPay');})
  it('has a prefix of 622679 and a length of 16', function() {assert(detectNetwork('6226797890123456') === 'China UnionPay');})
  it('has a prefix of 622680 and a length of 16', function() {assert(detectNetwork('6226807890123456') === 'China UnionPay');})
  it('has a prefix of 622681 and a length of 16', function() {assert(detectNetwork('6226817890123456') === 'China UnionPay');})
  it('has a prefix of 622682 and a length of 16', function() {assert(detectNetwork('6226827890123456') === 'China UnionPay');})
  it('has a prefix of 622683 and a length of 16', function() {assert(detectNetwork('6226837890123456') === 'China UnionPay');})
  it('has a prefix of 622684 and a length of 16', function() {assert(detectNetwork('6226847890123456') === 'China UnionPay');})
  it('has a prefix of 622685 and a length of 16', function() {assert(detectNetwork('6226857890123456') === 'China UnionPay');})
  it('has a prefix of 622686 and a length of 16', function() {assert(detectNetwork('6226867890123456') === 'China UnionPay');})
  it('has a prefix of 622687 and a length of 16', function() {assert(detectNetwork('6226877890123456') === 'China UnionPay');})
  it('has a prefix of 622688 and a length of 16', function() {assert(detectNetwork('6226887890123456') === 'China UnionPay');})
  it('has a prefix of 622689 and a length of 16', function() {assert(detectNetwork('6226897890123456') === 'China UnionPay');})
  it('has a prefix of 622690 and a length of 16', function() {assert(detectNetwork('6226907890123456') === 'China UnionPay');})
  it('has a prefix of 622691 and a length of 16', function() {assert(detectNetwork('6226917890123456') === 'China UnionPay');})
  it('has a prefix of 622692 and a length of 16', function() {assert(detectNetwork('6226927890123456') === 'China UnionPay');})
  it('has a prefix of 622693 and a length of 16', function() {assert(detectNetwork('6226937890123456') === 'China UnionPay');})
  it('has a prefix of 622694 and a length of 16', function() {assert(detectNetwork('6226947890123456') === 'China UnionPay');})
  it('has a prefix of 622695 and a length of 16', function() {assert(detectNetwork('6226957890123456') === 'China UnionPay');})
  it('has a prefix of 622696 and a length of 16', function() {assert(detectNetwork('6226967890123456') === 'China UnionPay');})
  it('has a prefix of 622697 and a length of 16', function() {assert(detectNetwork('6226977890123456') === 'China UnionPay');})
  it('has a prefix of 622698 and a length of 16', function() {assert(detectNetwork('6226987890123456') === 'China UnionPay');})
  it('has a prefix of 622699 and a length of 16', function() {assert(detectNetwork('6226997890123456') === 'China UnionPay');})
  it('has a prefix of 622700 and a length of 16', function() {assert(detectNetwork('6227007890123456') === 'China UnionPay');})
  it('has a prefix of 622701 and a length of 16', function() {assert(detectNetwork('6227017890123456') === 'China UnionPay');})
  it('has a prefix of 622702 and a length of 16', function() {assert(detectNetwork('6227027890123456') === 'China UnionPay');})
  it('has a prefix of 622703 and a length of 16', function() {assert(detectNetwork('6227037890123456') === 'China UnionPay');})
  it('has a prefix of 622704 and a length of 16', function() {assert(detectNetwork('6227047890123456') === 'China UnionPay');})
  it('has a prefix of 622705 and a length of 16', function() {assert(detectNetwork('6227057890123456') === 'China UnionPay');})
  it('has a prefix of 622706 and a length of 16', function() {assert(detectNetwork('6227067890123456') === 'China UnionPay');})
  it('has a prefix of 622707 and a length of 16', function() {assert(detectNetwork('6227077890123456') === 'China UnionPay');})
  it('has a prefix of 622708 and a length of 16', function() {assert(detectNetwork('6227087890123456') === 'China UnionPay');})
  it('has a prefix of 622709 and a length of 16', function() {assert(detectNetwork('6227097890123456') === 'China UnionPay');})
  it('has a prefix of 622710 and a length of 16', function() {assert(detectNetwork('6227107890123456') === 'China UnionPay');})
  it('has a prefix of 622711 and a length of 16', function() {assert(detectNetwork('6227117890123456') === 'China UnionPay');})
  it('has a prefix of 622712 and a length of 16', function() {assert(detectNetwork('6227127890123456') === 'China UnionPay');})
  it('has a prefix of 622713 and a length of 16', function() {assert(detectNetwork('6227137890123456') === 'China UnionPay');})
  it('has a prefix of 622714 and a length of 16', function() {assert(detectNetwork('6227147890123456') === 'China UnionPay');})
  it('has a prefix of 622715 and a length of 16', function() {assert(detectNetwork('6227157890123456') === 'China UnionPay');})
  it('has a prefix of 622716 and a length of 16', function() {assert(detectNetwork('6227167890123456') === 'China UnionPay');})
  it('has a prefix of 622717 and a length of 16', function() {assert(detectNetwork('6227177890123456') === 'China UnionPay');})
  it('has a prefix of 622718 and a length of 16', function() {assert(detectNetwork('6227187890123456') === 'China UnionPay');})
  it('has a prefix of 622719 and a length of 16', function() {assert(detectNetwork('6227197890123456') === 'China UnionPay');})
  it('has a prefix of 622720 and a length of 16', function() {assert(detectNetwork('6227207890123456') === 'China UnionPay');})
  it('has a prefix of 622721 and a length of 16', function() {assert(detectNetwork('6227217890123456') === 'China UnionPay');})
  it('has a prefix of 622722 and a length of 16', function() {assert(detectNetwork('6227227890123456') === 'China UnionPay');})
  it('has a prefix of 622723 and a length of 16', function() {assert(detectNetwork('6227237890123456') === 'China UnionPay');})
  it('has a prefix of 622724 and a length of 16', function() {assert(detectNetwork('6227247890123456') === 'China UnionPay');})
  it('has a prefix of 622725 and a length of 16', function() {assert(detectNetwork('6227257890123456') === 'China UnionPay');})
  it('has a prefix of 622726 and a length of 16', function() {assert(detectNetwork('6227267890123456') === 'China UnionPay');})
  it('has a prefix of 622727 and a length of 16', function() {assert(detectNetwork('6227277890123456') === 'China UnionPay');})
  it('has a prefix of 622728 and a length of 16', function() {assert(detectNetwork('6227287890123456') === 'China UnionPay');})
  it('has a prefix of 622729 and a length of 16', function() {assert(detectNetwork('6227297890123456') === 'China UnionPay');})
  it('has a prefix of 622730 and a length of 16', function() {assert(detectNetwork('6227307890123456') === 'China UnionPay');})
  it('has a prefix of 622731 and a length of 16', function() {assert(detectNetwork('6227317890123456') === 'China UnionPay');})
  it('has a prefix of 622732 and a length of 16', function() {assert(detectNetwork('6227327890123456') === 'China UnionPay');})
  it('has a prefix of 622733 and a length of 16', function() {assert(detectNetwork('6227337890123456') === 'China UnionPay');})
  it('has a prefix of 622734 and a length of 16', function() {assert(detectNetwork('6227347890123456') === 'China UnionPay');})
  it('has a prefix of 622735 and a length of 16', function() {assert(detectNetwork('6227357890123456') === 'China UnionPay');})
  it('has a prefix of 622736 and a length of 16', function() {assert(detectNetwork('6227367890123456') === 'China UnionPay');})
  it('has a prefix of 622737 and a length of 16', function() {assert(detectNetwork('6227377890123456') === 'China UnionPay');})
  it('has a prefix of 622738 and a length of 16', function() {assert(detectNetwork('6227387890123456') === 'China UnionPay');})
  it('has a prefix of 622739 and a length of 16', function() {assert(detectNetwork('6227397890123456') === 'China UnionPay');})
  it('has a prefix of 622740 and a length of 16', function() {assert(detectNetwork('6227407890123456') === 'China UnionPay');})
  it('has a prefix of 622741 and a length of 16', function() {assert(detectNetwork('6227417890123456') === 'China UnionPay');})
  it('has a prefix of 622742 and a length of 16', function() {assert(detectNetwork('6227427890123456') === 'China UnionPay');})
  it('has a prefix of 622743 and a length of 16', function() {assert(detectNetwork('6227437890123456') === 'China UnionPay');})
  it('has a prefix of 622744 and a length of 16', function() {assert(detectNetwork('6227447890123456') === 'China UnionPay');})
  it('has a prefix of 622745 and a length of 16', function() {assert(detectNetwork('6227457890123456') === 'China UnionPay');})
  it('has a prefix of 622746 and a length of 16', function() {assert(detectNetwork('6227467890123456') === 'China UnionPay');})
  it('has a prefix of 622747 and a length of 16', function() {assert(detectNetwork('6227477890123456') === 'China UnionPay');})
  it('has a prefix of 622748 and a length of 16', function() {assert(detectNetwork('6227487890123456') === 'China UnionPay');})
  it('has a prefix of 622749 and a length of 16', function() {assert(detectNetwork('6227497890123456') === 'China UnionPay');})
  it('has a prefix of 622750 and a length of 16', function() {assert(detectNetwork('6227507890123456') === 'China UnionPay');})
  it('has a prefix of 622751 and a length of 16', function() {assert(detectNetwork('6227517890123456') === 'China UnionPay');})
  it('has a prefix of 622752 and a length of 16', function() {assert(detectNetwork('6227527890123456') === 'China UnionPay');})
  it('has a prefix of 622753 and a length of 16', function() {assert(detectNetwork('6227537890123456') === 'China UnionPay');})
  it('has a prefix of 622754 and a length of 16', function() {assert(detectNetwork('6227547890123456') === 'China UnionPay');})
  it('has a prefix of 622755 and a length of 16', function() {assert(detectNetwork('6227557890123456') === 'China UnionPay');})
  it('has a prefix of 622756 and a length of 16', function() {assert(detectNetwork('6227567890123456') === 'China UnionPay');})
  it('has a prefix of 622757 and a length of 16', function() {assert(detectNetwork('6227577890123456') === 'China UnionPay');})
  it('has a prefix of 622758 and a length of 16', function() {assert(detectNetwork('6227587890123456') === 'China UnionPay');})
  it('has a prefix of 622759 and a length of 16', function() {assert(detectNetwork('6227597890123456') === 'China UnionPay');})
  it('has a prefix of 622760 and a length of 16', function() {assert(detectNetwork('6227607890123456') === 'China UnionPay');})
  it('has a prefix of 622761 and a length of 16', function() {assert(detectNetwork('6227617890123456') === 'China UnionPay');})
  it('has a prefix of 622762 and a length of 16', function() {assert(detectNetwork('6227627890123456') === 'China UnionPay');})
  it('has a prefix of 622763 and a length of 16', function() {assert(detectNetwork('6227637890123456') === 'China UnionPay');})
  it('has a prefix of 622764 and a length of 16', function() {assert(detectNetwork('6227647890123456') === 'China UnionPay');})
  it('has a prefix of 622765 and a length of 16', function() {assert(detectNetwork('6227657890123456') === 'China UnionPay');})
  it('has a prefix of 622766 and a length of 16', function() {assert(detectNetwork('6227667890123456') === 'China UnionPay');})
  it('has a prefix of 622767 and a length of 16', function() {assert(detectNetwork('6227677890123456') === 'China UnionPay');})
  it('has a prefix of 622768 and a length of 16', function() {assert(detectNetwork('6227687890123456') === 'China UnionPay');})
  it('has a prefix of 622769 and a length of 16', function() {assert(detectNetwork('6227697890123456') === 'China UnionPay');})
  it('has a prefix of 622770 and a length of 16', function() {assert(detectNetwork('6227707890123456') === 'China UnionPay');})
  it('has a prefix of 622771 and a length of 16', function() {assert(detectNetwork('6227717890123456') === 'China UnionPay');})
  it('has a prefix of 622772 and a length of 16', function() {assert(detectNetwork('6227727890123456') === 'China UnionPay');})
  it('has a prefix of 622773 and a length of 16', function() {assert(detectNetwork('6227737890123456') === 'China UnionPay');})
  it('has a prefix of 622774 and a length of 16', function() {assert(detectNetwork('6227747890123456') === 'China UnionPay');})
  it('has a prefix of 622775 and a length of 16', function() {assert(detectNetwork('6227757890123456') === 'China UnionPay');})
  it('has a prefix of 622776 and a length of 16', function() {assert(detectNetwork('6227767890123456') === 'China UnionPay');})
  it('has a prefix of 622777 and a length of 16', function() {assert(detectNetwork('6227777890123456') === 'China UnionPay');})
  it('has a prefix of 622778 and a length of 16', function() {assert(detectNetwork('6227787890123456') === 'China UnionPay');})
  it('has a prefix of 622779 and a length of 16', function() {assert(detectNetwork('6227797890123456') === 'China UnionPay');})
  it('has a prefix of 622780 and a length of 16', function() {assert(detectNetwork('6227807890123456') === 'China UnionPay');})
  it('has a prefix of 622781 and a length of 16', function() {assert(detectNetwork('6227817890123456') === 'China UnionPay');})
  it('has a prefix of 622782 and a length of 16', function() {assert(detectNetwork('6227827890123456') === 'China UnionPay');})
  it('has a prefix of 622783 and a length of 16', function() {assert(detectNetwork('6227837890123456') === 'China UnionPay');})
  it('has a prefix of 622784 and a length of 16', function() {assert(detectNetwork('6227847890123456') === 'China UnionPay');})
  it('has a prefix of 622785 and a length of 16', function() {assert(detectNetwork('6227857890123456') === 'China UnionPay');})
  it('has a prefix of 622786 and a length of 16', function() {assert(detectNetwork('6227867890123456') === 'China UnionPay');})
  it('has a prefix of 622787 and a length of 16', function() {assert(detectNetwork('6227877890123456') === 'China UnionPay');})
  it('has a prefix of 622788 and a length of 16', function() {assert(detectNetwork('6227887890123456') === 'China UnionPay');})
  it('has a prefix of 622789 and a length of 16', function() {assert(detectNetwork('6227897890123456') === 'China UnionPay');})
  it('has a prefix of 622790 and a length of 16', function() {assert(detectNetwork('6227907890123456') === 'China UnionPay');})
  it('has a prefix of 622791 and a length of 16', function() {assert(detectNetwork('6227917890123456') === 'China UnionPay');})
  it('has a prefix of 622792 and a length of 16', function() {assert(detectNetwork('6227927890123456') === 'China UnionPay');})
  it('has a prefix of 622793 and a length of 16', function() {assert(detectNetwork('6227937890123456') === 'China UnionPay');})
  it('has a prefix of 622794 and a length of 16', function() {assert(detectNetwork('6227947890123456') === 'China UnionPay');})
  it('has a prefix of 622795 and a length of 16', function() {assert(detectNetwork('6227957890123456') === 'China UnionPay');})
  it('has a prefix of 622796 and a length of 16', function() {assert(detectNetwork('6227967890123456') === 'China UnionPay');})
  it('has a prefix of 622797 and a length of 16', function() {assert(detectNetwork('6227977890123456') === 'China UnionPay');})
  it('has a prefix of 622798 and a length of 16', function() {assert(detectNetwork('6227987890123456') === 'China UnionPay');})
  it('has a prefix of 622799 and a length of 16', function() {assert(detectNetwork('6227997890123456') === 'China UnionPay');})
  it('has a prefix of 622800 and a length of 16', function() {assert(detectNetwork('6228007890123456') === 'China UnionPay');})
  it('has a prefix of 622801 and a length of 16', function() {assert(detectNetwork('6228017890123456') === 'China UnionPay');})
  it('has a prefix of 622802 and a length of 16', function() {assert(detectNetwork('6228027890123456') === 'China UnionPay');})
  it('has a prefix of 622803 and a length of 16', function() {assert(detectNetwork('6228037890123456') === 'China UnionPay');})
  it('has a prefix of 622804 and a length of 16', function() {assert(detectNetwork('6228047890123456') === 'China UnionPay');})
  it('has a prefix of 622805 and a length of 16', function() {assert(detectNetwork('6228057890123456') === 'China UnionPay');})
  it('has a prefix of 622806 and a length of 16', function() {assert(detectNetwork('6228067890123456') === 'China UnionPay');})
  it('has a prefix of 622807 and a length of 16', function() {assert(detectNetwork('6228077890123456') === 'China UnionPay');})
  it('has a prefix of 622808 and a length of 16', function() {assert(detectNetwork('6228087890123456') === 'China UnionPay');})
  it('has a prefix of 622809 and a length of 16', function() {assert(detectNetwork('6228097890123456') === 'China UnionPay');})
  it('has a prefix of 622810 and a length of 16', function() {assert(detectNetwork('6228107890123456') === 'China UnionPay');})
  it('has a prefix of 622811 and a length of 16', function() {assert(detectNetwork('6228117890123456') === 'China UnionPay');})
  it('has a prefix of 622812 and a length of 16', function() {assert(detectNetwork('6228127890123456') === 'China UnionPay');})
  it('has a prefix of 622813 and a length of 16', function() {assert(detectNetwork('6228137890123456') === 'China UnionPay');})
  it('has a prefix of 622814 and a length of 16', function() {assert(detectNetwork('6228147890123456') === 'China UnionPay');})
  it('has a prefix of 622815 and a length of 16', function() {assert(detectNetwork('6228157890123456') === 'China UnionPay');})
  it('has a prefix of 622816 and a length of 16', function() {assert(detectNetwork('6228167890123456') === 'China UnionPay');})
  it('has a prefix of 622817 and a length of 16', function() {assert(detectNetwork('6228177890123456') === 'China UnionPay');})
  it('has a prefix of 622818 and a length of 16', function() {assert(detectNetwork('6228187890123456') === 'China UnionPay');})
  it('has a prefix of 622819 and a length of 16', function() {assert(detectNetwork('6228197890123456') === 'China UnionPay');})
  it('has a prefix of 622820 and a length of 16', function() {assert(detectNetwork('6228207890123456') === 'China UnionPay');})
  it('has a prefix of 622821 and a length of 16', function() {assert(detectNetwork('6228217890123456') === 'China UnionPay');})
  it('has a prefix of 622822 and a length of 16', function() {assert(detectNetwork('6228227890123456') === 'China UnionPay');})
  it('has a prefix of 622823 and a length of 16', function() {assert(detectNetwork('6228237890123456') === 'China UnionPay');})
  it('has a prefix of 622824 and a length of 16', function() {assert(detectNetwork('6228247890123456') === 'China UnionPay');})
  it('has a prefix of 622825 and a length of 16', function() {assert(detectNetwork('6228257890123456') === 'China UnionPay');})
  it('has a prefix of 622826 and a length of 16', function() {assert(detectNetwork('6228267890123456') === 'China UnionPay');})
  it('has a prefix of 622827 and a length of 16', function() {assert(detectNetwork('6228277890123456') === 'China UnionPay');})
  it('has a prefix of 622828 and a length of 16', function() {assert(detectNetwork('6228287890123456') === 'China UnionPay');})
  it('has a prefix of 622829 and a length of 16', function() {assert(detectNetwork('6228297890123456') === 'China UnionPay');})
  it('has a prefix of 622830 and a length of 16', function() {assert(detectNetwork('6228307890123456') === 'China UnionPay');})
  it('has a prefix of 622831 and a length of 16', function() {assert(detectNetwork('6228317890123456') === 'China UnionPay');})
  it('has a prefix of 622832 and a length of 16', function() {assert(detectNetwork('6228327890123456') === 'China UnionPay');})
  it('has a prefix of 622833 and a length of 16', function() {assert(detectNetwork('6228337890123456') === 'China UnionPay');})
  it('has a prefix of 622834 and a length of 16', function() {assert(detectNetwork('6228347890123456') === 'China UnionPay');})
  it('has a prefix of 622835 and a length of 16', function() {assert(detectNetwork('6228357890123456') === 'China UnionPay');})
  it('has a prefix of 622836 and a length of 16', function() {assert(detectNetwork('6228367890123456') === 'China UnionPay');})
  it('has a prefix of 622837 and a length of 16', function() {assert(detectNetwork('6228377890123456') === 'China UnionPay');})
  it('has a prefix of 622838 and a length of 16', function() {assert(detectNetwork('6228387890123456') === 'China UnionPay');})
  it('has a prefix of 622839 and a length of 16', function() {assert(detectNetwork('6228397890123456') === 'China UnionPay');})
  it('has a prefix of 622840 and a length of 16', function() {assert(detectNetwork('6228407890123456') === 'China UnionPay');})
  it('has a prefix of 622841 and a length of 16', function() {assert(detectNetwork('6228417890123456') === 'China UnionPay');})
  it('has a prefix of 622842 and a length of 16', function() {assert(detectNetwork('6228427890123456') === 'China UnionPay');})
  it('has a prefix of 622843 and a length of 16', function() {assert(detectNetwork('6228437890123456') === 'China UnionPay');})
  it('has a prefix of 622844 and a length of 16', function() {assert(detectNetwork('6228447890123456') === 'China UnionPay');})
  it('has a prefix of 622845 and a length of 16', function() {assert(detectNetwork('6228457890123456') === 'China UnionPay');})
  it('has a prefix of 622846 and a length of 16', function() {assert(detectNetwork('6228467890123456') === 'China UnionPay');})
  it('has a prefix of 622847 and a length of 16', function() {assert(detectNetwork('6228477890123456') === 'China UnionPay');})
  it('has a prefix of 622848 and a length of 16', function() {assert(detectNetwork('6228487890123456') === 'China UnionPay');})
  it('has a prefix of 622849 and a length of 16', function() {assert(detectNetwork('6228497890123456') === 'China UnionPay');})
  it('has a prefix of 622850 and a length of 16', function() {assert(detectNetwork('6228507890123456') === 'China UnionPay');})
  it('has a prefix of 622851 and a length of 16', function() {assert(detectNetwork('6228517890123456') === 'China UnionPay');})
  it('has a prefix of 622852 and a length of 16', function() {assert(detectNetwork('6228527890123456') === 'China UnionPay');})
  it('has a prefix of 622853 and a length of 16', function() {assert(detectNetwork('6228537890123456') === 'China UnionPay');})
  it('has a prefix of 622854 and a length of 16', function() {assert(detectNetwork('6228547890123456') === 'China UnionPay');})
  it('has a prefix of 622855 and a length of 16', function() {assert(detectNetwork('6228557890123456') === 'China UnionPay');})
  it('has a prefix of 622856 and a length of 16', function() {assert(detectNetwork('6228567890123456') === 'China UnionPay');})
  it('has a prefix of 622857 and a length of 16', function() {assert(detectNetwork('6228577890123456') === 'China UnionPay');})
  it('has a prefix of 622858 and a length of 16', function() {assert(detectNetwork('6228587890123456') === 'China UnionPay');})
  it('has a prefix of 622859 and a length of 16', function() {assert(detectNetwork('6228597890123456') === 'China UnionPay');})
  it('has a prefix of 622860 and a length of 16', function() {assert(detectNetwork('6228607890123456') === 'China UnionPay');})
  it('has a prefix of 622861 and a length of 16', function() {assert(detectNetwork('6228617890123456') === 'China UnionPay');})
  it('has a prefix of 622862 and a length of 16', function() {assert(detectNetwork('6228627890123456') === 'China UnionPay');})
  it('has a prefix of 622863 and a length of 16', function() {assert(detectNetwork('6228637890123456') === 'China UnionPay');})
  it('has a prefix of 622864 and a length of 16', function() {assert(detectNetwork('6228647890123456') === 'China UnionPay');})
  it('has a prefix of 622865 and a length of 16', function() {assert(detectNetwork('6228657890123456') === 'China UnionPay');})
  it('has a prefix of 622866 and a length of 16', function() {assert(detectNetwork('6228667890123456') === 'China UnionPay');})
  it('has a prefix of 622867 and a length of 16', function() {assert(detectNetwork('6228677890123456') === 'China UnionPay');})
  it('has a prefix of 622868 and a length of 16', function() {assert(detectNetwork('6228687890123456') === 'China UnionPay');})
  it('has a prefix of 622869 and a length of 16', function() {assert(detectNetwork('6228697890123456') === 'China UnionPay');})
  it('has a prefix of 622870 and a length of 16', function() {assert(detectNetwork('6228707890123456') === 'China UnionPay');})
  it('has a prefix of 622871 and a length of 16', function() {assert(detectNetwork('6228717890123456') === 'China UnionPay');})
  it('has a prefix of 622872 and a length of 16', function() {assert(detectNetwork('6228727890123456') === 'China UnionPay');})
  it('has a prefix of 622873 and a length of 16', function() {assert(detectNetwork('6228737890123456') === 'China UnionPay');})
  it('has a prefix of 622874 and a length of 16', function() {assert(detectNetwork('6228747890123456') === 'China UnionPay');})
  it('has a prefix of 622875 and a length of 16', function() {assert(detectNetwork('6228757890123456') === 'China UnionPay');})
  it('has a prefix of 622876 and a length of 16', function() {assert(detectNetwork('6228767890123456') === 'China UnionPay');})
  it('has a prefix of 622877 and a length of 16', function() {assert(detectNetwork('6228777890123456') === 'China UnionPay');})
  it('has a prefix of 622878 and a length of 16', function() {assert(detectNetwork('6228787890123456') === 'China UnionPay');})
  it('has a prefix of 622879 and a length of 16', function() {assert(detectNetwork('6228797890123456') === 'China UnionPay');})
  it('has a prefix of 622880 and a length of 16', function() {assert(detectNetwork('6228807890123456') === 'China UnionPay');})
  it('has a prefix of 622881 and a length of 16', function() {assert(detectNetwork('6228817890123456') === 'China UnionPay');})
  it('has a prefix of 622882 and a length of 16', function() {assert(detectNetwork('6228827890123456') === 'China UnionPay');})
  it('has a prefix of 622883 and a length of 16', function() {assert(detectNetwork('6228837890123456') === 'China UnionPay');})
  it('has a prefix of 622884 and a length of 16', function() {assert(detectNetwork('6228847890123456') === 'China UnionPay');})
  it('has a prefix of 622885 and a length of 16', function() {assert(detectNetwork('6228857890123456') === 'China UnionPay');})
  it('has a prefix of 622886 and a length of 16', function() {assert(detectNetwork('6228867890123456') === 'China UnionPay');})
  it('has a prefix of 622887 and a length of 16', function() {assert(detectNetwork('6228877890123456') === 'China UnionPay');})
  it('has a prefix of 622888 and a length of 16', function() {assert(detectNetwork('6228887890123456') === 'China UnionPay');})
  it('has a prefix of 622889 and a length of 16', function() {assert(detectNetwork('6228897890123456') === 'China UnionPay');})
  it('has a prefix of 622890 and a length of 16', function() {assert(detectNetwork('6228907890123456') === 'China UnionPay');})
  it('has a prefix of 622891 and a length of 16', function() {assert(detectNetwork('6228917890123456') === 'China UnionPay');})
  it('has a prefix of 622892 and a length of 16', function() {assert(detectNetwork('6228927890123456') === 'China UnionPay');})
  it('has a prefix of 622893 and a length of 16', function() {assert(detectNetwork('6228937890123456') === 'China UnionPay');})
  it('has a prefix of 622894 and a length of 16', function() {assert(detectNetwork('6228947890123456') === 'China UnionPay');})
  it('has a prefix of 622895 and a length of 16', function() {assert(detectNetwork('6228957890123456') === 'China UnionPay');})
  it('has a prefix of 622896 and a length of 16', function() {assert(detectNetwork('6228967890123456') === 'China UnionPay');})
  it('has a prefix of 622897 and a length of 16', function() {assert(detectNetwork('6228977890123456') === 'China UnionPay');})
  it('has a prefix of 622898 and a length of 16', function() {assert(detectNetwork('6228987890123456') === 'China UnionPay');})
  it('has a prefix of 622899 and a length of 16', function() {assert(detectNetwork('6228997890123456') === 'China UnionPay');})
  it('has a prefix of 622900 and a length of 16', function() {assert(detectNetwork('6229007890123456') === 'China UnionPay');})
  it('has a prefix of 622901 and a length of 16', function() {assert(detectNetwork('6229017890123456') === 'China UnionPay');})
  it('has a prefix of 622902 and a length of 16', function() {assert(detectNetwork('6229027890123456') === 'China UnionPay');})
  it('has a prefix of 622903 and a length of 16', function() {assert(detectNetwork('6229037890123456') === 'China UnionPay');})
  it('has a prefix of 622904 and a length of 16', function() {assert(detectNetwork('6229047890123456') === 'China UnionPay');})
  it('has a prefix of 622905 and a length of 16', function() {assert(detectNetwork('6229057890123456') === 'China UnionPay');})
  it('has a prefix of 622906 and a length of 16', function() {assert(detectNetwork('6229067890123456') === 'China UnionPay');})
  it('has a prefix of 622907 and a length of 16', function() {assert(detectNetwork('6229077890123456') === 'China UnionPay');})
  it('has a prefix of 622908 and a length of 16', function() {assert(detectNetwork('6229087890123456') === 'China UnionPay');})
  it('has a prefix of 622909 and a length of 16', function() {assert(detectNetwork('6229097890123456') === 'China UnionPay');})
  it('has a prefix of 622910 and a length of 16', function() {assert(detectNetwork('6229107890123456') === 'China UnionPay');})
  it('has a prefix of 622911 and a length of 16', function() {assert(detectNetwork('6229117890123456') === 'China UnionPay');})
  it('has a prefix of 622912 and a length of 16', function() {assert(detectNetwork('6229127890123456') === 'China UnionPay');})
  it('has a prefix of 622913 and a length of 16', function() {assert(detectNetwork('6229137890123456') === 'China UnionPay');})
  it('has a prefix of 622914 and a length of 16', function() {assert(detectNetwork('6229147890123456') === 'China UnionPay');})
  it('has a prefix of 622915 and a length of 16', function() {assert(detectNetwork('6229157890123456') === 'China UnionPay');})
  it('has a prefix of 622916 and a length of 16', function() {assert(detectNetwork('6229167890123456') === 'China UnionPay');})
  it('has a prefix of 622917 and a length of 16', function() {assert(detectNetwork('6229177890123456') === 'China UnionPay');})
  it('has a prefix of 622918 and a length of 16', function() {assert(detectNetwork('6229187890123456') === 'China UnionPay');})
  it('has a prefix of 622919 and a length of 16', function() {assert(detectNetwork('6229197890123456') === 'China UnionPay');})
  it('has a prefix of 622920 and a length of 16', function() {assert(detectNetwork('6229207890123456') === 'China UnionPay');})
  it('has a prefix of 622921 and a length of 16', function() {assert(detectNetwork('6229217890123456') === 'China UnionPay');})
  it('has a prefix of 622922 and a length of 16', function() {assert(detectNetwork('6229227890123456') === 'China UnionPay');})
  it('has a prefix of 622923 and a length of 16', function() {assert(detectNetwork('6229237890123456') === 'China UnionPay');})
  it('has a prefix of 622924 and a length of 16', function() {assert(detectNetwork('6229247890123456') === 'China UnionPay');})
  it('has a prefix of 622925 and a length of 16', function() {assert(detectNetwork('6229257890123456') === 'China UnionPay');})

});
//describe('should support Switch')
