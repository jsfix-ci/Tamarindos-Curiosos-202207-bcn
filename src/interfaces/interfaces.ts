export interface IMeme {
  url: string;
  title: string;
  author: string;
  likes: number;
  postlink: string;
}

export interface IMemeContext {
  memes: IMeme[];
}
