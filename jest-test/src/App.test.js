import { render, screen } from '@testing-library/react'
import App from './App'

test('Test first run case', () => {
render(<App/>)
const text = screen.getByText('Awesome Stuff');
expect(text).toBeInTheDocument()
})