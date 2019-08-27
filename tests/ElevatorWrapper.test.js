import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ElevatorWrapper from '../src/ElevatorWrapper'

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
    render(<ElevatorWrapper />, container)
  })
  const elevatorWrapper = container.getElementsByClassName('elevator-display')[0]
  expect(elevatorWrapper).not.toBe(undefined)
})