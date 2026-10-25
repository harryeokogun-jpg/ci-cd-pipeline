const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('portfolio has a title, heading and projects', () => {
  const html = fs.readFileSync('index.html', 'utf8');

  assert.match(html, /<title>My Portfolio<\/title>/);
  assert.match(html, /<h1>Hello, I'm Harry<\/h1>/);
  assert.match(html, /A DevOps engineer working on web development and application/);
});

test('portfolio stylesheet exists', () => {
  assert.equal(fs.existsSync('style.css'), true);
});
