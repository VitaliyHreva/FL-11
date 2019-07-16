let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

function getNumbers(arg) {
  let numbers = [];

  for (let i = 0; i < arg.length; i++) {
    if(arg[i] >= 0) {
      numbers.push(arg[i])
    }
  }
  
  return numbers;
}

function findTypes() {
  let elem = {}
  
  for (let i = 0; i < arguments.length; i++) {
    let paramsType = typeof arguments[i]
    
    if (paramsType in elem) {
      elem[paramsType] +=1
    } else {
      elem[paramsType] = 1
    }   
  }
  
  return console.log(elem)
}

function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

executeforEach([1,2,3], function(el) { 
  console.log(el) 
}) 

function mapArray(arr, func) {
  let newArray = []
  
  executeforEach(arr, function(el) { 
    newArray.push(func(el))
  }) 
  
  return newArray;
}

mapArray([2, 5, 8], function(el) { 
  return el + 3 
})

function filterArray(arr, func) {
  let filteredArr = []
  
  executeforEach(arr, function(el) { 
    if(func(el)) {
      filteredArr.push(el) 
    }
  }) 
  
  return filteredArr;
}

filterArray([2, 5, 8], function(el) { 
  return el > 3 
})

function showFormattedDate(date) {
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `Date: ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'))


function canConvertDate(date) {
  let dat = new Date(date)
  let month = dat.getMonth()

  if(month <= 12) {
    console.log(true)
  } else {
    console.log(false)
  }
} 

canConvertDate('2016-12-18T00:00:00')

function daysBetween(date1, date2) {
  let oneDayMilisec = 24*60*60*1000;
  let firstDate = date1;
  let secondDate = date2;

  let daysBtwn = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDayMilisec));
  console.log(daysBtwn)
}

daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))

function getAmountOfAdultPeople() {
  let days = 365;
  let oneDayMilisec = 24*60*60*1000;
  let years = oneDayMilisec*days; 
  let ageArr = [];
  let date = new Date()

  ageArr = filterArray(data, function(el) {
    let bday = new Date(el[' birthday '])
    let adult = Math.round(Math.abs((date.getTime() - bday.getTime()) / years));
    
    return adult >= 18
  })

  return ageArr.length
}

getAmountOfAdultPeople(data)

function keys(objects) {
  let keysArr = [];
  for (let key in objects) {
    if (objects.hasOwnProperty(key)) {
      keysArr.push(key);
    }
  }

  return keysArr;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(values) {
  let valuesArr =[];
  for (let key in values) {
    if (values.hasOwnProperty(key)) {
      valuesArr.push(values[key])
    }
 }

 return valuesArr;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});