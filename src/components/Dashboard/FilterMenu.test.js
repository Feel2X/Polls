import { fireEvent, render } from '@testing-library/react'

import FilterMenu from "src/components/Dashboard/FilterMenu"

describe("PollCard", () => {
    test("renders correctly", () => {
        const component = render(
            <FilterMenu
                filterOption="none"
                setFilterOption={() => {}}
            />
        )
        expect(component).toMatchSnapshot()
    })

    test("it will change its value on button click", () => {
        var mockState = { val: "none" }
        const component = render(
            <FilterMenu
                filterOption={ mockState.val }
                setFilterOption={ newFilter => { mockState.val = newFilter } }
            />
        )

        var toggleButtonUnanswered = component.getByTestId("toggle-button-unanswered")
        fireEvent.click(toggleButtonUnanswered)
        expect(mockState.val).toBe("unanswered")
    })
})