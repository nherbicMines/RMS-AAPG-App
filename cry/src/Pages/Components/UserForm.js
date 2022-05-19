import React from 'react'

function UserForm() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        organzation: 0,
        attractiveness: 0,
        legibility: 0,
        originality: 0,
        longevity: 0,
        substantiation: 0,
        impression: 0,
        bulletin: false,
        selectForTour: false,
        comment: ""
    });

    const FormTitles = ["Presentation", "Content", "Overall Impression", "Comments for the Presenter"];

    const PageDisplay = () => {
        
    }
  return (
    <div>
      
    </div>
  )
}

export default UserForm

