import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'

import DoorsDisplay from '../src/DoorsDisplay'

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
    render(<DoorsDisplay />, container)
  })
  const doorsDisplay = container.getElementsByClassName('doors-display')[0]
  expect(doorsDisplay).not.toBe(undefined)
})

it("renders correctly when opening", () => {
  act(() => {
    render(<DoorsDisplay doorStatus={"opening"} />, container)
  })
  const doorsDisplay = container.getElementsByClassName('doors-display')[0]
  expect(doorsDisplay.firstChild.innerHTML).toBe("The doors are opening...")
})

it("renders correctly when open", () => {
  act(() => {
    render(<DoorsDisplay doorStatus={"open"} />, container)
  })
  const doorsDisplay = container.getElementsByClassName('doors-display')[0]
  expect(doorsDisplay.firstChild.innerHTML).toBe("The doors are open.")
})

it("renders correctly when closing", () => {
  act(() => {
    render(<DoorsDisplay doorStatus={"closing"} />, container)
  })
  const doorsDisplay = container.getElementsByClassName('doors-display')[0]
  expect(doorsDisplay.firstChild.innerHTML).toBe("The doors are closing...")
})

it("renders correctly when closed", () => {
  act(() => {
    render(<DoorsDisplay doorStatus={"closed"} />, container)
  })
  const doorsDisplay = container.getElementsByClassName('doors-display')[0]
  expect(doorsDisplay.firstChild.innerHTML).toBe("The doors are closed.")
})