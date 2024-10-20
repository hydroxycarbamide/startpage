const fetch = (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname;

  if (path.startsWith('/fonts/')) {
    const fontPath = path.slice('/fonts/'.length);
    return new Response(Bun.file(`./assets/fonts/${fontPath}`), {
      headers: {
        "Content-Type": "application/octet-stream"
      }
    })
  }

  return new Response("404!");
};

Bun.serve({
  port: Bun.env.PORT || 80,
  hostname: Bun.env.HOSTNAME || "localhost",
  static: {
    "/api/healthcheck": new Response("All good!"),
    "/": new Response(await Bun.file("./src/index.html").bytes(), {
      headers: {
        "Content-Type": "text/html",
      },
    }),
    "/style.css": new Response(await Bun.file("./src/style.css").bytes(), {
      headers: {
        "Content-Type": "text/css"
      },
    }),
    "/cat.gif": new Response(await Bun.file("./assets/img/cat.gif").bytes(), {
      headers: {
        "Content-Type": "image/gif",
      },
    }),
  },
  fetch,
});
