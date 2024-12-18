export interface RootObject {
  message?: string;
  total_records?: number;
  total_pages?: number;
  results: Result[];
}

export interface Result {
  uid: string;
  name?: string;
  url?: string;
  img?: string;
}

//control+shift+alt+v