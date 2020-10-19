import React from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        fetch('https://agile-taiga-09020.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                }
            })
    }
    return (
        <div>
            <DashboardMain info={"Make Admin"}>
            <div className="service-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                                <div className="form-group" >
                                    <input  className="form-control" name="email" type="email" ref={register({ required: true })} required />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <input className="btn btn-success" type="submit" />
                            </div>
                    </form>
            </div>
            </DashboardMain>
        </div>
    );
};

export default MakeAdmin;