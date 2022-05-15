import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
// import { useParams } from "react-router-dom";


// const ListingDetail = (props) => {
//     const [listing, setListing] = useState({});
//     // const [realtor, setRealtor] = useState({});
//     // const [price, setPrice] = useState(0);
//     // let {id}=useParams();

//     // const numberWithCommas = (x) => {
//     //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//     // };



//     useEffect(() => {
//         // let {id} = useParams();

//         const slug = props.match.params.id;
//         // console.log(slug);
//         const config = {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             }
//         };

//         axios.get(`http://127.0.0.1:8000/api/book_listings/${slug}`, config)
//         .then(res => {
//             setListing(res.data);
//             // setPrice(numberWithCommas(res.data.price));
//         })
//         .catch(err => {

//         });
//     }, [props.match.params.id]);



//     return (
//         <div className='listingdetail'>
//             <Helmet>
//                 <title>Realest Estate - Listing | {`${listing.title}`}</title>
//                 <meta
//                     name='description'
//                     content='Listing detail'
//                 />
//             </Helmet>
//             <div className='listingdetail__header'>
//                 <h1 className='listingdetail__title'>{listing.title}</h1>
//                 {/* <p className='listingdetail__location'>{listing.city}, {listing.state}, {listing.zipcode}</p> */}
//             </div>
//             <div className='row'>
//                 <div className='listingdetail__breadcrumb'>
//                     <Link className='listingdetail__breadcrumb__link' to='/'>Home</Link> / {listing.title}
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-3-of-4'>
//                     <div className='listingdetail__display'>
//                         <img className='listingdetail__display__image' src={listing.image} alt='' />
//                     </div>
//                 </div>
//                 {/* <div className='col-1-of-4'>
//                     <div className='listingdetail__display'>
//                         <img className='listingdetail__display__image' src={realtor.photo} alt='' />
//                     </div>
//                     <h3 className='listingdetail__realtor'>{realtor.name}</h3>
//                     <p className='listingdetail__contact'>{realtor.phone}</p>
//                     <p className='listingdetail__contact'>{realtor.email}</p>
//                     <p className='listingdetail__about'>{realtor.description}</p>
//                 </div> */}
//             </div>
//             <div className='row'>
//                 {/* <div className='col-1-of-2'>
//                     <ul className='listingdetail__list'>
//                         <li className='listingdetail__list__item'>Home Type: {listing.home_type}</li>
//                         <li className='listingdetail__list__item'>Price: ${price}</li>
//                         <li className='listingdetail__list__item'>Bedrooms: {listing.bedrooms}</li>
//                         <li className='listingdetail__list__item'>Bathrooms: {listing.bathrooms}</li>
//                         <li className='listingdetail__list__item'>Square Feet: {listing.sqft}</li>
//                     </ul>
//                 </div> */}
//                 <div className='col-1-of-2'>
//                     <ul className='listingdetail__list'>
//                         <li className='listingdetail__list__item'>Category: {listing.category}</li>
//                         {/* <li className='listingdetail__list__item'>Address: {listing.address}</li>
//                         <li className='listingdetail__list__item'>City: {listing.city}</li>
//                         <li className='listingdetail__list__item'>State: {listing.state}</li>
//                         <li className='listingdetail__list__item'>Zipcode: {listing.zipcode}</li> */}
//                     </ul>
//                 </div>
//             </div>
//             <div className='row'>
//                 <p className='listingdetail__description'>{listing.summary}</p>
//             </div>
//             {/* {displayInteriorImages()} */}
//         </div>
//     );
// };


const ListingDetail = () => {
    return (
        <div>
            Detail
        </div>
    )
};

export default ListingDetail;