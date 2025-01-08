# Chrome Dino Replica

A browser-based replica of the popular Chrome Dino game, created using HTML5 Canvas and JavaScript. This project is a fun way to learn game development concepts such as animation, event handling, and collision detection.

## Features

- **Jump and Duck:** Use `Space` or `W` to jump and `Shift` or `S` to duck.
- **Obstacles:** Randomly spawning obstacles that increase in difficulty as the game progresses.
- **Scoring System:** Tracks the player's score and maintains a high score using `localStorage`.
- **Gravity and Physics:** Realistic gravity for player movement and jumping.

## Project Structure

```
/project-folder
  |- index.html     # Main HTML file
  |- script.js      # Game logic
```

## How to Run

1. Clone or download the repository.
2. Open the project folder in your preferred code editor (e.g., VS Code).
3. Run a live server from the folder containing `index.html`.
   - If using VS Code, install the Live Server extension and right-click on `index.html` > "Open with Live Server."
4. The game will open in your default web browser.

## How to Play

1. Press `Space` or `W` to jump.
2. Press `Shift` or `S` to duck.
3. Avoid obstacles by jumping or ducking.
4. Keep playing to beat your high score!

## Technologies Used

- **HTML5 Canvas:** For rendering the game visuals.
- **JavaScript:** For game logic and interactivity.

## Game Logic Highlights

- **Player Class:** Manages player movement, jumping, and collision detection.
- **Obstacle Class:** Spawns and animates obstacles across the screen.
- **Text Class:** Displays score and high score dynamically.
- **LocalStorage:** Stores the high score persistently across sessions.

## Possible Improvements

- Add a start and pause menu.
- Introduce different types of obstacles or power-ups.
- Add sound effects and background music.
- Make the game mobile-friendly.
