// ? Basic types

const numb: number = 1;
const str: string = "Hello world!";
const trueValue: boolean = true;

let list: Array<number>;

list = [1, 2, 3];

// ? Advanced types

//* enum
enum Numbers {
	zero,
	one,
	two,
	three,
}

console.log(Numbers);

//* never
const err = (msg: string): never => {
	throw new Error(msg);
};

//! err(str);

//* object

const create = (o: object | null): void => {};

create(null);

//* type

type Name = string;

const username: Name = "ansachuk";
console.log(username);
