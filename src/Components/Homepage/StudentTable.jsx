import { useEffect, useState } from 'react';
import './Homepage.css'
import data from './student'
function StudentTable({activeTab}) {


    const studentData = localStorage.getItem('studentData')
    const auth = JSON.parse(studentData)
    console.log(auth);

    // console.log(data.students);
    // console.log(data.students);
  


    const [search, setSearch] = useState('');
    const handleChange = e=>{
        setSearch(e.target.value);
    }

    const filteredStudents = data.students.filter(student=>{   
        if(activeTab === 'All') return student.name.toLowerCase().includes(search.toLowerCase()) || student.category.toLowerCase().includes(search.toLowerCase())     
        return student.category === activeTab && (student.name.toLowerCase().includes(search.toLowerCase()) ||  
        student.category.toLowerCase().includes(search.toLowerCase()))
    });
    

    return (
        <>
        <div className="search-bar">
            <input type="search" value={search} onChange={handleChange} placeholder='Search Student or Category...'/>
        </div>
        <div className="datatable">
            <table style={{ textAlign: 'left' }}>
                <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Student ID</th>
                    <th>Student Category</th>
                </tr>
                </thead>
                
                <tbody>
                    {
                        filteredStudents.map(student => {
                            return (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.id}</td>
                                    <td>{student.category}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default StudentTable