import React from 'react';
import { useContext } from 'react';
import { userContext } from '../../../../App';
import { useForm } from "react-hook-form";
import DashboardMain from '../DashboardMain';

const UserReview = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        const addReview= { ...data };
        addReview.email = loggedInUser.email;
        addReview.photo = loggedInUser.photo;
        fetch('https://agile-taiga-09020.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    
                }
            })
    }
    return (
        <div>
            <DashboardMain info={"Review"} >
                <div className="service-container">
                <form onSubmit={handleSubmit(onSubmit)} className="w-50" >
                            <div className="form-group" >
                                <label className="font-weight-bold" >Name</label>
                                <input placeholder="Enter Name" className="form-control" defaultValue={loggedInUser.name } name="name" ref={register({ required: true })} />
                            </div>
                            <div className="form-group" >
                                <label className="font-weight-bold" >Company Name</label>
                                <input placeholder="Enter Company Name" className="form-control" name="company" ref={register({ required: true })} />
                            </div>
                            <div className="form-group" >
                                <label className="font-weight-bold" >Description</label>
                                <textarea placeholder="Enter Description " className="form-control" name="description" ref={register({ required: true })} ></textarea>
                            </div>

                            <input className="btn-custom mt-5" type="submit" />
                        </form>
                </div>
            </DashboardMain>
        </div>
    );
};

export default UserReview;