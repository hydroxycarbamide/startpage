console.log("Hello World!");

const fetch = (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname;

  if (path === "/") {
    return new Response(Bun.file("./index.html"), {
      headers: {
        "Content-Type": "text/html"
      }
    });
  } else if (path === "/style.css") {
    return new Response(Bun.file("./style.css"), {
      headers: {
        "Content-Type": "text/css"
      }
    });
  } else if (path === "/cat.gif") {
    return new Response(Bun.file("./cat.gif"), {
      headers: {
        "Content-Type": "image/gif"
      }
    });
  } else if (path === "/favicon.ico") {
    return new Response(Bun.file("./favicon.ico"), {
      headers: {
        "Content-Type": "image/x-icon"
      }
    })
  } else if (path.startsWith('/fonts/')) {
    const fontPath = path.slice('/fonts/'.length);
    return new Response(Bun.file(`./fonts/${fontPath}`), {
      headers: {
        "Content-Type": "application/octet-stream"
      }
    })
  }

  return new Response("404!");
}

Bun.serve({
  port: 80,
  hostname: "localhost",
  fetch
});

