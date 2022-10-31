import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const EditProfile = () => {
    const me = useSelector(state => state.profile)
    return(
        <>
            <Link to="/tuiter/profile"><i className="bi bi-x-lg float-left align-middle"></i></Link>
            <b className="float-left align-middle ms-4">Edit profile</b>
            <Link to="/tuiter/profile">
                <button className="btn btn-dark rounded-pill float-end mb-1">Save</button>
            </Link>

            <img className="w-100" src={`./image/${me.banner}`} alt="banner"/>
            <img src={`./image/${me.avatar}`} alt={"avatar"}
                 className="rounded-circle w-25 ms-3 position-relative top-0 translate-middle-y"/>

            <form className="end-0">
                <div className="form-group row m-2">
                    <label htmlFor="firstNameInput" className="col-3 col-form-label">First name</label>
                    <div className="col-3">
                        <textarea className="form-control" id="firstNameInput" rows="1">{me.firstName}</textarea>
                    </div>
                    <label htmlFor="lastNameInput" className="col-3 col-form-label">Last name</label>
                    <div className="col-3">
                        <textarea className="form-control" id="lastNameInput" rows="1">{me.lastName}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="bioInput" className="col-3 col-form-label">Bio</label>
                    <div className="col-9">
                        <textarea className="form-control" id="bioInput" rows="2">{me.bio}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="websiteInput" className="col-3 col-form-label">Website</label>
                    <div className="col-9">
                        <textarea className="form-control" id="websiteInput" rows="1">{me.website}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="locationInput" className="col-3 col-form-label">Location</label>
                    <div className="col-9">
                        <textarea className="form-control" id="locationInput" rows="1">{me.location}</textarea>
                    </div>
                </div>
                <div className="form-group row m-2">
                    <label htmlFor="birthInput" className="col-3 col-form-label">Date of Birth</label>
                    <div className="col-9">
                        <input type="date" className="form-control" id="birthInput"></input>
                    </div>
                </div>
            </form>
        </>
    );
};
export default EditProfile;