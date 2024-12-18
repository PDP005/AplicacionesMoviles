export interface Idetalles {
  message: string;
  result: IInfo[];
}

export interface IInfo {
  properties: Properties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface Properties {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
}


