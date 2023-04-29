import * as axios from 'axios';

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
  age?: number,
  height?: number,
  mass?: number,
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

interface SinglePerson extends Omit<Person, "family"> {
  hobbies: string
}

const vasya: Omit<Person, "family"> = {
  ...human,
  name: 'vasya',
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

// function setCss(prop: string, value?: string): [string, string]
// function setCss(prop: string): CSS

// function setCss(prop: string, value?: string){ // (prop, value) -> add one /// (prop) -> remove one
//   if(value) {
//     css[prop] = value
//     return [prop, value]
//   } else {
//     return Object.entries(css)
//       .filter(f => f[0] !== prop )
//       .reduce((acc: CSS, item) => {
//         acc[item[0]] = item[1]
//         return acc
//       }, {})
//   }
// }

// setCss('height', '44px')
// setCss('margin')

interface AbstractPersonalization {
  human: Human
}

class DistinctHuman {
  public readonly human: Human // public, private
  constructor(human = {}) {
    this.human = human
  }

  setAge = (age: number): void => {
    if(this.human) {
      this.human.age = age
    }
  }

  getAge = (): number => {
    return this.human.age
  }
}



class DistinctPerson{
  public person?: Person
  constructor(person) {
    this.person = person
  }

  setPerson = (person) => {
    this.person = person
  }

  getPerson = () => {
    return {...this.person}
  }

}

class Personalization {
  DistinctHuman: DistinctHuman
/*
* interface DistinctHuman {
*  human: Human
*  setAge(age: number): void
*  getAge(): number
* }
* */
  DistinctPerson: DistinctPerson

  constructor(person, human) {
    this.DistinctHuman = new DistinctHuman(human)
    this.DistinctPerson = new DistinctPerson(person)
  }

  getData = () => {
    return {...this.DistinctPerson.getPerson(), age: this.DistinctHuman.getAge()}
  }
}

const myPerson = new Personalization(vasya, {age: 55})
console.log(myPerson.getData())

const mFetch = async ():Promise<any> => {
  return axios.get('https://www.google.com/');
}

const getGoogle = mFetch()





interface Weapon<T> {
  attack: number
  requirements: T
  type: 'one-hand' | 'two-hand'
}

interface SwordReq<T> {
  strength: number,
  class: T
}

const Fashion: Weapon<SwordReq<'swordsman' | 'babaritain'>> = {
  attack: 47,
  requirements: {
    strength: 69,
    class: 'swordsman'
  },
  type: 'one-hand'
}


const myList = new Map<string, unknown[]>([])

myList.set('12', [{}, {}])


const myUniqSet = new Set<number>()
myUniqSet.add(2)


const sum = <T,W>(a: T,b: W): number | string => {
  if(Array.isArray(a)) {
    a = a.reduce((acc, item) => acc + item, 0)
  }

  if(Array.isArray(b)) {
    b = b.reduce((acc, item) => acc + item, 0)
  }

  return Number(a) + Number(b)
}

sum<number, number[]>(5, [1,2,3])

sum<number[], number[]>([5, 4], [1,2,3])