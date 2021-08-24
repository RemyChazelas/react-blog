import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img
                className="headerImg"
                src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/01/50/455603baa711252.jpg"
                alt=""
            />
        </div>
    );
}