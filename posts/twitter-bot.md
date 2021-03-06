---
title: "มาสร้างบอทสำหรับ Twitter กัน!"
slugname: "twitter-bot"
description: "I build my twitter bot to update my bio using twitter api"
metaDesc: "I build my twitter bot to update my bio using twitter api"
date: "29 Apr 2022"
minutesread: 2
draft: true
tags:
  - twitter
---

I just got permission in to [twitter api](https://developer.twitter.com/) and I have an idea to make a countdown in my twitter profile so I create my twitter bot to update my profile from [ErikCH/Bot-Twitter-Github](https://github.com/ErikCH/Bot-Twitter-Github).

![](https://ronnapat.com/blog/my-twitter-bot/title.png)

Follow me on twitter : [@ronnapatp](https://twitter.com/ronnapatp)

## Why I create this project

I have idea to create twitter bot since Dec 2021 but I need to wait for twitter for approved my request (which is not long but I forgot to give them a important reason so I get approved late) after I read twitter api docs and I got approved from twitter I create my first twitter bot to countdown from now to Newyear Christmas.

## What my twitter bot can do?

- Update my profile
- Tweet jokes (comming soon!)

In this project I use twitter api name `account/update_profile` with `twitter` dependencies

To update profile

```typescript
const params = {
  url: website,
};

await client.post("account/update_profile", params);
console.log("🎉 Success! Updated Twitter bio/location and website");
```

To install twitter dependencies

```zsh
npm install twitter
```

Github repo : [ronnapatp/twitter-bot](https://github.com/ronnapatp/twitter-bot)

If you read until here you also can donate to me at [ronnapat.com/donate](https://ronnapat.com/en-us/donate)
