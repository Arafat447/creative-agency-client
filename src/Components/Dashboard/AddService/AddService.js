import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import DashboardMain from '../DashboardMain/DashboardMain';
import { useContext } from 'react';
import { userContext } from '../../../App';

const AddService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const image = data.image[0]
        console.log(image);
        const formData = new FormData()
        formData.append('name', loggedInUser.name);
        formData.append('email', loggedInUser.email);
        formData.append('service', data.service);
        formData.append('description', data.description);
        formData.append('imgFile', image)

        fetch('https://agile-taiga-09020.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <DashboardMain info={"Add Service"} >
                <div className="service-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group" >
                                    <input className="form-control" name="service" ref={register({ required: true })} required />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <div className="form-group" >
                                    <textarea className="form-control" name="description" ref={register({ required: true })} required ></textarea>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>

                            </div>
                            <div className="col-lg-6">
                                <div className="form-group" >
                                    <input className="form-control" name="image" type="file" ref={register({ required: true })} required />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                </div>
                                <input className="btn btn-success" type="submit" />

                            </div>
                        </div>

                    </form>
                </div>
            </DashboardMain>
        </div>
    );
};

export default AddService;