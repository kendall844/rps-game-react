# Rock Paper Scissor Game With React Effects

## Setup
1. **Either clone the repository or download the zip file onto your local machine.**

```bash
git clone <repo-url>
cd <project-folder> 
```

## Install the dependencies

2. **Install the dependencies in the terminal using:**

```bash 
npm install
```

## Start the dev server
3. **Run the server in the terminal using:**

```bash
npm run dev
```

## Open the given URL
4. **Ctrl + click the provided Vite URL for the server. It will be:**

```bash
http://localhost:5173/
```

# Implementation

This is an interactive rock, paper, scissors game using Reach components and hooks. The application is divided into three modular components: PlayerThrow, ComputerThrow, and ResultDisplay. I also added the extra credit components of ScoreBoard and ResetButton. 

I used "useState" and "useEffect" to manage the components and handle side effects. The "useState" allows for dynamic updates on the interface based on the user interaction. The "useEffect" was used to control the animation and delay in the ComputerThrow component and the score board.  

A challenge faced was I did not reset the game state at the beginning of each round. This resulted in random results displaying before the logic finished and showed who won. I went in and added logic that reset the state before each game, eliminating that issue. I also needed to get used to writing code in this format, it took a while for me to understand.

This interactive game helped expand my knowledge on how to properly handle React, states, and effects. It also is furthering my knowledge on JavaScript, I am becoming more confident with the functions and logic. 

