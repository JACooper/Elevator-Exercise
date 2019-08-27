import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import DestinationDisplay from '../src/DestinationDisplay'

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
    render(<DestinationDisplay destinations={[]} addDestination={() => {}} />, container)
  })
  const destinationDisplay = container.getElementsByClassName('destination-display')[0]
  expect(destinationDisplay).not.toBe(undefined)
})

it("renders a selected button", () => {
  act(() => {
    render(<DestinationDisplay destinations={[1]} addDestination={() => {}} />, container)
  })
  const destinationDisplayGrid = container.getElementsByClassName('destination-grid')[0]
  expect(destinationDisplayGrid).not.toBe(undefined)
  expect(destinationDisplayGrid.firstChild.classList.contains('selected')).toBe(true)
})