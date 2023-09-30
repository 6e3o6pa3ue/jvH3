// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

function findBiggestWord(inputString) {
    const wordsArray = inputString.split(" ");
    let longestWord = "";
    
    for (const word of wordsArray) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    
    return longestWord;
  }
  console.log(findBiggestWord("Hi, my name is Dima."));

// 2. написать функцию которая принимает число и возвращает перевернутое число

function reverseNumber(number){
number = number + '';
return number.split('').reverse('').join('');
}
console.log(reverseNumber(10101997))

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

function uniqueText(inputString) {
    let result = '';
  
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (result.indexOf(char) === -1) {
        result += char;
      }
    }
  
    return result;
  }
  console.log(uniqueText("vvvaaarrraaakkkkuuuttttaaaa"));
// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

function calcPoints(win, draw, loss) {
    return win*3 + draw*1 + loss*0;
}
console.log(calcPoints(3, 1, 0))

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

var number = [1, 2, 7, 17, 32, 47, 99, 66, 53 ,32, 102, 1000]
function statistics(arr) {
    let sum=0;
        for(let i=0; i<arr.length; i++) {
        sum+=arr[i];
    } 
        return {
        min:Math.min(...arr),
        max:Math.max(...arr),
        length:arr.length,
        avg:sum/arr.length,
        }
}
 console.log(statistics(number));


// 6.Написать функцию которая принимает массив работников компании 
// const workers = [
//     { name: "Jimm", salary: 40000, department: "IT" },
//     { name: "Bob", salary: 60300, department: "HR" },
//     { name: "Stacy", salary: 15000, department: "IT" },
//     { name: "Tom", salary: 55200, department: "DEVOPS" },
//     { name: "Kate", salary: 25000, department: "IT" },
//     { name: "John", salary: 40000, department: "HR" },
//     { name: "Billy", salary: 60000, department: "DEVOPS" },
//   ];
  
//   const result = findHighestPaidDepartment(workers);
//   console.log(result);

// function findHighestPaidDepartment(workers) {
//     const departmentSalaries = {};
//     for (const worker of workers) {
//       if (!departmentSalaries[worker.department]) {
//         departmentSalaries[worker.department] = {
//           totalSalary: 0,
//           count: 0,
//         };
//       }
//       departmentSalaries[worker.department].totalSalary += worker.salary;
//       departmentSalaries[worker.department].count++;
//     }

//     let highestPaidDepartment = '';
//     let highestAverageSalary = 0;

//     for (const department in departmentSalaries) {
//       const averageSalary =
//         departmentSalaries[department].totalSalary /
//         departmentSalaries[department].count;
//       if (averageSalary > highestAverageSalary) {
//         highestAverageSalary = averageSalary;
//         highestPaidDepartment = department;
//       }
//     }
  
//     return { department: highestPaidDepartment, average: highestAverageSalary };
//   }
 
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 
