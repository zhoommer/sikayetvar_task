import React from "react";
import student from '../../assets/icons/8541942_graduation_cap_icon.png';
import bookmark from '../../assets/icons/6827779_bookmark_favorite_multimedia_ui_user interface_icon.png';
import dolar from '../../assets/icons/9027435_dolar_icon.png';
import man from '../../assets/icons/5340287_man_people_person_user_users_icon.png';



const Home = () => {
    return (
        <div className="boxes">
            <div className="box">
              <div>
                <img src={student} alt="student"/>
                <p>Students</p>
              </div>

              <div className="d-flex justify-content-end">
                <p className="fw-bold fs-1">243</p>
              </div>
            </div>

            <div className="box">
              <div>
                <img src={bookmark} alt="bookmark" />
                <p>Course</p>
              </div>

              <div className="d-flex justify-content-end">
                <p className="fw-bold fs-1">13</p>
              </div>
            </div>

            <div className="box">
              <div>
                <img src={dolar} alt="dolar"/>
                <p>Payments</p>
              </div>

              <div className="d-flex justify-content-end">
                <p className="fw-bold fs-1">556,000₺</p>
              </div>
            </div>

            <div className="box">
              <div>
                <img src={man} alt="man"/>
                <p>Users</p>
              </div>

              <div className="d-flex justify-content-end">
                <p className="fw-bold fs-1">3</p>
              </div>
            </div>
          </div>
    )
}


export default Home;