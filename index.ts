//* enums

const enum links {
	yt = "youtube.com",
	in = "instagram.com",
	tg = "telegram.co",
	li = "linkedin.com",
}

console.log("links", links["yt"]);
console.log(links.li);

//* funcs

function createPassword(name: string, age: number | string = 20, special: string = ""): string {
	return `${name}${age}${special}`;
}

console.log("createPassword", createPassword("Jack", "41"));

//* funcs rest args

function createSkills(name: string, ...skills: Array<string>): string {
	return `Hello, my name is ${name},and my skills are ${skills.join()}`;
}

console.log("createSkills", createSkills("Tom", "Js", "React", "Vite"));

//* objects

let user: Gunslinger = {
	name: "Morgan",
	age: 41,
	pistol: "Glock",
};

user.age = 44;

console.log("createPassword Arth", createPassword(user.name, user.age));

let admin: Gunslinger = {
	name: "John",
	age: 37,
};

//* type

type Human = { name: string; age: number };

//* interface

const guest: Human = {
	name: "Teresa",
	age: 18,
};

guest.name = "Tina";

interface Gunslinger extends Human {
	readonly name: string;
	pistol?: string;
}

//* Generic
