import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, } from '@testing-library/react';
import SearchBar from './searchbar'
import {  prettyDOM } from '@testing-library/dom';


xdescribe("test search bar", () => {
    let component
    beforeEach(()=> {
        mockHandler = jest.fn()
        component = render(<SearchBar handlerSubmit={mockHandler}/>)
    } )

    test("render the component",()=> {
    render(<SearchBar />)    
})
    test("must exists a button",()=> {
        
        const button = component.container.querySelector('button')
        console.log(prettyDOM(button))
    });

    test("must click the button",()=> {
        
        const buttonclick = component.getByText('Buscar')

        fireEvent.submit(buttonclick)

        expect(mockHandler.mock.calls).toHaveLength(1)

    })
})