import { render, screen, fireEvent, } from '@testing-library/react';
import Card from "./card"
import imagen from '../test_images/bulbasaur.png'
import '@testing-library/jest-dom/extend-expect'
import { prettyDOM } from "@testing-library/react"

describe("testing cards",()=> {
    let component
    beforeEach(()=> {
        const nombre = "Bulbasaur"
        component = render(<Card name={nombre} img={imagen}/>)
    })

    test("Render pokemon name",()=> {

        const cardname = component.getByText("Bulbasaur")

        console.log(prettyDOM(cardname))
    })
    test("Render pokemon image",()=> {

        const cardimg = component.container.querySelector('img')

        console.log(prettyDOM(cardimg))
    })
})