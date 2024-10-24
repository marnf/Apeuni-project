import QRcode from "../assets/QR-code.png"
import { CiFacebook } from "react-icons/ci";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsTelegram } from "react-icons/bs";





const Experiment = () => {
    return (

        <div className="bg-neutral block">
            <div className="text-start pt-10 ps-10 pb-3 block border-b-2 border-gray-300">
                <p className="text-white text-xl">Language:  <a className="ps-3 hover:text-green-400" href="#"> 中文(简体)  </a> <a className="ps-3 hover:text-green-400" href="#">  English</a> </p>
            </div>
            <footer className="footer  text-neutral-content p-10 border-b-2 border-gray-300 ">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer justify-between text-neutral-content p-10 border-b-2 border-gray-300 ">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Shenzhen APEUni Education Technology Co., Ltd.</a>
                    <a className="link link-hover">深圳猩宇宙教育科技有限公司   粤ICP备18035327号-1</a>
                    <div className="flex items-center gap-4">
                        <a className="link link-hover border-r-2 pr-4 border-white">Terms of use</a>
                        <a className="link link-hover">Privacy Policy</a>
                    </div>
                </nav>
                <div className="flex items-center gap-6  ">
                    <div>
                    <img src={QRcode} alt="" className="w-32 bg-gray-200 p-2 rounded-2xl" />
                    <p className="text-center text-gray-200">open IOS app</p>
                    </div>
                    <div>
                    <img src={QRcode} alt="" className="w-32 bg-gray-200 p-2 rounded-2xl" />
                    <p className="text-center text-gray-200">open IOS app</p>
                    </div>
                   
                </div>
            </footer>
        </div>

    );
};

export default Experiment;