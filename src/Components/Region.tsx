import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../bll/store";

const Region = () => {

    const regionArray = useSelector<AppStateType, string[]>(state => state.region.region)

    return (
        <div>

        </div>
    );
};

export default Region;