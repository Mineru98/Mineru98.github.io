# Mineru Blog Project

### Build Process

```
yarn
yarn build
copy posts directory to build/static
yarn deploy
remove node_modules build directory
```

```
git push origin --delete gh-pages
git subtree push --prefix build origin gh-pages
```

### TodoList

 - [ ] Main Page
 - [ ] Sub Page
 - [ ] Page Design
 - [X] my icon
 - [ ] SEO
 - [X] Change domain to [https://mineru98.github.io](https://mineru98.github.io)