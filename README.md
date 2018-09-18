# Ciao landing page

```
$ yarn install

# build and watch index.html
$ yarn start

# build and watch girls.html
$ yarn start_girls

# build for production
$ yarn prod:start
$ yarn prod:start:girls
```

[percelのバグ](https://github.com/parcel-bundler/parcel/issues/856)？っぽいのでプロダクション用のディレクトリは分けている(/prod)

1. htmlファイルのパスを相対パスに書き直す