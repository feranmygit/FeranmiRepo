# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshots/Web%20capture_9-3-2024_223026_127.0.0.1.jpeg)
![](./screenshots/Web%20capture_9-3-2024_223443_127.0.0.1.jpeg)

### Links
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- javascripts
- [Styled Components](https://styled-components.com/) - For styles

### What I learned
i learned using javascript to toggle hamburger menu displays, which enhance the user experience of the website or web application by providing a seamless and intuitive navigation experience, especially on mobile devices or smaller screens.

To see how you can add code snippets, see below:

```html
      <input type="checkbox" name="input" id="input">
      <label for="input" id="hambuggerContainer">
        <div class="hambugger" id="hambuger" onclick="toggleMenu()"></div>
        <div id="removeContainer" onclick="toggleMenu()"><img class="remove" src="./images/icon-close.svg" alt=""></div>
      </label
```
```css
#input:checked ~ .navContainer{
    display: block;
}

```js
function toggleMenu() {
    const hambugger = document.querySelector('.hambugger');
    const removeContainer = document.querySelector('#removeContainer');
    
    if (hambugger.style.display === 'none') {
        hambugger.style.display = 'block';
        removeContainer.style.display = 'none';
    }
    else {
        hambugger.style.display = 'none';
        removeContainer.style.display = 'block';
    }
}

### Continued development

i'd love to continue the mobile first approach to building webpages,it is faster and pages built with this approach tends to adjust faster to the change in screen size and also loads fastetr on mobile.

### Useful resources

- [Example resource 1]- This helped to correctly traverse through HTML elemwents using CSS and JavaScript.

## Author 

- git - [feranmygit](https://github.com/feranmygit)
- Frontend Mentor - [@feranmygit](https://www.frontendmentor.io/feranmygit)
- Twitter - [@Ozonegist](https://www.twitter.com/Ozonegist)

