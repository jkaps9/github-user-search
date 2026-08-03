# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Search for GitHub users by their username
- [x] See relevant user information based on their search
- [x] Switch between light and dark themes
- [x] **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

#### Dark mode

<img src="./screenshot.png" width="700">

#### Light mode

<img src="./screenshot-light-mode.png" width="700">

#### Mobile

<img src="./screenshot-mobile.png" width="375">

### Links

- Solution URL: [https://github.com/jkaps9/github-user-search](https://github.com/jkaps9/github-user-search)
- Live Site URL: [https://jkaps9.github.io/github-user-search](https://jkaps9.github.io/github-user-search)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

How to fetch API data in React using useEffect(). Was able to pass data up/down between the search component and the display components through App.jsx as the single source of truth.

### Continued Development

My loading state does not show when new data is loading. Need to figure out how to show that.

Update: RESOLVED! I was not resetting loading to true inside the fetch call so it never got reset. Plus, I was using a nullish coalescing operator which did not allow the loading state to be shown even when it was set to true.

## Author

- Frontend Mentor - [@jkaps9](https://www.frontendmentor.io/profile/jkaps9)
