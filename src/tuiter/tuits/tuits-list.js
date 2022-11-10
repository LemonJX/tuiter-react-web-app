import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "./tuits-item";

const TuitsList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {postsArray.map(tuit => <TuitsItem tuit={tuit}/> )}
        </ul>
    );
};
export default TuitsList;