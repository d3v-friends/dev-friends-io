if  [[ "$OSTYPE" == "msys" ]]; then
  ./bin/hugo.exe server --port 3100;
else
  ./bin/hugo serve --port 3100;
fi
