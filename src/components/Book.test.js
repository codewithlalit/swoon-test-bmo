import renderer from "react-test-renderer";
import Book from "./Book";

const book = { isbn: [] };

it('Book does have isbn', ()=>{
    expect(book).toHaveProperty('isbn')
})

it('renders a snapshot',()=>{
    const tree = renderer.create(<Book book={book}/>).toJSON()
    expect(tree).toMatchSnapshot();
})