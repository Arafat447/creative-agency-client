import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { userContext } from '../../../App';
import DashboardMain from '../DashboardMain/DashboardMain';

const Order = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const { id } = useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [allService, setAllService] = useState([]);
    useEffect(() => {
        fetch('https://agile-taiga-09020.herokuapp.com/getServices')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, []);
    const orderedService = allService.find(data => data._id == id)
    const onSubmit = data => {
        let image = data.image[0];

        const serviceInfo = JSON.parse(data.serviceInfo);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('date', new Date().toDateString());
        formData.append('serviceId', serviceInfo.serviceId);
        formData.append('serviceName', serviceInfo.serviceName);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('image', image);
        fetch('https://agile-taiga-09020.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data)
                }
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <div>
            <DashboardMain info={'Order'}>
                <div className="service-container">
                    <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group" >
                            <input className="form-control" defaultValue={loggedInUser.name} name="name" ref={register({ required: true })} required />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className="form-group" >
                            <input className="form-control" defaultValue={loggedInUser.email} name="email" ref={register({ required: true })} required />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-group" >

                            {

                                orderedService ?
                                    <select className="form-control" name="serviceInfo" ref={register({ required: true })} >
                                        <option value={JSON.stringify({ serviceId: orderedService._id, serviceName: orderedService.service })} >{orderedService.service}</option>
                                    </select> : <select name="serviceInfo" ref={register({ required: true })} className="form-control" >
                                        {
                                            allService.map(data =>
                                                <option value={JSON.stringify({ serviceId: data._id, serviceName: data.service })} >{data.service}</option>
                                            )
                                        }
                                    </select>
                            }

                        </div>
                        <div className="form-group" >
                            <textarea className="form-control" name="description" ref={register({ required: true })} required ></textarea>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div className="d-flex" >
                            <div className="form-group w-50" >
                                <input className="form-control" name="price" type="number" ref={register({ required: true })} required />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div className="form-group w-50" >
                                <input className="form-control" name="image" type="file" ref={register({ required: true })} required />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </div>
                        <input className="btn btn-success" type="submit" />
                    </form>
                </div>
            </DashboardMain>
        </div>
    );
};

export default Order;