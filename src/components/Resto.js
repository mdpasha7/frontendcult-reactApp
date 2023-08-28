import { IMG_URL } from "../utils/constants";
import restaurantData from "../utils/mockData";
const RestoComponent = (props) => {
//console.log(props);
const {restoData} = props;
console.log(restoData);
return (
<div className="resto">
<img src={ IMG_URL +restoData.cloudinaryImageId }
/>
<h2>{restoData.name}</h2>
<h4>{restoData.avgRating}</h4>
<h4>{restoData.areaName}</h4>
<h4>{restoData.locality}</h4>
<h4>{restoData.costForTwo}</h4>
<h4>{restoData.cuisines.join(',')}</h4>

</div>
)
};

export default RestoComponent;