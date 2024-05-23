import FooterList from "../../mockData/footer-list";

const Footer = () => {
    return (
        <div className="w-full text-white bg-[#A91D3A] flex max-md:flex-col pt-[3%] pb-[4%]">
            <div className="ml-[7%] mr-[4%]">
                <h1 className="text-lg font-semibold underline underline-offset-8">Address</h1>
                <div className=" pt-4">
                    <h1 className="text-base">LB-16, Ansal Bhawan, KG Marg,</h1>
                    <h1 className="text-base mt-2">Connaught Place, Delhi-110001</h1>
                </div>
                <div className=" pt-4">
                    <h1 className="text-base font-semibold">Mail to our support team</h1>
                    <h1 className="text-xl mt-2">info@nitamtravels.com</h1>
                </div>
                <div className=" pt-4">
                    <h1 className="text-base">Follow us on</h1>
                    <i class="fab fa-facebook"></i>
                </div>
            </div>
            <div className="flex max-md:flex-col">
                {
                    FooterList.map(index => (
                        <div className="ml-8 mr-8 max-md:mt-8">
                            <div className="text-lg mb-2 font-semibold underline underline-offset-8">{index.Title}</div>
                            <div>
                                {
                                    index.items.map(counter => (
                                        <div className="text-base p-1">{counter}</div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Footer;