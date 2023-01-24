# Discover the Code

The purpose of this website is to allow a user to play a logical game/puzzle which is fun and straightforward. Guessing the secret code is not easy, so the user needs to be determined and willing to think hard. This app was inspired by a game called <a href="https://www.amazon.co.uk/MengTing-Mastermind-Classical-Cracking-Intelligent/dp/B06X9LLWTS/ref=asc_df_B06X9LLWTS/?tag=googshopuk-21&linkCode=df0&hvadid=310776459020&hvpos=&hvnetw=g&hvrand=2074715707490516415&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-358744999429&psc=1" target="_blank" rel="noopener">Mastermind</a> which is widely known. This game can be played in a relatively short time and it is an ideal pass time when waiting at a doctors office or when commuting.

The site is targeted towards people who like to strech their mind and improve their logical skills. The current version of the game is targeted at adults or those users who are not easily dissuaded.

In the future versions I would like to add levels so a wider audience can enjoy this game.

Discover the Code is useful for all users who want to be entertained and at the same time work on their logical skills. The app can be accessed at <a href="https://lucia2007.github.io/discover-the-code/index.html" target="_blank" rel="noopener">Discover The Code</a>. Enjoy!

![Discover The Code responsive design](./readme-images/amiresponsive.png) 

[Back to top](#contents)

# Contents

- [Discover the Code](#discover-the-code)
- [Contents](#contents)
- [User Experience (UX)](#user-experience-ux)
  - [User Stories](#user-stories)
    - [Primary Goal](#primary-goal)
    - [Visitor Goals](#visitor-goals)
      - [First Time Visitor](#first-time-visitor)
      - [Returning Visitor](#returning-visitor)
      - [Frequent Visitor](#frequent-visitor)
  - [Creation Process](#creation-process)
    - [1. Strategy](#1-strategy)
    - [2. Scope](#2-scope)
    - [3. Structural](#3-structural)
    - [4. Skeleton](#4-skeleton)
    - [5. Surface](#5-surface)
      - [Wireframes](#wireframes)
      - [Dependency diagram](#dependency-diagram)
  - [Site Structure](#site-structure)
  - [Design Choices](#design-choices)
- [Features](#features)
    - [Header](#header)
    - [Welcome message](#welcome-message)
    - [Scores](#scores)
    - [Playground](#playground)
    - [Pick Your Color](#pick-your-color)
    - [Winning message](#winning-message)
    - [Losing message](#losing-message)
    - [Future Features](#future-features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
  - [Project Deployment](#project-deployment)
  - [To fork the repository on GitHub](#to-fork-the-repository-on-github)
  - [To create a local clone of a project](#to-create-a-local-clone-of-a-project)
  - [To use Test Driven Development Approach](#to-use-test-driven-development-approach)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)

[Back to top](#contents)
# User Experience (UX)

## User Stories

### Primary Goal

Discover The Code game/puzzle is inspired by the game of <a href="https://www.amazon.co.uk/MengTing-Mastermind-Classical-Cracking-Intelligent/dp/B06X9LLWTS/ref=asc_df_B06X9LLWTS/?tag=googshopuk-21&linkCode=df0&hvadid=310776459020&hvpos=&hvnetw=g&hvrand=2074715707490516415&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-358744999429&psc=1" target="_blank" rel="noopener">Mastermind</a>. The game is suitable for anyone who is not afraid of being challenged, perhaps stuck and likes to think hard to figure out the solution.

### Visitor Goals

Discover The Code game has been designed to be straightforward, with minimalist and yet attractive design. The current version is aimed at people who enjoy puzzles and challenges so they can put their logical skills to test. The player can play deep focus music which helps the user to relax and think deeply. The game is responses to different media screen sizes, but at the same time the design is kept uniform accross different devices. A stopwatch and the moves counter measure the user's progress.

#### First Time Visitor

  - A user can find the game rules in a modal window.
  - A user can start the game by pressing a Play button.
  - A user can turn on and off the deep focus music.
  - A user can display and hide the rules in case they need to be reminded of them by clicking on the question mark icon.
  - A user can click on the colors in the Color Picker to assign them to the current guess row.
  - A user can change a previously chosen color in the current guess row by clicking on it and thus deleting it. Then the user can proceed to choose a different one.
  - A user can see the timer start when they have made their first color choice.
  - A user can see the moves counter update after a Check button has been pressed.
  - A user can see the stopwatch stop when the last unsuccessful guess is checked or when a winning messages is displayed in case of a win.
  - A user can expect the scores to be displayed in the winning modal window.
  - A user can choose to Play again after they have won or lost, or choose to close the modal and look at the playground board more closely again.
  - A user can reset the game by clicking a reset button.
#### Returning Visitor

  - A user is familiar with the rules and can start the game by clicking the Play button.
  - A user can choose to play the deep focus music.

#### Frequent Visitor

  - A user can try to beat their time or score. (This feature to be included in future versions.)

[Back to top](#contents)
## Creation Process

### 1. Strategy

The project goal was to build an interactive logical game suitable for anyone who likes to be challenged and is not afraid to think hard.
  - The user is able to acquaint themselves with the rules of the game as soon as the page is loaded 
  - The user can improve their logical skills by playing the game repeatedly and by trying to improve their score. (Historical score tracking is not a part of this version of the app.)

[Back to top](#contents)
### 2. Scope

The game is to be responsive and playable on mobiles, tablets and desktops. 

  - The game will have a uniform look which will be slightly adjusted for larger screens. The main goal is for the content to fit on the screen so the user does not have to scroll for the Check and Restart buttons.
  - The game will allow a deep focus music file to play to help with concentration of the user.
  - It will be possible to reset the game at any chosen moment.
  - The game will display time and moves counters which give the user information about their progress.
  - The game will show the scores in the winning modal.
  - It will be possible to display the rules at any time to be reminded of the rules of the game.
  - It is to be clear to the user which row is going to be next filled in with colors.
  - The check button is enabled only if 5 colors are applied to the squares. If fewer than 5 colors are chosen, the button becomes disabled and it is impossible to check the score.
  - It is to be possible for the user to amend colors, after they have decided to try a different one instead.
  
[Back to top](#contents)

### 3. Structural

The interactive features of this game need to be intuitive and easily accessible.

  - The player is acquainted with the rules through a welcome modal window as soon as the game is loaded.
  - The user can choose to play by pushing the Play button.
  - Buttons and clickable icons give the user an option to play music, display rules, reset the game, to close the modals or to play again.
  - The user is informed by the display of a winning message modal of their win, the amount of time and the number of moves it took them to guess the correct answer. A winning chime is played to congratulate the user on a win.
  - In case the user loses, a commiseration modal is displayed, losing chime is played and the user is given an option to close the window and study his moves more deeply or to try again.
  - At the moment of win/loss the scores are displayed and the secret code is revealed.
  - The design of the game is to be kept uniform across devices, so the user is not confused by unnecessary changes in layout or style.
  - When a modal window is displayed, the rest of the page's content, except for the header section, is hidden to not distract the user.
  
[Back to top](#contents)
### 4. Skeleton

The game is to have a minimalist design to keep the user concentrated on the puzzle.

  - When the game is loaded, a welcome modal pops up, informs the user of the rules and lets them start the game by pressing the Play button.
  - The game is placed in the middle of the larger screens and takes the whole screen of mobile devices of width of 375px without the necessity to scroll.
  - The name of the game is introduced in the Header.
  - Five grey squares with a key icon on them signify a mystery/puzzle to be solved.
  - A music note icon which is situated in the top right corner, allows the user to turn on and turn off the deep focus music.
  - The question mark icon displayes the rules and is placed next to the music note icon.
  - Timer and moves counter are located above the playground to be clearly visible.
  - The playground consists of 12 rows of 5 squares and 5 circles. The squares are intended for the user's guess, the circles will display the black and white clues when the check button is pressed.
  - A set of 8 contrasting colors is available below the playground. The user can choose which color to apply to the squares in the current row.
  - A Check and a Reset button are available below the Pick Your Color section. The Check button becomes available when the user has chosen five colors, and is disabled if a user deletes a color or has not yet chosen five of them.

[Back to top](#contents)
### 5. Surface

  #### Wireframes

  The wireframes were created in [Figma](https://figma.com). Originally I intended to make the app very colorful, but later I opted for a cleaner look. Also at first I thought I would do a different layout for the desktop with the rules on the right, but in the end I opted for a uniform look across different devices and screen widths.

  In comparison with the original design, I changed the look of the sercret row and instead of question marks I used images of keys. Instead of a toggle I used a music not icon to make it clear what this button was intended for.

  [Wireframes for all devices](./readme-images/wireframes.png)

  #### Dependency diagram

  As the game of Mastermind is quite complex, I began by creating [a dependency diagram](https://www.figma.com/file/QEIjBXsR941WeLv8P5d6R9/Dependency-graph?node-id=0%3A1&t=tmvBBQln2l3eHZIf-0) to help me organize/plan the flow of the game. This was extremely useful especially in moments, when it was not clear were a certain function or feature belonged what the dependencies were or with what should be tackled next. I started by working on the HTML and the most basic functionalities, adding complexity and new features as I went along, finishing by adding "nice-to-have" features like adding an option to play deep focus music.

[Back to top](#contents)
## Site Structure

Discover The Code app contains only one page to keep the app simple and straightforward.

[Back to top](#contents)

## Design Choices

At first I intended to make the game colorful and playful, as is visible from the original wireframes. As I am using a large number of colors in the color picker, it was very hard to find contrasting backgrounds. I changed the color of the background to white and with time I started to appreciate the minimalist design more and more. I had to add black borders around the white clues to keep the clues visible.

- ### Typography

  "Noto Sans", weight 300, 400 and 700 were downloaded originally, but only the regular weight is being used throughout the app. The font is easily legible. The chosen font was downloaded from [Google Fonts](https://fonts.google.com/).

- ### Color Scheme
- I opted to use hex/rgb format of the colors at the beginning of the app development, so I could play with them later in case I needed to choose a more contrasting color. I chose colors with enough contrast from each other, but at the same time with an appealing look when next to each other.

[Back to top](#contents)

# Features
### Header

![Header](./readme-images/header.png)

- The header firstly contains the name of the game which should intice the user to want to try to decode the secret sequence of colors.

- The second row contains five squares with keys in them which imply a secret to be guessed.

- The music note icon allows the user to turn on deep focus music.

- When the music is playing, the music note changes into a crossed out music note. When this icon is pressed, the music will stop playing.
![No Music](./readme-images/stopmusic.png)

- The question mark icon works displays or hides the welcome message which contains the rules of the game.

[Back to top](#contents)

### Welcome message

![Welcome message](./readme-images/welcome_message.png)

As soon as the page is loaded, a welcome message is displayed. In the welcome message the rules and the clues are explained. When a Play button is clicked, the modal is hidden and the plaground and the rest of the features are displayed.

### Scores

![Scores](./readme-images/scores.png)

This section displays the time the user needed to guess the code and also how many attempts were used. 

The timer starts as soon as the user clicks on any of the squares in the Pick You Color section. The timer stops when the secret code is guessed or when the user used all 12 attempts and has not guessed the code.

[Back to top](#contents)

### Playground

![Playground](./readme-images/playground.png)

The playground section contains 12 rows of 5 squares and 5 circles next to each other. The squares are used for guessing the code, the circles display the clues after the Check button is clicked. If a user is unhappy with a chosen color, they can click on it and thus delete it/revert to the default background color. By clicking on a color in the color picker, this deleted color can be replaced by a new color.

[Back to top](#contents)

### Pick Your Color

![Pick Your Color](./readme-images/pick_color_rm.png)

In this section there are eight colors from which the user can choose. Colors can be used repeatedly. The user clicks on a color he wants to use and the color is assigned to the first square on the left in the last/bottom row. The next color will fill the next square to the right and so on until five colors are chosen.

![Clues](./readme-images/clues.png)

As soon as five colors are chosen, the Check button is enabled and the user can see the clues displayed in the set of five circles next to the row of squares which was currently used.

- Black circle - you guessed a color, and its position
- White circle - you guessed a color, but not its position
- Grey circle - wrong color was chosen

If five colors have not yet been chosen, or if the user deletes one of the five chosen colors, the Check button is disabled and it is impossible to check the guessed color sequence.

[Back to top](#contents)

### Winning message

![The Winning message](./readme-images/congratulations.png)

When the user manages to guess all the five colors in their correct order within 12 attempts, a winning message pops up accompanied by a winning chime. In the winning message the user can see how much time it took him to guess the code and how many attempts he/she needed. At the same time as the message is displayed, the secret row is revealed and the user can compare his guess to the secret code. At the end of the pop up message the user gets a choice to play again or to hide the winning message. When the user chooses the Play again option, the pop up is closed and the game is reset to the intial settings. When he chooses to close the modal, he can look more closely at his choices.

[Back to top](#contents)

### Losing message

![The Losing message](./readme-images/gameover.png)

If the user does not manage to guess the correct color sequence in the 12 attempts, a losing message is displayed. At the same time a "game-over" chime is played and the user is commiserated on his lack of success. The secret code is revealed so the user can see where he made a mistake. At the end, the user has an option to play again or close the message.

[Back to top](#contents)

### Future Features
- From the beginning I was aware that the current version of the game will not be appealing to those users who are looking for an easy game. It is quite challenging to guess the code and not everyone has the patience, determination or the time to finish playing it. This expectation was confirmed to me by a number of friends who found it difficult to understand the original rules, or simply thought it was too hard or took too much time.
  
- I could make this game more accessible to wider audience, including children by introducing different levels of the game. A user would have a choice at the beginning of the game to indicate easy, medium or hard level. (The current version is the hard level.) The easier levels could be achieved:
- By decreasing the number of colors (6 for easy, 7 for medium and 8 for hard.)
- Repetition of colors could be forbidden for the secret code and for the user.
- The position of the black and white clues could directly correspond to a particular color.

Taking the current game's code structure, it would be easiest to restrict the number of colors, next forbid the repetition of color and the most time consuming would be the last option of the pegs corresponding to the color choice.

If someone was seeking to play at an even more difficult level, more colors could be added or a countdown function used instead of a stopwatch to put the player under time pressure.

[Back to top](#contents)

# Technologies Used

- [HTML5](https://html.spec.whatwg.org/) - provided the structure and content for the website
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - enabled applying own styles and design
- [Figma](https://figma.com/wireframes/) - used for creating the wireframes
- [Gitpod](https://www.gitpod.io/#get-started) - used for deploying the website
- [Github](https://github.com/) - used for hosting and editing the website
- [Favicon converter](https://favicon.io/favicon-converter/) - used for creating a favicon out of an image
- [JavaScript](https://www.javascript.com/) - used for adding interactivity to the webpage
- [Node JS]

[Back to top](#contents)

# Testing

For detailed results of all the tests conducted, please refer to this [_file_](TESTING.md).

[Back to top](#contents)

# Deployment

## Project Deployment

The site was deployed to GitHub pages. In order to deploy, the following steps were taken:

1. Navigate to the **Settings** tab in the GitHub repository.
2. When in **Settings**, navigate to the **Pages** tab below the middle of the list on the left hand side.
3. From the **Branch** drop-down menu select the option **main**, then click **save**.
4. After the main branch has been selected and confirmed, the page will be automatically refreshed. The refresh might take several minutes. A detailed message will appear at the top of the page indicating the successful deployment. The message will include a link to the deployed site.

[GitHub deploying process image](/readme-images/deployment.png)

The link to the the live site can be found here - https://lucia2007.github.io/discover-the-code/

[Back to top](#contents)

## To fork the repository on GitHub

A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and changed without affecting the original repository. Take the following steps to fork the repository:

1. Log in to **GitHub** and locate the [repository](https://github.com/lucia2007/discover-the-code).
2. On the top right hand side of the page is a button called **'Fork'**. Click on the button to create a copy of the original repository in your GitHub Account.

[GitHub forking process image](/readme-images/forking_process.png)

[Back to top](#contents)

## To create a local clone of a project

Take the following steps to create a clone of a project:

1. Click on the **Code** button in the left top corner.
2. Next to the green **GitPod** button, click on **Code** drop-down menu.
3. In the **HTTPS** section, click on the clipboard icon to copy the displayed URL.
4. In your IDE of choice, open **Git Bash**.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type **git clone**, and then paste the URL copied from GitHub.
7. Press **enter** and the local clone will be created.

[Github cloning process image](/readme-images/cloning_process.png)

[Back to top](#contents)

## To use Test Driven Development Approach

 When I was working on the logical part of the game, I was encouraged by my husband, who is an IT engineer, to apply TDD (test driven development) to make sure my scoring system worked correctly (assets/js/logic.test.js). It was a great relief not to have to worry about this part of the app in the later stages, when I could just rely on the fact that the logic had been thoroughly tested and worked seamlessly.

# Credits

## Content

- The overall inspiration came from the well-known game called <a href="https://www.amazon.co.uk/MengTing-Mastermind-Classical-Cracking-Intelligent/dp/B06X9LLWTS/ref=asc_df_B06X9LLWTS/?tag=googshopuk-21&linkCode=df0&hvadid=310776459020&hvpos=&hvnetw=g&hvrand=2074715707490516415&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-358744999429&psc=1" target="_blank" rel="noopener">Mastermind</a> which I used to love to play as a child. In the postcommunist countries this game was called Logik.
- The fonts were downloaded from [Google Fonts](https://fonts.google.com/).
- [Figma](https://figma.com/) was used to create the wireframes and the dependency diagram.
- The framework for the readme file was originally taken from [Wawas Wood](https://github.com/EwanColquhoun/wawaswoods/blob/master/README.md) and from [Scoops](https://github.com/amylour/scoops_pp1/blob/main/README.md#testing).

## Media

- The icons were found at [Font Awesome](https://fontawesome.com/), [Free Icons](https://www.freeiconspng.com), [PNG ARTS](https://www.pngarts.com/), [The Noun Project](https://thenounproject.com/) and [Flat Icon](https://www.flaticon.com/).
- Winning and losing chimes were downloaded [here](https://www.dropbox.com/s/mbmhocwo4bbdsgp/Correct%20Answer.mp3?dl=0), and [here](https://www.dropbox.com/s/kulc9u7r69d8odl/Wrong%2002.wav?dl=0).
- Focus music was downloaded [here](https://www.chosic.com/free-music/study/). 

## Acknowledgements

- Extra help and guidance was received from my mentor Precious Ijege, from my husband Sam and fellow colleagues from the Code Institute.
- My husband Sam encouraged me to try the test driven development for the logical part of the game and guided me through it. He also helped me by installing the necessary packages and with the import of the logic.js file.
- I used several tutorial for different features:
  - This [tutorial](https://www.youtube.com/watch?v=wffK2OIt8u0) was used to help me turn on and turn off the deep focus music when the music icon is pressed.
  - I used this [tutorial](https://foolishdeveloper.com/create-a-simple-stopwatch-using-javascript-tutorial-code/) to help me set up the timer/stopwatch.
  - I used these [instructions](https://bobbyhadz.com/blog/javascript-get-object-key-by-value) to get the object key by value for a helping function when I wanted to reveal the secret code in console.log so I could test the features more quickly.
  - The following [tutorial](https://www.youtube.com/watch?v=IFoG8-oAELM) helped me with setting up the pop up modals.
  - The playground structure was inspired by this [project](https://github.com/LudovicLeGuen/Mastermind).
  - I also got inspiration for the button handlers from the [Love Maths Project](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/).
  - [This](https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/) and [this](https://solaaremupelumi.medium.com/using-es6-import-and-export-statements-for-jest-testing-in-node-js-b20c8bd9041c) tutorials were used for import of the testing and logic files
  - I used this [webpage](https://www.makeuseof.com/tag/create-markdown-table/) for creating markdown tables.

Thank you all for your support and encouragement. I couldn't have done it without you.

[Back to top](#contents)