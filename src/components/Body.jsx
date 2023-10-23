import PropTypes from 'prop-types'
import { useState } from 'react';

function Body({firstName,dob,lastName}) {
    const students = [
        'Aminat Ayoade',
        'Zion Alele',
        'David Odezi',
        'Gbenga Taiwo',
        'Ife Oladepo',
        'Ayoade Yusuf',
        'Kunle Owolabi',
        'Nelson Okpithe',
    ]
    const [count, setCount] = useState(7)

    function countHandler() {
        setCount((prev) => {
            return prev + 5
        })
    }

  return (
    <div className='container'>
    <h3>{count}</h3>
    <button onClick={countHandler}>Change state</button>
      <ul>
        {students.map((student, index) => 
            <li key={index}>{student}</li>
        )}
      </ul>
      <div>
        Your First Name is {firstName}, Last Name is {lastName} and age is {2023-dob}
      </div>
    </div>
  );
}

Body.defaultProps = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
}

Body.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number
}

export default Body;
