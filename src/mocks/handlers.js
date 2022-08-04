import { rest } from "msw";

export const handlers = [
  rest.get("https://meme-api.herokuapp.com/gimme/10", (_req, res, ctx) => {
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
];
