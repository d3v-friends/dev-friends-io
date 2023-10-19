if  [[ "$OSTYPE" == "msys" ]]; then
  hugo server --port 3100
else
  ./bin/hugo serve --port 3100;
fi
