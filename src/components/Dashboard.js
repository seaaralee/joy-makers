import React from "react";

import logo from "../assets/logo.png";
import illus1 from "../assets/illustration_1.png";
import illus2 from "../assets/illustration_2.png";
import illus3 from "../assets/illustration_3.png";
import check1 from "../assets/01.png";
import check2 from "../assets/02.png";
import check3 from "../assets/03.png";
import check4 from "../assets/04.png";
import icon1 from "../assets/teacher.png";
import icon2 from "../assets/people.png";
import icon4 from "../assets/box.png";
import icon3 from "../assets/people-green.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate } from "react-router-dom";

const section3 = [
    {
      lable: "8.400+",
      total: "Donasi",
    },
    {
      lable: "3.500+",
      total: "Sukarelawan",
    },
    {
      lable: "1.200+",
      total: "Kampanye",
    },
    {
      lable: "12 Th",
      total: "Pengalaman",
    },
  ];

const Dashboard = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    }

    const navigateToSignUp = () => {
        navigate('/signup');
    }

    const navigateToDonasi = () => {
        navigate('/donasi');
    }

    const navigateToFitur = () => {
        navigate('/fitur');
    }

    const navigateToSukarelawan = () => {
        navigate('/sukarelawan');
    }

    const navigateToTentangKami = () => {
        navigate('/aboutus');
    }

  return (
    <div className="bg-white">
        
{/* HEADER */}
      <header className="container max-w-7xl mx-auto flex flex-row pt-5 items-center space-x-36">
        <img alt="logo-joymakers" src={logo} className="w-36" />

        <div className="flex-1 pl-20">
          <ul className="flex flex-row space-x-10 pl-20 text-green-800">
            <li onClick={navigateToFitur}>Fitur</li>
            <li onClick={navigateToSukarelawan}>Sukarelawan</li>
            <li onClick={navigateToTentangKami}>Tentang Kami</li>
          </ul>
        </div>

        <div className="space-x-4 flex flex-row items-center ">
          <button className="border border-green-800 text-green-800 rounded-full py-2 px-6"
          onClick={navigateToLogin}>
            Masuk
          </button>
          <button className="bg-green-800 text-white rounded-full py-2 px-6"
          onClick={navigateToSignUp}>
            Daftar
          </button>
        </div>
      </header>

{/* MAIN */}
      <main>
        {/* CONTAINER 1 */}
      <div className="container max-w-7xl mx-auto grid grid-cols-2 py-24">
          <div>
            <h1 className="font-bold leading-relaxed font-['Poppins'] tracking-wider text-5xl pb-5">
              Donasikan  pakaianmu
              <br />
              untuk orang <p className=" text-emerald-900"> yang lebih
              <br />
              membutuhkan </p>
            </h1>
            <div className="text-gray-600 font-['Poppins'] font-normal text-xs pb-12">
            Hanya dengan menggunakan satu website ini anda sudah bisa mendonasikan pakaian anda yang kiranya sudah tidak dipakai untuk di serahkan kepada orang yang lebih membutuhkan.
            </div>
            <div className="space-x-6 flex flex-row items-center ">
            <button className="bg-green-800 text-white rounded-full py-2 px-6"
            onClick={navigateToDonasi}>
              Donasi Sekarang
            </button>
            </div>
          </div>
          <div className="items-center w-287 h-361">
            <img src={illus1} alt="ilustration-joymakers" className="items-center w-287 h-361"/>
          </div>
        </div>

        {/* CONTAINER 2 */}
        <div className="container bg-green-800 max-w-7xl mx-auto grid grid-cols-4 py-4 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4 space-x-6 justify-center ${
                  index + 1 !== section3.length}`}
              >
                <div className="font-bold font-['Poppins'] text-center">
                  <div className="text-white text-5xl pb-3">{val.lable}</div>
                  <div className="text-gray-400">{val.total}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTAINER 3 */}
        <div className="container max-w-7xl mx-auto grid grid-cols-2 py-24 items-center ">
          <div className="font-bold leading-relaxed font-['Poppins'] tracking-wider text-5xl pb-5">
              Kenapa kamu <i className=" text-emerald-900">harus berdonasi?</i>
              <img src={illus2} alt="illus2" />
          </div>
          <div className="px-16 space-y-6">
            <div className="text-gray-600 text-justify font-['Poppins'] pb-5">
            Membantu orang yang membutuhkan adalah hal yang sangat mulia. Dengan membantu orang lain, kamu dapat merubah hidup orang lain juga.
            Bahagia yang sejati adalah ketika kita bisa membuat orang lain bahagia karena kita.
            </div>
            <div className="text-gray-600 font-['Poppins'] flex items-center space-x-5">
                <img
                    src={check1}
                    alt="features-check"
                    className="w-10 h-6"
                />
                <div className="text">Tidak berguna bagimu, tapi sangat berguna bagi orang lain</div>
            </div>
            <div className="text-gray-600 font-['Poppins'] flex items-center space-x-5">
                <img
                    src={check2}
                    alt="features-check"
                    className="w-10 h-6"
                />
                <div className="text">Lebih bisa bersyukur dengan kondisimu saat ini</div>
            </div>
            <div className="text-gray-600 font-['Poppins'] flex items-center space-x-5">
                <img
                    src={check3}
                    alt="features-check"
                    className="w-10 h-6"
                />
                <div className="text">Menciptakan senyum untuk orang yang sedang kesuliltan</div>
            </div>
            <div className="text-gray-600 font-['Poppins'] flex items-center space-x-5">
                <img
                    src={check4}
                    alt="features-check"
                    className="w-10 h-6"
                />
                <div className="text">Menambah banyak relasi dan lebih bisa mengerti kondisi</div>
            </div>
          </div>
        </div>

        {/* CONTAINER 4 */}
        <div className="container bg-green-800 max-w-7xl mx-auto py-4shadow-2xl rounded-md py-4">
        <div className="container text-white max-w-5xl mx-auto mb-10 py-10 ">
            <div className="text-center font-['Poppins'] text-3xl mb-5">
                Manfaat Donasi dari Kamu
            </div>
            <div className="text-center font-['Poppins'] text-sm text-white">
            Mari bersama sama membantu terhadap orang yang lebih membutuhkan. Jika ada beberapa pakaian yang sudah tidak bisa dipakai, anda bisa serahkan kepada kami, agar kami dapat membagikannya kapada orang yang membutuhkan.
            </div>
        </div>

        <div className="container bg-green-800 max-w-6xl mx-auto grid grid-cols-3 gap-5 py-10 rounded-md px-4">
          <div className="container space-y-9 flex flex-col justify-center items-center">
            <img src={icon1} alt="" className="w-24 h-24" />
            <div className="font-bold font-['Poppins'] text-3xl text-white text-center space-y-2">Pendidikan</div>
            <div className="font-['Poppins'] text-white text-center space-y-2">
            Mendonasikan pakaian sekolah yang <br/> sudah tidak dipakai lagi, dan akan <br/> disumbangkan ke siswa yang membutuhkan
            </div>
          </div>
          <div className="container space-y-9 flex flex-col justify-center items-center">
            <img src={icon2} alt="" className="w-24 h-24" />
            <div className="font-bold font-['Poppins'] text-3xl text-white text-center space-y-2">Lansia</div>
            <div className="font-['Poppins'] text-white text-center space-y-2">
            Membantu mendonasikan pakaian layak <br/> pakai untuk para lainsia yang terkadang <br/> membutuhkan beberapa pakaian.
            </div>
          </div>
          <div className="container space-y-9 flex flex-col justify-center items-center">
            <img src={icon4} alt="" className="w-24 h-24" />
            <div className="font-bold font-['Poppins'] text-3xl text-white text-center space-y-2">Panti Asuhan</div>
            <div className="font-['Poppins'] text-white text-center space-y-2">
            Mendoanasikan pakaian untuk panti asuhan <br/> yang terkadang membutuhkan pakaian <br/> untuk para yatim piatu.
            </div>
          </div>
        </div>
        </div>

        {/* CONTAINER 5 */}
        <div className="container max-w-7xl mx-auto gap-10 py-24 items-center">
          <div className="text-center">
            <div className="font-bold leading-relaxed font-['Poppins'] tracking-wider text-5xl pb-5">
              Ayo bergabung <i className=" text-emerald-900">bersama kami</i>
            </div>
            <div className="text-gray-600 text-center font-['Poppins'] pb-5">
            Segeralah bergabung bersama kami dalam rangka mendonasikan pakaian untuk orang orang yang lebih membutuhkan, hanya dengan klik daftar dan segeralah donasikan pakaianmu!
            </div>
          </div>
        </div>
        
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-7xl flex flex-row  space-x-24">
          <div className="flex-1 space-y-5">
            <img src={logo} alt="logo" className="w-36" />
          </div>
          <div className="flex-1">
          <ul className="flex flex-row space-x-6">
          <li onClick={navigateToDonasi}>Donasi</li>
            <li onClick={navigateToFitur}>Fitur</li>
            <li onClick={navigateToSukarelawan}>Sukarelawan</li>
            <li onClick={navigateToTentangKami}>Tentang Kami</li>
          </ul>
        </div>
          <div>
            <div>©2022JoyMakers</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dashboard;
