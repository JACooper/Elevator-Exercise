import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import CurrentFloorDisplay from '../src/CurrentFloorDisplay'

let container = null;

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders", () => {
  act(() => {
    render(<CurrentFloorDisplay />, container)
  })
  const currentFloorDisplay = container.getElementsByClassName('current-floor-display')[0]
  expect(currentFloorDisplay).not.toBe(undefined)
})

it("renders the current floor correctly", () => {
  act(() => {
    render(<CurrentFloorDisplay currentFloor={3} />, container)
  })
  const currentFloorDisplay = container.getElementsByClassName('floor-number')[0]
  expect(currentFloorDisplay).not.toBe(undefined)
  expect(currentFloorDisplay).innerHTML.toBe("3")
})

it("renders the elevator direction correctly", () => {
  act(() => {
    render(<CurrentFloorDisplay direction={'up'} />, container)
  })
  const currentFloorDisplay = container.getElementsByClassName('elevator-direction')[0]
  expect(currentFloorDisplay).not.toBe(undefined)
  expect(currentFloorDisplay).innerHTML.toBe("^")
})