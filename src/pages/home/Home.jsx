import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/Sidebar";

import "./home.css";

export default function Home() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Header />
            <div className="home">
                <Post />
                <Sidebar />
            </div>
        </>
    );
}