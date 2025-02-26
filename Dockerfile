FROM node:22

WORKDIR /workspace

RUN npm install -g corepack && corepack enable && corepack prepare pnpm@latest --activate

COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install

COPY . .