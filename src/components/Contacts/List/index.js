import {useState} from 'react';

const List = ({contacts}) => {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key)=> 
      item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input placeholder='Filter Contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
      <h3>Contacts List:</h3>
      <ul className='list'>
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
            </li>
        ))
        }
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List