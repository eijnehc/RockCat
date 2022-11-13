# RockCat:rocket:

A gamified coding platform for kids to learn to code smarter.

## Dependencies

The frontend web app requires the following to manage the dependencies:

> :star2: pnpm

    npm install -g pnpm

## Installation

Start the terminal application in Mac computer or Command Prompt program in Windows computer.

At the prompt, navigate to the where source code folder and type the below command to install the dependencies for Server and Client.

    pnpm client-install
    pnpm server-install

## Getting Started

To run the demo in a development environment, you can simply start web app and the backend service in same terminal instances by running

    pnpm dev

## Stripe Payment

After being redirected to the Stripe checkout page use this test card to simulate a payment

- Payment Succeeds: 4242 4242 4242 4242
- Use a valid future date, such as 12/34.
- Use any three-digit CVC.
- Use any value you like for other form fields.

## Solutions

### Question 1 (Move Ahead)

```js
const stepsNeededToEscape = 11;

for (let i = 0; i < stepsNeededToEscape; i++) {
  move();
}
```

### Question 2 (Spiral Trial)

```js
let loopCount = 0;

while (loopCount < 1000) {
  if (escaped()) {
    break;
  }
  if (isBlocked()) {
    turnRight();
  }

  move();
  loopCount++;
}
```

### Question 3 (Zig-Zag Mania)

```js
let stepCount = 0;
let turnCount = 0;

while (stepCount < 1000) {
  if (escaped()) {
    break;
  }

  if (isBlocked()) {
    if (Math.floor(turnCount / 2) % 2 == 0) {
      turnCount += 1;
      turnRight();
    } else {
      turnCount += 1;
      turnLeft();
    }
  }

  // call function to move character here
  move();
  stepCount++;
}
```
