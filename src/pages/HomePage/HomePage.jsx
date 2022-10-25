import { useSelector } from 'react-redux';
import { selectBooks } from 'redux/Books/booksSelectors';
import { useDispatch } from 'react-redux';
import { deleteBook } from 'redux/Books/booksAction';

export const HomePage = () => {
  const books = useSelector(selectBooks);
  const dispath = useDispatch();
  return (
    <>
      <ul>
        {books.map(({ id, title, author, img, plot }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{author}</p>
            <img src={img} alt={title} />
            <p>{plot}</p>
            <button type="button" onClick={() => dispath(deleteBook(id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
