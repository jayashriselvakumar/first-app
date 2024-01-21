import React from 'react'
import './ListRender.css'
const ListRender = () => {
    const [studentDetails, setStudentDetails] = React.useState(
        [
            {
                studenName: "muthu",
                studenClass: 6,
                studentSection: "a",
                stud_id: 1
            },
            {
                studenName: "maha",
                studenClass: 6,
                studentSection: "a",
                stud_id: 2
            },
            {
                studenName: "jayashri",
                studenClass: 7,
                studentSection: "b",
                stud_id: 3
            }
        ]
    )
    return (
        <div className="studentDetails">

            <ul>
                {
                    studentDetails.filter((student) => student.studenClass === 6).map((student) => {
                        return( 
                        <li key={student.stud_id}>{student.studenName.toUpperCase()} from::{student.studentSection.toUpperCase()} section</li>
                        )
                    })
                }
            </ul>
        </div>

    )
}


export default ListRender