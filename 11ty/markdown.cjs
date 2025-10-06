import markdownItDefault from 'markdown-it';

// you can use any plugins and configs you want
const markdownIt = markdownItDefault({
  html: true,
  breaks: false,
  linkify: true,
});

export default markdownIt;
