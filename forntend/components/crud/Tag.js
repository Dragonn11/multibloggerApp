import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { isAuth, getCookie } from '../../actions/auth';
import { create,getTags,removeTag,singleTag } from '../../actions/tag';


const Tag=()=>{

    const [values,setValues]=useState({

        name:'',
        error:false,
        success:false,
        tags:[],
        removed:false,
        reload:false
    
    })

    const token=getCookie('token');

    const {name,error,success,tags,removed,reload}=values;
    useEffect(() => {
        
        loadTag();
    }, [reload])
    
    const loadTag=()=>{
        getTags().then(data=>{
            if(data.error){
                console.log(data.error);
            }else{
                setValues({...values,tags:data});
            }
        })
    }

    const showTags=()=>{
        return tags.map((c,i)=>{
                return (
                    <button
                    onDoubleClick={() => deleteConfirm(c.slug)}
                    title="Double click to delete"
                    key={i}
                    className="btn btn-outline-primary mr-1 ml-1 mt-3">
                    {c.name}
                </button>
                );
        })
    }


    
    
       
    const handleChange=e=>{
        e.preventDefault();
       
        setValues({...values,name:e.target.value,error:false,success:false,removed:''})
    } 

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ name }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: true, name: '', removed: false, reload: !reload });
            }
        });
    };

    const deleteTag=(slug)=>{
        removeTag(slug,token).then(data=>{
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }

        })

        
    }

    const deleteConfirm = (slug)=>{
        let answer = window.confirm("Are you sure you want to delete");
        if(answer){
            deleteTag(slug);
        }
    }
    const newTagForm=()=>(

        <form onSubmit={clickSubmit}>
            <div className='form-group'>
                <label className='text-muted'> Name</label>
                <input type='text' className='form-control' onChange={handleChange} value={name} required/>
            </div>
            <div>
                <button type='submit' className='btn btn-primary'> Create</button>
            </div>
        </form>
    )

    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Tag is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p className="text-danger">Tag already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Tag is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

return(

         <React.Fragment>
            {showSuccess()}
            {showError()}
            {showRemoved()}
            <div onMouseMove={mouseMoveHandler}>
                {newTagForm()}
                {showTags()}
            </div>
        </React.Fragment>
)
}
export default Tag;