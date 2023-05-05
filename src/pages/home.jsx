import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../components/homePage';

const Home = (props) => {
    // api url
    const API_URL = props.API_URL;


    return (
        <>
            <ToastContainer />
            <HomePage API_URL={API_URL} tweetDetailPage={props.tweetDetailPage} handleLike={props.handleLike} getProfile={props.getProfile} handleRetweet={props.handleRetweet} handleDelete={props.handleDelete} />
        </>
    )
}

export default Home;