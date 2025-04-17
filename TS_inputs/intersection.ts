// intersection

type FileData = {
  path: string;
  content: string;
}


type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}


type Status = {
  isOpen: boolean;
  errorMessage?: string;
}


type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;



// guards

type FileSource = { path: string, type: 'file' };
const fileSource : FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
}


type DBSource = { connectionURL: string, type: 'db' };
const dbSource: DBSource = {
  type: 'db',
  connectionURL: 'some-connection-url',
}


type Source = FileSource | DBSource


function loadData(source: Source) {
  if (source.type === 'file') return source.path

  return source.connectionURL
}


// function overloads

function getLength(val: any[]): number
function getLength(val: string): string

function getLength(val: string | any[]) {
  if (typeof val === 'string') {
    const numberOfWords = val.split(' ').length;
    return `${numberOfWords}`
  }
  return val.length;
}


const numberOfWords = getLength('does this work?')
const numItems = getLength(['Sports', 'Cookies'])


// index types

type DataStore = {
  [prop: string]: boolean | string;
}


let store: DataStore = {
  a: 'a',
  b: 'b'
};


store.c = 'c'


type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};


cats.boris;


type Colors = "red" | "green" | "blue"
type RGB = [number, number, number]


const pallete = {
  red: [1, 255, 4],
  green: '#3454',
  blue: [0, 333, 222]

} satisfies Record<Colors, string | RGB>


const color = pallete.green.toUpperCase()