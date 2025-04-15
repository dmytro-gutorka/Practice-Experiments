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


type FileSource = { path: string };
const fileSource : FileSource = {
  path: 'some/path/to/file.csv',
}

type DBSource = { connectionURL: string };
const dbSource: DBSource = {
  connectionURL: 'some-connection-url'
}


type Source = FileSource | DBSource


function loadData(source: Source) {
  if ('path' in source) {

  }
}