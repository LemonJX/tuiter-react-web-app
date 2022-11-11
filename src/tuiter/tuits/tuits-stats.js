import React from "react";

const TuitsStats = ({tuit}) => {
    return(
        <div className="row mt-2">
            <div className="col-3">
                <i className="bi bi-chat text-secondary"></i>
                <span className="text-secondary"> {tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-repeat text-secondary"></i>
                <span className="text-secondary"> {tuit.retuits}</span>
            </div>
            <div className="col-3">
                {tuit.liked? <i className="bi bi-heart-fill text-danger"></i> : <i className="bi bi-heart text-secondary"></i>}
                <span className="text-secondary"> {tuit.likes}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    );
};
export default TuitsStats;