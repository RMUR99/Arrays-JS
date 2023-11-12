
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const fiftiees = inventors.filter(function(inventor){
   if(inventor.year >= 1500  && inventor.year < 1600 ){
       return true ; 

   }
  });
  console.log(fiftiees);


  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const fullName = inventors.map(function (inventor  ){
   if(inventor.first !=null && inventor.last !=null)
   return inventor.first + " " +  inventor.last;

  });
  console.log(fullName);

  // Array.prototype.sort()
  // apparentaly you need an a-b to sort , that is why oldestInventor adn YoungestInventor does not work 
  // const ages = inventors.sort(function (oldestInventor , youngestInventor){
    
  //   if (youngestInventor.year> oldestInventor.year){
  //     return   oldestInventor + youngestInventor;
  //   }
  //   else{
  //   return oldestInventor - youngestInventor;
  //   }

  // });
  // console.log(ages)
 
  // 3. Sort the inventors by birthdate, oldest to youngest
  const ages = inventors.sort((a,b) => a.year > b.year ? 1  : -1) ;
  console.log(ages)

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?

  const livingYears = inventors.reduce(function (living , inventor){
    // it wont work if you put inventors.pass put inventors 
   if (  inventor.passed != null ) {
    
    return living + (inventor.passed - inventor.year)
   }
      // return  inventors.passed ++;
  },0)
  console.log(livingYears);

  // 5. Sort the inventors by years lived

  const oldest = inventors.sort(function ( a, b) {
   const lastInventor = a.passed - a.year; 
   const preLastInventor = b.passed - b.year; 
   return lastInventor > preLastInventor? -1 : 1 ;

  });
  console.table(oldest);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  // to call upon the elements you need to inspect from the browser and select where all items are shown 

  // i have also notice mw-pages i will test it 

  // ----------------------Testing----------------------------
  // const Category = document.querySelector('.mw-category-generated');
  // pp---------------------------testing end 
  // const Pages = document.querySelector('.mw-pages');
  // it equals category.queryselectionAll due it being it's child 



  //-------------------------Testing----------------------------
  // const links = Array.from(Category.querySelectorAll('a'));
  //------------------------------end testing line ------------------

  // const links2 = Array.from(Pages.querySelectorAll('a'));


  // const de = links.sort('de')( wrong practice )
  //-----------------------------Testing-----------------------------------
  
  // const de = links.map(link => link.textContent);
  //           links.filter(steetName => steetName.includes('de'))

  
  // ------------------------------end testing line ------------------------
  
  
  // this function was not working with me 
  // const de = links2.map(link => link.textContent)


  // 7. sort Exercise
  // Sort the people alphabetically by last name

  const peopleLastName = people.sort(function (LN , FN){
    // this turned to an array where the index was staring from the last name 
    // that is why we have last first then first 
  const [last , first] = LN.split(',');
  const [lastNxt , firstNxt] = FN.split(',');
  return last > lastNxt ? 1:-1;
  console.log(peopleLastName)


  });







  // inventor sorting
  const lastNames = inventors.sort(function(a,b) {
 if (a.last < b.last) {
  return -1 ;
 }
 if ( a.last > b.last) {
     return 1 ;
 }
 return 0

  }) ; 
  
 console.log(lastNames);

 
  

  // 8. Reduce Exercise
  
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  const transport = data.reduce(function (obj , item ){
    if ( !obj[item]) {
      obj[item] =0;
    }
    obj[item]++ ;
    return obj 
  },{})
  console.log(transport);
