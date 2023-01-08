import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, } from '@testing-library/react';
import SearchBar from './searchbar'
import {  prettyDOM } from '@testing-library/dom';


describe("test search bar", () => {

    test("render the component",()=> {
    render(<SearchBar />)    
})
    test("must exists a button",()=> {
        const component = render(<SearchBar/>)
        const button = component.container.querySelector('button')
        console.log(prettyDOM(button))
    });

    test("must click the button",()=> {
        const mockHandler = jest.fn()

        const component = render(<SearchBar handlerSubmit={mockHandler} />)
        const buttonclick = component.getByText('Buscar')

        fireEvent.submit(buttonclick)

        expect(mockHandler.mock.calls).toHaveLength(1)

    })
})