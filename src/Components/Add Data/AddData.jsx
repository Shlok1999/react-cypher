import { useState } from 'react';
import React from 'react'
import data from '../Homepage/student';
import './AddData.css';
function AddData() {
    const [studentName, setStudentName] = useState('');
    const [studentId, setStudentId] = useState(data.students.length+1);
    const [studentCategory, setStudentCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            id: studentId,
            name: studentName,
            category: studentCategory
        }
        console.log(newData);
        localStorage.setItem('studentData', JSON.stringify(newData));
    }

  return (
    <div className='add-data-section'>
        <div className="add-data">
            <h1>Add Data</h1>
            <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
            <label>Student ID</label> <br />
                <input value={studentId} onChange={(e)=> setStudentId(data.students.length+1)}  type="number" placeholder="Enter Student ID" /> <br /> <br />
                <label className='block text-gray-700 font-medium mb-2'>Student Name</label><br />
                <input value={studentName} onChange={(e)=> setStudentName(e.target.value)} type="text" placeholder="Enter Student Name" /> <br /> <br />
                <label>Student Category</label> <br />
                <input  value={studentCategory} onChange={(e)=> setStudentCategory(e.target.value)} type="text" placeholder="Enter Student Category" /> <br /> <br />
                <button type="submit">Add Data</button>
            </form>
        </div>
    </div>
  )
}

export default AddData