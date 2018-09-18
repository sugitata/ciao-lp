# Ciao landing page

```
$ yarn install

# build and watch index.html
$ yarn start

# build and watch girls.html
$ yarn start_girls

# build for production
$ yarn prod
$ yarn prod:girls
```

[percelのバグ](https://github.com/parcel-bundler/parcel/issues/856)？っぽいのでプロダクション用のディレクトリは分けている(/prod)

### yarn prod / yarn prod:girls後に行うこと
1. htmlファイルのパスを相対パスに書き直す
