This is my solution to [Frontend Mentor URL shortening API landing page](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G)

---
## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
The challenge is to integrate with the [shrtcode API](https://shrtco.de/) to create shortened URLs and display them like in the designs.

### The challenge
**User should be able to:**
- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Links
- [Solution](https://github.com/NabillaTrisnani/frontendmentor_url-shortening)
- [Live Preview](https://nabillatrisnani-url-shortening.netlify.app/)

## My process

### Built with:
- HTML5
- SCSS
- Bootstrap
- [React](https://reactjs.org/)
- [shrtcode API](https://shrtco.de/)

### What I learned
- Create empty array in `localStorage`
```
localStorage.setItem('data', '[]');
```
- Put fetched data to array in `localStorage`
```
let param = this.state.value;

fetch(`https://api.shrtco.de/v2/shorten?url=${param}`)
  .then((res) => res.json())
  .then((result) => {
    // if localStorage 'data' is null make an empty array
    if (localStorage.getItem("data") == null) {
      localStorage.setItem("data", "[]");
    }

    // get localStorage 'data' as var old_data
    var old_data = JSON.parse(localStorage.getItem("data"));

    // if fetch is ok return localStorage 'data' push result
    if (result.ok === true) {
      old_data.push(result);
    }

    // set localStorage 'data' to new data from push result
    localStorage.setItem("data", JSON.stringify(old_data));

    // set state items equal to result, linkStorage to localStorage 'data'
    this.setState({
      items: result,
      linkStorage: JSON.parse(localStorage.getItem("data"))
    });
  })
  .catch((error) => console.log("error", error));
```

---

## Author
- Frontend Mentor: [@NabillaTrisnani](https://www.frontendmentor.io/profile/NabillaTrisnani)
- Github: [@NabillaTrisnani](https://github.com/NabillaTrisnani)
- LinkendIn: [Nabilla Trisnani](https://www.linkedin.com/in/nabilla-trisnani/)
- Twitter: [@NabillaTrisnani](https://twitter.com/NabillaTrisnani)
