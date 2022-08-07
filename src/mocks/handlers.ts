import { rest } from "msw";
import { IMeme } from "../interfaces/interfaces";

const likedMeme: IMeme[] = [
  {
    url: "www.hola.es",
    title: "I'm the title",
    author: "Michael Jordan",
    postLink: "www.postlink.es",
    subreddit: "r/www.subreddit.es",
    likes: 25,
    isFavorite: false,
    id: "",
    isRendered: true,
  },
];

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL as string, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        memes: [
          {
            author: "Michael Jordan",
            postLink: "www.postlink.es",
            url: "www.hola.es",
            title: "I'm the title",
            subreddit: "www.subreddit.es",
            ups: 25,
          },
        ],
      })
    );
  }),

  rest.post(
    process.env.REACT_APP_LOCAL_MEMES_API_URL as string,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(likedMeme));
    }
  ),

  rest.get(
    process.env.REACT_APP_LOCAL_MEMES_API_URL as string,
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(likedMeme));
    }
  ),
];
