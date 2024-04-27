import { Dispatch, SetStateAction } from "react";

export interface iComment {
  id: number;
  comment: string;
}

export interface iComments {
  user_id: number;
  comments: iComment[];
}

export interface iPerson {
  id: number;
  name: string;
  psw: string;
  admin: boolean;
  avatar: string;
  banner: string;
}

export interface iPosts {
  id: number;
  path: string;
  title: string;
  status: string;
  discription: string;
}

export interface iSeach {
  results: iPosts[];
  setResults: Dispatch<SetStateAction<iPosts[]>>;
}
