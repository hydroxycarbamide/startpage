
FROM oven/bun:alpine

WORKDIR /startpage

COPY assets ./assets
COPY src ./src

EXPOSE 8080/tcp

ENTRYPOINT [ "bun", "run", "./src/index.ts" ]
