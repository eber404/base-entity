FROM oven/bun:1.0.5

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "run", "dev"]