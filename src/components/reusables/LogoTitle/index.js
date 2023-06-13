import LogoTitleView from "./LogoTitleView";
import useLogoTitleViewModel from "./LogoTitleViewModel";

const Title = (props) => {
    const viewModel = useLogoTitleViewModel({...props})
    return (
        <LogoTitleView {...viewModel} />
    )
}

export default Title