# Testing

## Code Validation

The [Discover The Code](https://lucia2007.github.io/discover-the-code/index.html) webpage was thouroughly tested. HTML code was reviewed in the [W3C HTML Validator](https://validator.w3.org). The CSS code was validated in the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and the JS file was check in [JS Hint](https://jshint.com/). There were a few warnings regarding the semicolons and quotes usage in JS. There were several bugs in the JS file which got corrected as I went along. All erros were corrected and HTML, JS and CSS files currently have no errors.

|        |                      **index.html**                      |                       **style.css**                      |                  **script.js**                  | **logic.js**                                   | **logic.test.js**                                 |
|:------:|:--------------------------------------------------------:|:--------------------------------------------------------:|:-----------------------------------------------:|------------------------------------------------|---------------------------------------------------|
| RESULT | [No Errors](/readme-images/indexhtml_html_validator.png) | [No Errors](/readme-images/stylesheet_css_validator.png) | [No Errors](/readme-images/scriptjs_jshint.png) | [No Errors](/readme-images/logicjs_jshint.png) | [No Errors](/readme-images/logictestjs_jshint.png) |

## Browser Compatibility

The website was tested on the following browsers: Google Chrome, Safari, Microsoft Edge and Mozilla Firefox. There were no errors discovered in the functionality of the site or the individual features.

## Responsiveness Test

Testing of responsive design was carried out manually by utilizing [Google Chrome DevTools](https://developer.chrome.com/docs/devtools) and [Responsive Design Checker](https://www.responsivedesignchecker.com/).

|        | S Galaxy 5 | iPhone 6/6S/7 | iPad Mini | iPad Pro | Display <1200px | Display >1200px |
| ------ | ---------- | ------------- | --------- | -------- | --------------- | --------------- |
| Render | pass       | pass          | pass      | pass     | pass            | pass            |
| Images | pass       | pass          | pass      | pass     | pass            | pass            |

The only devices where the whole content would not fit on the screen where the ones with height around 600px or lower. However, I prefered the scrolling to making the content smaller, as it would be really hard for the user to press the color squares.

## Fixed Bugs

|                                        BUG                                       | WHERE |                                      HOW                                      |                   COMMIT                   |
|:--------------------------------------------------------------------------------:|:-----:|:-----------------------------------------------------------------------------:|:------------------------------------------:|
| Wrong format for the music files names                                           | HTML  |  I renamed both files with no spaces in the name.                             | [5c7645a](https://github.com/lucia2007/discover-the-code/commit/5c7645a)  |
| Wrong use of semicolons in JS                                                    | JS    | I deleted unnecessary and added missing semicolons                            | [2ac667f](https://github.com/lucia2007/discover-the-code/commit/2ac667f)  |
| Inconsistent use of single and double quotes                                     | JS    | I changed all the relevant quotes into double quotes                          | [bf82ff](https://github.com/lucia2007/discover-the-code/commit/9bf82ff)  |
| Duplicate call of the addButtonClickedHandlers()                                 | JS    | I deleted the duplicate call                                                  | [a8e0d30](https://github.com/lucia2007/discover-the-code/commit/a8e0d30)  |
| The scores were updating only after an alert was closed                          | JS    | I changed the order of the relevant code lines                                | [ec2e4ec](https://github.com/lucia2007/discover-the-code/commit/ec2e4ec)  |
| The moves counter was not updating                                               | JS    | I change the displayMoves(moves) into a function w/ parameters                | [302f4e9](https://github.com/lucia2007/discover-the-code/commit/302f4e9)  |
| Square and circles had class 'is-taken' when set in initial state                | JS    | I removed the class from squares and circles so they could be filled in again | [56b98e9](https://github.com/lucia2007/discover-the-code/commit/56b98e9)  |
| Music file was not playing on the deployed page.                                 | JS    | I needed to commit the file.                                                  | [25c6609](https://github.com/lucia2007/discover-the-code/commit/25c6609)  |
| addCurrentRowSquaresHandler() was giving an error after row 12 was checked       | JS    | I had to add a condition so the function would stop after row 12              | [0a9ac73](https://github.com/lucia2007/discover-the-code/commit/0a9ac73)  |
| When Restart button was pressed, the "shadows" remained on the last used squares | JS    | I had to use removeClassShadow() after Restart was clicked                    | [859bcb9](https://github.com/lucia2007/discover-the-code/commit/859bcb9)  |
| When I wanted to switch the focus music off, I had to click twice on the icon    | JS    | I had to refactor both the play/stop music functions                          | [d483814](https://github.com/lucia2007/discover-the-code/commit/d483814)  |

## Unfixed Bugs

There are no known bugs in the project.

## Additional Testing
### Lighthouse

The application was also tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) in Chrome Developer Tools. The following aspects were tested:

- Performance - reveals how the site performs during loading
- Accessibility - shows if the site if accessible for all users and suggests ways to improve it
- Best Practices - indicates if the site conforms to industry best practices
- SEO - Search Engine Optimisation - shows if the site is optimised for search engine result rankings

### Results from Lighthouse

[Lighthouse test result](./readme-images/lighthouse.png)
