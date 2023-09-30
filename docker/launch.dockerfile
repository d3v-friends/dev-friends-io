FROM klakegg/hugo:ext-alpine

ARG PORT

WORKDIR /src
COPY . .

CMD hugo serve --port ${PORT} --panicOnWarning
