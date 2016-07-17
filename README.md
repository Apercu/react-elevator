# react-elevator

> A small react component for elevator-like sliders.

    npm i -S react-elevator

##### Api

`open` Determine if the elevator is opened or not. Default to `false`.

`duration` The transition duration when the open state changes. Default to `500` (ms).

`easing` The [anime easing](https://github.com/juliangarnier/anime) to use for the animation. Default to `linear`.

##### Usage

    <Elevator open={this.state.open} duration={1e3} easing={'easeOutQuint'}>
      <div>{'first child, displayed if open is false'}</div>
      <div>{'second child, displayed if open is true'}</div>
    </Elevator>

##### Example

A little demo is available by running `npm start`, but you can also take a peek at [the source](./demo/index.js) directly.
