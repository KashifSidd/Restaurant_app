
import { Restuarant } from '../Models/restuarant.model'
import * as RestuarantActions from './../Actions/restuarant.actions'


export const InitialState : Restuarant[] = [{
    id: 1,
    name: "Salam Restaurant",
    category: ['chinese', 'Pizza', 'Fastfood'],
    type: 'Veg',
    location: 'Mumbai',
    price: 600,
    rating: 5,
    createdOn: new Date,
    imgUrl: 'https://i.pinimg.com/736x/fe/b4/3e/feb43ecdde7a41c8a54d15599aa5e0e1.jpg'
}, {
    id: 2,
    name: "The Chef In the Hat",
    category: ['South Indian', 'North Indian',"Chinese"],
    type: 'non-Veg',
    location: 'Ahmedabad',
    price: 700,
    rating: 4.3,
    createdOn: new Date,
    imgUrl: 'https://image.similarpng.com/very-thumbnail/2021/06/Chef-logo-template-isoated-on-transparent-background-PNG.png'
},
{
    id: 3,
    name: "The Steamer Coffee Shop",
    category: ['Coffee','Burger','Pizza'],
    type: 'Veg',
    location: 'Mumbai',
    price: 500,
    rating: 4.1,
    createdOn: new Date,
    imgUrl: 'https://i.pinimg.com/originals/06/23/b6/0623b6b9608e4ce991cb421b6635df90.jpg'
},
{
    id: 4,
    name: "Chick-fil-A",
    category: ['Fast-Food','Chinese','Indian'],
    type: 'non-Veg',
    location: 'Punjab',
    price: 700,
    rating: 5,
    createdOn: new Date,
    imgUrl: 'https://img.freepik.com/free-vector/chicken-restaurant-logo-cartoon-vector_142499-190.jpg?w=2000'
},
{
    id: 5,
    name: "FnF",
    category: ['Sea Food','Fastfood','Chinese','North-Indian'],
    type: 'non-Veg',
    location: 'Kerala',
    price: 800,
    rating: 4.5,
    createdOn: new Date,
    imgUrl: 'https://images-platform.99static.com/raLgXOGdBcjAuDLTAiszln51DLg=/2x0:495x493/500x500/top/smart/99designs-contests-attachments/95/95595/attachment_95595231'
}]



export function restuarantReducer(state: Restuarant[] = InitialState, action: RestuarantActions.Actions){
   switch (action.type) {
        case RestuarantActions.RestuarantActionTypes.LOAD_RESTUARANTS: 
            return state;
        case RestuarantActions.RestuarantActionTypes.ADD_RESTUARANT:{
            return[...state, action.payload] ;
        }  
        case RestuarantActions.RestuarantActionTypes.REMOVE_RESTUARANT:{
            const curState = [...state];
            curState.splice(action.payload, 1);
            return curState
        }  
        case RestuarantActions.RestuarantActionTypes.VEG_RESTUARANT:{
            const vegRestuarant = state.filter((restuarant) => restuarant.type.toLowerCase() == 'veg')
            return vegRestuarant
        }    
        
        case RestuarantActions.RestuarantActionTypes.NONVEG_RESTUARANT:{
            const nonVegRestuarant = state.filter((restuarant) => restuarant.type.includes('non'))
            return nonVegRestuarant
        }
        case RestuarantActions.RestuarantActionTypes.SEARCH_RESTUARANT:{
            const filter = [(action.payload).toLowerCase()];
            const filterByCategory = new Set(filter);
            const result = state.filter((o) => o.category.some((category)=> filterByCategory.has(category.toLowerCase())) )
            return result
        }
        default: { 
            return state;
        }
    }
}

