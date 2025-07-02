import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Userdashboard from '../pages/Userdashboard'
import Admindashboard from '../pages/Admindashboard'
import Createcampaign from '../pages/Createcampaign'
import Allcampaigns from '../pages/Allcampaigns'
import Approvedcampaign from '../pages/Approvedcampaign'
import Rejectedcampaign from '../pages/Rejectedcampaign'
import Pendingcampaign from '../pages/Pendingcampaign'
import Viewcampaign from '../pages/Viewcampaign'
import Usersubmittedcampaign from '../pages/Usersubmittedcampaign'
import Payment from '../pages/Payment'

const router = createBrowserRouter([
    {
        path:'',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    }, 
    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/userdashboard',
        element:<Userdashboard/>
    },{
        path:'/admindashboard',
        element:<Admindashboard/>
    },
    {
        path:'/createcampaign',
        element:<Createcampaign/>
        
    },
    {
        path:'/allcampaign',
        element:<Allcampaigns/>
    },
    {
        path:'/approvedcampaign',
        element:<Approvedcampaign/>
    },
    {
        path:"/rejectedcampaign",
        element:<Rejectedcampaign/>
    },
    {
        path:'/pendingcampaign',
        element:<Pendingcampaign/>
    },
    {
        path:'/viewcampaign',
        element:<Viewcampaign/>
    },{
        path:'/mycampaign',
        element:<Usersubmittedcampaign/>
    },{
        path:'/payment/:id',
        element:<Payment/>
    }
])
export default router