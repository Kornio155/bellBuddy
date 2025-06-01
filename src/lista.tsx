import { useState } from 'react';

function Lista() {
    const [students, setStudents] = useState([
        { firstName: 'Jan', lastName: 'Kowalski', status: 'none' },
        { firstName: 'Anna', lastName: 'Nowak', status: 'none' },
        { firstName: 'Piotr', lastName: 'Wiśniewski', status: 'none' },
        { firstName: 'Katarzyna', lastName: 'Wójcik', status: 'none' },
        { firstName: 'Marek', lastName: 'Mostowiak', status: 'none' },
        { firstName: 'Agnieszka', lastName: 'Mazur', status: 'none' },

    ]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [showList, setShowList] = useState(true);
    const [showForm, setShowForm] = useState(true);

    const handleAddStudent = () => {
        if (!firstName.trim() || !lastName.trim()) return;
        const newStudent = { firstName, lastName, status: 'none' };
        setStudents([...students, newStudent]);
        setFirstName('');
        setLastName('');
    };

    const markPresent = (index) => {
        const updated = [...students];
        updated[index].status = 'present';
        setStudents(updated);
    };

    const markAbsent = (index) => {
        const updated = [...students];
        updated[index].status = 'absent';
        setStudents(updated);
    };

    const getColor = (status) => {
        if (status === 'present') return 'green';
        if (status === 'absent') return 'red';
        return 'black';
    };

    const presentCount = students.filter((s) => s.status === 'present').length;
    const absentCount = students.filter((s) => s.status === 'absent').length;

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Lista uczniów</h2>

            <p>
                Obecni: <strong style={{ color: 'green' }}>{presentCount}</strong> | Nieobecni:{' '}
                <strong style={{ color: 'red' }}>{absentCount}</strong>
            </p>

            <div style={{ marginBottom: '1rem' }}>
                <button onClick={() => setShowList(!showList)}>
                    {showList ? 'Ukryj listę' : 'Pokaż listę'}
                </button>
                <button onClick={() => setShowForm(!showForm)} style={{ marginLeft: '1rem' }}>
                    {showForm ? 'Ukryj formularz' : 'Pokaż formularz'}
                </button>
            </div>

            {showList && (
                <ul>
                    {students.map((student, index) => (
                        <li
                            key={index}
                            style={{ color: getColor(student.status), marginBottom: '0.5rem' }}
                        >
                            {student.firstName} {student.lastName}
                            <button onClick={() => markPresent(index)} style={{ marginLeft: '1rem' }}>
                                Obecny
                            </button>
                            <button onClick={() => markAbsent(index)} style={{ marginLeft: '0.5rem' }}>
                                Nieobecny
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {showForm && (
                <div style={{ marginTop: '1rem' }}>
                    <input
                        type="text"
                        placeholder="Imię"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <input
                        type="text"
                        placeholder="Nazwisko"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <button onClick={handleAddStudent}>Dodaj ucznia</button>
                </div>
            )}
        </div>
    );
}

export default Lista;
