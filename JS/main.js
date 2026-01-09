/*
let fname = 'John'

let age = 30
let hight = 150.5
const idcard = '123'

let isThai = false

fname = 'Tom'
const pi = 3.14

console.log('ID Card:', idcard)

console.log('Name:', fname)
console.log('Age:', age)


let number1 = 'Thanakrit'
let number2 = 'Treechan'

let number3 = number1 + ' ' + number2

console.log('Number3 = ', number3)
*/

/** 
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>= มากกว่าหรือเท่ากับ
< น้อยกว่า
<= น้อยกว่าหรือเท่ากับ

let number1 = 5
let number2 = 5
let condition = number1 <= number2

/*
// boolean (true, false)
console.log('Condition is = ', condition)


//if else condition
if (number1 != number2) {
    console.log('This if')
}else if (number1 == number2){
    console.log('This else if')
}else{
    console.log('This else')
}
*/
/**
Grade 
>=80 A
>=70 B
>=60 C
>=50 D

let score = prompt('ใส่ตัวเลข')
if (score==67){
    console.log('Six Seven!!')
}
if (score >= 80){
    console.log('Grade A')
}else if (score >= 70){
    console.log('Grade B')
}else if (score >= 60){
    console.log('Grade C')
}else if (score >= 50){
    console.log('Grade D')
}else{
    console.log('Grade F')
}
*/

/*
&& และ
|| หรือ
! not ไม่
 

let number1 = 5
let number2 = 10

let condition = !(number1 >=3 || number2 >=11)
console.log('Result of Condition = ',condition)

let number = 20
if (number %2 ==0){
    console.log('Even')
}
*/

/* for loop
let counter = 0
while (counter <=9){
    console.log('Hi')
    counter = counter +1
}
for(let counter=0;counter<10;counter=counter+1){
    console.log('Hi')
}
*/
/* array
let age1 = 20
let age2 = 25
let age3 = 30

let ages = [25,30,40]
ages = [200,100,50]

console.log('age1 age2 age3', age1, age2, age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array',ages)

console.log('index',ages[0])
//ต่อ array
ages.push(25)
console.log('push array',ages)

//ลบ array
ages.pop()
console.log('pop array',ages)

let ages2 = [50,20,25,30,35,40]
if(ages2.includes(30)){
    console.log('มีเลข 30 อยู่ในarray')
}
ages2.sort()
console.log(ages2)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[2]) 

for(let index=0;index<name_list.length;index++){
    console.log('name_list',name_list[index])
}
*/

/* object 
let student = [{
    age:30,
    name:'aa',
    grade:'A'
},{
    age:35,
    name:'bb',
    grade:'B'
}]
student.push({
    age:40,
    name:'cc',
    grade:'C'
})
student.pop()

console.log('student',student)
console.log('student 1 age',student[0].age)
console.log('student 1 name',student[0].name)
console.log('student 1 grade',student[0].grade)
let age1=30
let name1='aa'
let grade1='A'

for (let index=0;index<student.length;index++){
    console.log('Student NUmber',index+1)
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}
*/

/* function 

let score1 = 55
let score2 = 65

//ประกาศ function
function calculate_grade(score){
    if (score >= 80){
        grade = 'A'
    }else if (score >= 70){
        grade = 'B'
    }else if (score >= 60){
        grade = 'C'
    }else if (score >= 50){
        grade = 'D'
    }else{
        grade = 'F'
    }
    return grade
}
//เรียกใช้ function
let grade1 = calculate_grade(score1)
let grade2 = calculate_grade(score2)

console.log('Grade ', grade1)
console.log('Grade ', grade2)


let score = [20,30,40,50]


for(let index=0;index<score.length;index++){
    console.log('Score',score[index])
    if (score[index>=30]){
        newScore.push(score[index])
    }
}
/*
score[0] = score[0] *2
score[1] = score[1] *2
score[2] = score[2] *2
score[3] = score[3] *2

score = score.map((s) => {
    return s * 2
})

score.forEach((s) => {
    console.log('forEach Score', s)
})

let newScore = score.filter((s) => {
    return s >= 30
})
newScore.forEach((ns) => {
    console.log('New Score',ns)
})
*/

/* object function
let students = [{
    name:'aa',
    score:60,
    grade:'D'
},{
    name:'bb',
    score:80,
    grade:'A'
}
]

let student =students.find((s)=>{
    if(s.name == 'aa'){
        return true
    }
})

let double_score = students.map((s) => {
    s.score = s.score*2
    return s
})
let highScore = students.filter((s)=>{
    if(s.score>120){
        return true
    }
})

console.log(student)

console.log('double_score',double_score)
console.log('highScore',highScore)
*/