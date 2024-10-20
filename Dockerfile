FROM oven/bun:alpine

ENV HOSTNAME localhost

WORKDIR /startpage

COPY assets ./assets
COPY src ./src
COPY package.json ./

EXPOSE 80

HEALTHCHECK --interval=5s --timeout=5s --retries=3 CMD wget --spider -q http://0.0.0.0/healthcheck || exit 1

ENTRYPOINT [ "bun", "start" ]
