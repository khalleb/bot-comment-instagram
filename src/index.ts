import 'dotenv/config';
import puppeteer from 'puppeteer';

const username = process?.env?.INSTA_USERNAME;
const password = process?.env?.INSTA_PASSWORD;
const postURL = process?.env?.INSTA_POST_URL;
const comment = process?.env?.INSTA_COMMENT;
const commentTime = Number(process?.env?.INSTA_COMMENT_TIME) || 600000;

const millisecondsToMinutesAndSeconds = (milliseconds:number) => {
  let minutes = Math.floor(milliseconds / 60000);
  let seconds = Number(((milliseconds % 60000) / 1000).toFixed(0));
  console.log("Time comment --> " + minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
}

// generate random time
const randomTime = () => {
  const timout = (Math.floor(Math.random() * (commentTime - 60000)) + 60000)
  millisecondsToMinutesAndSeconds(timout);
  return timout;
}

const randomComments = () => {
  if (!comment) {
    console.log('Enter comment');
    return 'My comment';
  }
  const comments = comment.split(';');
  const value = comments[Math.floor(Math.random() * comments.length)];
  return value;
}

const delay = (d: any) => new Promise(r => setTimeout(r, d))

async function commentPost(page: puppeteer.Page, i: number): Promise<void> {
  const comment = randomComments();
  console.log("comment --> " + comment );
  await delay(randomTime())
  
  await page.waitForSelector('textarea');
  await page.type('textarea', comment);
  await page.click('button[type="submit"]');
  await page.focus('textarea');

  console.log(`${new Date().toLocaleString()}  Comment ::`, i);

  return commentPost(page, i + 1)
}


(async () => {
  if (!username) {
    console.log('Enter username');
    return;
  }
  if (!password) {
    console.log('Enter password');
    return;
  }
  if (!postURL) {
    console.log('Enter postURL');
    return;
  }
  console.log('Starting browser');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log('Login flow');
  await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher');
  await page.waitForSelector('input[name="username"]');
  await page.type('input[name="username"]', username);
  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');

  console.log('Waiting for page to refresh');
  await page.waitForNavigation();

  console.log('Navigate to post and submitting the comment');
  await page.goto(postURL);

  commentPost(page, 1).then();
  // await browser.close();
})();