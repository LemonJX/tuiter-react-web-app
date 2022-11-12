import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitsItem from "./tuits-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [])
    // eslint-disable-line react-hooks/exhaustive-deps

    return(
        <ul className="list-group">
            {loading && <li className="list-group-item">Loading...</li>}
            {tuits.map(tuit => <TuitsItem tuit={tuit}/> )}
        </ul>
    );
};
export default TuitsList;