

let students = [
    {
        id: 1,
        ad: "Lale",
        surname: "ELiyeva",
        age: 21,
        hobbies: "voleybolcu",
        fenn: "tarix",
        qiymet: 90,

    },

    {
        id: 2,
        ad: "Leyla",
        surname: "Zeynalova",
        age: 21,
        hobbies: "Tenis",
        fenn: "riyaziyyatci",
        qiymet: 97,
    },

    {
        id: 3,
        ad: "Amin",
        surname: "Veliyev",
        age: 22,
        hobbies: "futboll",
        fenn: "fizika",
        qiymet: 98,
    },

    {
        id: 4,
        ad: "Ehmed",
        surname: "Ehmedov",
        age: 20,
        hobbies: "voleybolcu",
        fenn: "Cografiya",
        qiymet: 70,

    },

    {
        id: 5,
        ad: "vusal",
        surname: "Sadiqov",
        age: 20,
        hobbies: "voleybolcu",
        fenn: "tarix",
        qiymet: 60,

    },

    {
        id: 6,
        ad: "Samir",
        surname: "Qarayev",
        age: 22,
        hobbies: "Sahmat",
        fenn: "Zoologiya",
        qiymet: 30,

    },

    {
        id: 7,
        ad: "Zehra",
        surname: "Esedova",
        age: 22,
        hobbies: "tenis",
        fenn: "tarix",
        qiymet: 30,

    },

];
//  students.map((a) => ( a.qiymet<90){
//     console.log( `${a.ad} ${a.surname}`);
//  });

console.log(students);
let cem = 0;
students.map((student) => {
    cem += student.mark;
});
let average = cem / students.length;
console.log("Umumi Ortalama: " + average);

let loosers = [];
const checkMark = students.map((student) => {
    if (student.mark < 90) {
        loosers.push(student.name, student.surname);
    }
});
alert("Xeberdarliq!!! " + loosers.join(","));
