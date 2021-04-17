import React from "react";
import achievement from "../../../images/achivement.png";
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-7 align-self-center">
                        <h1>Here’s Our Achivement. <br/> Lets Check it Out</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore efacere amet aperiam non odio.
                            Temporibus, nemo quasi quisquam ipsa distinctio
                            saepe sed veniam incidunt, tempora mollitia,
                            dignissimos repellendus expedita. Obcaecati minima,
                            reiciendis optio aspernatur autem pariatur soluta
                            illum velit, eligendi dolorem consequuntur sapiente
                            rerum accusamus aut nulla praesentium! Neque autem
                            animi, voluptatem magnam nesciunt officia nemo nam,
                            delectus minima velit beatae iste praesentium ad
                            repudiandae, similique excepturi sapiente.
                        </p>
                    </div>
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={achievement} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;
