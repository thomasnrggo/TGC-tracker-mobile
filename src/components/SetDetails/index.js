import React from "react";
import useSetDetailsViewModel from "./SetDetailsViewModel";
import SetDetailsView from "./SetDetailsView";

const SetDetail = ({ route, navigation }) => {
    const { setId } = route.params;
    const viewModel = useSetDetailsViewModel(setId);

    const props = {
        ...viewModel,
        navigation,
        route,
    };

    return <SetDetailsView {...props}/>;
};

export default SetDetail;
