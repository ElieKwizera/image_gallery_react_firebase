import React, { useState, Fragment} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = ()=>
{
    const [file,setFile] = useState(null);
    const [errors,setErrors] = useState(null);
    const acceptedTypes = ['image/png','image/jpeg'];
    const onchange = (e)=>
    {
        let selected = e.target.files[0];
        if (selected && acceptedTypes.includes(selected.type))
        {
            setFile(selected);
            setErrors(null);
        }
        else
        {
            setErrors('Please select an image file');
        }

    }
    return (
            <Fragment>
            <label>
            <input type="file" onChange={onchange} />
            <span >  +</span>
            </label>
            <div className="output">
                {errors && <p>{errors}</p>}
            </div>

            {file && <ProgressBar file={file} setFile ={setFile} />}

            </Fragment>
            
            

        );
}

export default UploadForm;