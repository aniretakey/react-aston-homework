import styles from './style.module.css';

const quotesArr = [
  { id: 1, quote: 'It`s not a bug; it`s an undocumented feature.' },
  { id: 2, quote: 'If, at first, you do not succeed, call it version 1.0' },
  { id: 3, quote: 'Weeks of coding can save you hours of planning.' },
  {
    id: 4,
    quote: 'JavaScript logic: 0 == "0" and 0 == []; therefore, "0" != []',
  },
  { id: 5, quote: 'Deleted code is debugged code.' },
  { id: 6, quote: 'Remember that there is no code faster than no code' },
];

export default function List() {
  const items = quotesArr.map((quote) => {
    return (
      <li key={quote.id} className={styles.listItem}>
        {quote.quote}
      </li>
    );
  });
  return <ul className={styles.list}>{items}</ul>;
}
