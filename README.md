<p align="center">
  <img width="250" src=".github/logo.png" alt="Instagram" />
</p>

# Robot to comment in instagram
## 📑 About Project
This is BotCommentInstagram, a simple open source bot for instagram comments in small sweepstakes.
You must clone the project or download the ZIP, then you need to have some tools installed with Node and NPM or YARN, then you need to create a copy of the .env.example file with .env name and fill them all in the values and by the terminal execute the robot.

`note:` just be careful not to be blocked, so the ideal time for comments is every 5 minutes.

## 🚀 Getting Started
### Dependencies
- [Node JS](https://nodejs.org)
- [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com)

### Usage
install dependencies in terminal

```
npm i
```

Copy `.env.example` to `.env`

```
cp .env.example .env
```

Fill in the environment variables listed below

```
INSTA_USERNAME="<your username instagram>"
INSTA_PASSWORD="<your password instagram>"
INSTA_POST_URL="<Post URL to be commented>"
INSTA_COMMENT="<texts to be commented>"
INSTA_COMMENT_TIME=<time to comment in milliseconds>
```

### Start bot
Run in terminal
```
npm start
```

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---
Made with ❤️ by Khalleb
