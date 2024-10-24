import GreenFour from "../../assets/green_four.png"
import ZooQR from "../../assets/zoo_qrcode.jpeg"


const FourPage = () => {
    return (
        <div className="mt-5">
            <div className="relative   p-6">
                {/* Background Image */}
                <img src={GreenFour} alt="Background" className=" h-auto" />
                <h3 className="absolute text-3xl font-semibold text-gray-900 left-20 top-20 ">猩际社区</h3>
            </div>

            <div className="flex items-center mt-4 border shadow-xl rounded box-border">
                <div className="w-1/2">
                    <img src={ZooQR} alt="" className="w-full" />
                </div>
                <div className="w-1/2">
                    <p className="py-1">每日打卡群</p>
                    <p className="py-1">每天一篇 RA</p>
                    <p className="py-1">讲解+领读</p>
                    <p className="py-1">微信群中打卡获取老师点评</p>
                    <button className="border border-green-500 p-2 px-3 rounded"> 师点评
                    </button>
                </div>
            </div>

        </div>
    );
};

export default FourPage;