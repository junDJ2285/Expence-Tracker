import { Button } from "antd"
import { Link } from "react-router-dom";
import "./home.css"


const Home = () => {
    return (
        <div className="home">

            <h1 className="home-head">Explore Expence Tracker</h1>

            <p className="home-dic"><b>Lorem Ipsum</b>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis culpa doloribus incidunt quia soluta architecto fugit ad, dicta quae voluptatibus minus ratione labore cupiditate illo qui voluptates exercitationem in ab placeat nemo praesentium at nulla dolor porro. Debitis minima aut vitae labore? Placeat praesentium impedit amet suscipit dolor quod sit quibusdam rerum autem atque voluptatem delectus dicta, quae veritatis voluptates exercitationem fuga ea, provident hic ullam repudiandae dignissimos? Ratione labore illo sapiente facilis, quod, tempore vitae non suscipit atque quidem error! Quaerat, eaque? Quo repellat unde tenetur vel libero asperiores harum earum non, obcaecati ullam eaque nam aspernatur, dolorem dolore?</p>
            <div className="">
                <Link to={"/Login"}>
                    <Button className="home-btn" size="large" gap="small" wrap="wrap" style={{padding:`1px 12px !important` }}>Login</Button>
                </Link>
            </div>
        </div>
    )
}
export default Home;