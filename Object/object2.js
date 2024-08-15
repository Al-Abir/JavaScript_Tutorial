// const tinderUser = new Object() // singleton
const tinderUser = {}   // none singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //object ar vitor object thake aita akta problem
// const obj3 = Object.assign({}, obj1, obj2, obj4) // upor ar problem slove korar jonno ai approcah babohar kora hoi

const obj3 = {...obj1, ...obj2} // sprade operator 90% jaigi ait use kora hoi
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //database onek besi use kra hobe
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //alada alada array te convert kore fale

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //property ase kina nai tai check korar jonno babohar kora hoi


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course   //Destructuring  kora hosce ai khane

// console.log(courseInstructor);
console.log(instructor);

// {     object ar kono name nai JSON object aita
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
