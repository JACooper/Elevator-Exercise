import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import ElevatorDisplay from '../src/ElevatorDisplay'

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
    render(
      <ElevatorDisplay
        destinations={[]}
        direction={"idle"}
        doorStatus={"closed"}
        addDestination={() => {}}
      />,
      container
    )
  })
  const elevatorDisplay = container.getElementsByClassName('elevator-display')[0]
  expect(elevatorDisplay).not.toBe(undefined)
})