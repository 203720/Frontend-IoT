import { getDatos, getBomba } from '../services/services'
import { Navbar } from './Navbar';
import temImage from "../img/temp.png";
import humImage from "../img/hum.png";
import humSueloImage from "../img/humSuelo.png";
import aguaImage from "../img/agua.png";
function Dashboard() {
    return (
        <div>
            <Navbar />

            <div>
                <h1>Variables en tiempo real</h1>
                <div class="card-group">
                    <div class="card">
                        <img src={temImage} class="card-img-top" alt="temp"></img>
                        <div class="card-body">
                        <h5 class="card-title">Temperatura</h5>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                    <img src={humImage} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                        <h5 class="card-title">Humedad</h5>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                    <img src={humSueloImage} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                        <h5 class="card-title">Humedad del suelo</h5>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card">
                    <img src={aguaImage} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                        <h5 class="card-title">Bomba de agua</h5>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dashboard;