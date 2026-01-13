# Reaction Time Game

A simple, modern reaction time testing game built using HTML, CSS, and vanilla JavaScript.

Test how fast you can react when a visual signal appears. Designed to be minimal, clean, and beginner-friendly, with keyboard and mouse support.

## Features

- Measures reaction time in milliseconds
- Keyboard support (SPACE / ENTER)
- Mouse click support
- Dark theme with accent colors
- Subtle sound effects
- False-click detection (clicking too early)
- Replay without refreshing the page
- Responsive (desktop & mobile)

## Controls

| Action | Input |
|------|------|
Start game | Click START or press SPACE |
React | Click anywhere or press SPACE / ENTER |
Restart | Click PLAY AGAIN |

## How to Play

1. Click START
2. Wait for the message “NOW!”
3. React as fast as possible
4. Your reaction time will be shown in milliseconds
5. Clicking too early invalidates the round
6. Click PLAY AGAIN to try again

## Tech Stack

- HTML – Structure
- CSS – Styling & animations
- JavaScript (Vanilla) – Game logic & timing

No frameworks  
No libraries  
No backend

## Run Locally

No installation required.

1. Download or clone this repository
2. Ensure these files are in the same folder:
   - index.html
   - style.css
   - script.js
3. Open index.html in any modern browser

## GitHub Pages Deployment

1. Push this project to a GitHub repository
2. Go to Settings → Pages
3. Set:
   - Branch: main
   - Folder: /root
4. Save

Your game will be live at:
https://munawwar.ahd.github.io/reaction-time-web-based-game/

## Sound Notice

Modern browsers block audio until user interaction.  
Click START once to enable sound.

## Project Structure

reaction-time-game/
├── index.html   # Game layout
├── style.css    # Styling & animations
└── script.js    # Game logic

## Learning Goals

- JavaScript event handling
- Timing with performance.now()
- Clean state management
- Building interactive UI projects
- Hosting static sites using GitHub Pages

## License

Free to use for learning and personal projects.
