let n: string = '4'
const b: boolean = false
const ob: object = {a: 33, b: {c: 33}}
const nn: null = null
let u: undefined
let nnn: bigint
let ss: symbol

let an: string | number = 44
an = an + '5'

const a: any = 4
let uu: unknown = 4

const arrN: number[] = [1, 2, 3]
const arrS: string[] = ['1', '3']
const arrSN: (string | number)[] = ['1', '3', 4]
const arrA: any[] = ['1', '3', 4]

const tuple: [number, object] = [2, {}]

enum schoolmates {
  'vasya',
  'petya',
  'sasha'
}

enum teachers {
  'Lubov' = "Stepanovna",
  'Ilya' = "Petrovich",
  'Michail' = "Stepanovich",
}

const pupil = 'petya'

console.log(schoolmates[pupil], schoolmates[2])
console.log(teachers['Lubov'], teachers['Stepanovich'])


interface Human {
  age: number,
  height: number,
  mass: number,
}

const human: Human = {
  age: 33,
  height: 180,
  mass: 69
}

interface Person extends Human {
  name: string,
  job?: string,
  family?: Human[]
}

const vasya: Person = {
  ...human,
  name: 'vasya',
  family: [
    {
      age: 33,
      height: 180,
      mass: 69
    },
    {
      age: 33,
      height: 180,
      mass: 69
    }
  ]
}

interface Student<T> extends Person {
  graduation: T
}

interface SchoolStudent extends Student<string> {

}

const petya: Student<string> = {
  ...human,
  name: 'petya',
  graduation: 'high elementary school'
}




function getField(person: Person, field: string): string {
  return person[field]
}

const getName = function(person: Person, modify: string = ''): string {
  return modify + person.name
}

console.log(getName(vasya))

const getAge = (person: Person): number => {
  return person.age
}

function setValue<T>(student: Student<T>, newG: T): T {
  student.graduation = newG
  return newG
}

setValue<string>(petya, 'low elementary school')

function setError(error: string): never {
  throw new Error(error)
}

interface CSS {
  [state: string]: string | number,
}

const css: CSS = {
  width: '33px',
  margin: '22px 44px'
}

// interface SetCss {
//   (prop: string): CSS
//   (prop: string, value: string): string[]
// }

function setCss(prop: string, value?: string): [string, string]
function setCss(prop: string): CSS

function setCss(prop: string, value?: string){ // (prop, value) -> add one /// (prop) -> remove one
  if(value) {
    css[prop] = value
    return [prop, value]
  } else {
    return Object.entries(css)
      .filter(f => f[0] !== prop )
      .reduce((acc: CSS, item) => {
        acc[item[0]] = item[1]
        return acc
      }, {})
  }
}

setCss('height', '44px')
setCss('margin')


