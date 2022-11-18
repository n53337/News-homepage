"use strict";
import webDesktop from "./../assets/images/image-web-3-desktop.jpg";
import webMobile from "./../assets/images/image-web-3-mobile.jpg";
import retroPc from "./../assets/images/image-retro-pcs.jpg";
import laptop from "./../assets/images/image-top-laptops.jpg";
import gaming from "./../assets/images/image-gaming-growth.jpg";

export const article = {
  title: "The Bright Future of Web 3.0?",
  content: `We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
  But is it really fulfilling its promise?`,
  img: { desktop: webDesktop, mobile: webMobile },
};

export const news = [
  {
    title: "Hydrogen VS Electric Cars",
    body: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    body: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const related = [
  {
    head: "01",
    title: "Reviving Retro PCs",
    body: "What happens when old PCs are given modern upgrades?",
    img: retroPc,
  },
  {
    head: "02",
    title: "Top 10 Laptops of 2022",
    body: "Our best picks for various needs and budgets.",
    img: laptop,
  },
  {
    head: "03",
    title: "The Growth of Gaming",
    body: "How the pandemic has sparked fresh opportunities.",
    img: gaming,
  },
];
