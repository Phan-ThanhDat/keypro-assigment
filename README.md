# Keypro Assigment Frontend

**You can check the app live in [here](https://keypro-assigment.solodev.info/).** If you have some trouble to run it locally.

## Features

### Login and Logout

![Login](https://raw.githubusercontent.com/hongduc-phan/keypro-assigment/main/docs/assets/login.jpeg)

![Logout](https://raw.githubusercontent.com/hongduc-phan/keypro-assigment/main/docs/assets/logout.jpeg)

### Points display

![Points](https://raw.githubusercontent.com/hongduc-phan/keypro-assigment/main/docs/assets/points.jpeg)

Cluster support to improve perfomance when display many points

![Cluster](https://raw.githubusercontent.com/hongduc-phan/keypro-assigment/main/docs/assets/cluster.jpeg)

### Point add new

![Add point instruction](https://raw.githubusercontent.com/hongduc-phan/keypro-assigment/main/docs/assets/add-point-1.jpeg)

![Add point form](https://raw.githubusercontent.com/hongduc-phan/keypro-assigment/main/docs/assets/add-point-2.jpeg)

### Point editing

![Edit point form](https://raw.githubusercontent.com/hongduc-phan/keypro-assigment/main/docs/assets/edit-point.jpeg)

## Enviroment config

Copy `.env.example` to `.env` and change.

The app requires a backend service to function. I chose to implement a prototype backend instead of mocking an API to showcase my skills. The API host included in the enviroment file. Mostly you only need to change Google Map API.

In the email I sent included the test Google Map API key, and accounts to login the app.

The app relies on one premium feature of Google Maps (Cluster), so please add the API key if you want to check the code locally.

## Development

### Local Node Enviroment

If you prefer to run the app in your Node local machine

```
npm i
```

```
npm run dev
```

Check [localhost:5173](http://localhost:5173)

### Dev container

The project have configure devcontainer as well.

### Docker Enviroment

Make sure your machine installed Docker

```
docker-compose -f docker-compose.dev.yml up
```

or

```
npm run dev:docker
```

Check [localhost:5173](http://localhost:5173)

## Technology Highlight

### Tailwind CSS

Although I have the ability to work with `Pure CSS (BEM)`, `CSS Module`, and `CSS in JS`, I decided to use this for rapid development of MVP projects.

### Zustand

As I believe, the project about map display will need to be fine-tuned in performance.

Since the introduction of React Context, passing state to the descendants is easiser, we might not need another global state management. But the reality is more complex than that.

React will re render when the parent set state then its descendants will re render as well (the parent also provive context for it descendants).

So using React Context we still need to set state somewhere normally on top of the childs.

By using a global state management, the descendants can subscribe to a state and re render only when the state change from the store only. Reduce the time it has to re render when a parent re renders.

I choose `Zustand` because the API is very easy to use and it can work well without React. For example `React-Router` v6 introduced loader function. I can check the user state on it (auth checking) before redirect the user.

### React-query

For an application, form actions always come along with data. Using React-query can come in handy.

The developer tend to have to deal with state management (like `isLoading`, `isFailed`, `isSummiting`), caching, invalidate cache... `React-query` can lift up the burden for the developer.

### React-hook-form + Zod

Form validation is always needed. We can guide the user to the correct data when they submit it, which reduces the work for the backend servers.

`React-hook-form` is an excellent library to use, but the missing validation schema is not good. By using it with `zod` we can almost validate any complex data schema.

## Code quality

- Ensured the code quality with `eslint`, `style-lint`
- Formated the code with `prettier`
- Commit lint `commit-lint`
- All the process automatically when commit the code by `husky`, `lint-staged`

Although some developers might trick the process by bypass the commit hook. In the real project, we should protect the important branches (prevent merge directly) and setup CI to check the code quality before merge request.
