# 20spokes Elevator Exercise

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

To run in hot module reloading mode:

```sh
yarn start # The app should now be running on localhost/1234
```

To create a production build:

```sh
yarn run build-prod
```

To remove bundled files from the `dist` directory (useful after multiple builds):

```sh
yarn run clean
```

To run the test suite, such as it is:

```sh
yarn run test
```

## Running

Open the file `dist/index.html` in your browser after building.

## Approach

As the requirements - in my reading of them (more below) - mostly indicate UI components, I chose to do this in React. I have had mixed success with Parcel, but generally find it faster to get up and running with than Webpack, so I chose that as my bundling tool.

The UI is vaguely remniscent of an actual elevator, with a large section describing the current state of the doors and a panel to the side that allows the user to indicate a desired floor. The current floor and direction (if applicable) of the elevator is displayed above the panel at all times.

## Problems

I struggled a lot trying to understand what the output of this exercise is supposed to be. In the interests of giving more useful information, a couple things that specifically triggered confusion:

- "Think about how an elevator [. . .] will accept multiple users/floors at once." The discrete requirements indicate a per-user UI, so multiple users suggests having (provision for) multiple UIs. . .which suggests something along the lines of running multiple clients. That vastly increases the scope of the project *if* that is indeed the correct interpretation. I would have expected an explicit multi-user requirement if this was desired, however.
- "It's possible to have more than a single Elevator class."
  - If I take "class" to mean a proper capital "C" Class in this context, it is confusing, as that suggests Elevators with different *behavior* from one another. While I can imagine that, say, a Freight Elevator might be a distinct class with distinct behavior, there is *nothing in the prior requirements* to suggest this would be useful or wanted in the app. I can only assume I'm missing something.
  - If I take "class" to mean an *instance* of a Class, this suggests managing a *bank* of multiple Elevators - in other words, how to optimize trips to achieve maximal transportation with minimal wait time. That's an interesting problem for sure, particularly once you start to think about (for example) weight/space limits and how to account for those. However, this doesn't really make sense in the context of a single user who can only be on one elevator at once - and again, the requirements talk about a UI for a single user, and a multi-client app expands the scope vastly.
- I was asked to complete this over a weekend, i.e. two days. Perhaps I'm just lacking experience, but trying to implement the above in that time frame is pushing the limits of what I can accomplish, and it's unclear if any of the above is actually desired in the first place.

As such, I decided to hew as close as possible to the specified requirements, namely:

- "Create a tool or application that represents an Elevator".
- "Users can view the current floor of the elevator at any given time" - it is visible at all times above the buttons.
- "The elevator should take 1 second to move 1 floor" - it does, although it stops when arriving at destination floors, which takes some time.
- "The user should recieve a message that the elevator is now at their desired floor" - it will stop and inform them that the door is open.
- "Automated testing is encouraged" - fairly basic tests have been implemented for the components. In the spirit of testing behavior over internal state, these all have to do with render output rather than, say, prop changes. `ElevatorWrapper` could probably stand to be a little better covered, though.

I can't shake the feeling that despite meeting those requirements I did so in a way that skirted around the spirit of the exercise, but obviously I leave that up to the reviewer.

## Credits

Made with (help from) [createapp.dev](https://createapp.dev/), which is a pretty cool tool.

