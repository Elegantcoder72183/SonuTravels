import FooterList from "../../mockData/footer-list";

const Footer = () => {
    return (
        <div className="w-full text-white bg-[#A91D3A] flex justify-center max-md:flex-col pt-[3%] pb-[4%] ">
            <div className=" mr-[4%] max-lg:ml-4 max-md:ml-[4%]">
                <h1 className="text-lg font-semibold underline underline-offset-8 max-lg:text-sm max-md:text-lg ">Address</h1>
                <div className=" pt-4">
                    <h1 className="text-base max-lg:text-xs max-md:text-base">LB-16, Ansal Bhawan, KG Marg,</h1>
                    <h1 className="text-base mt-2 max-lg:text-xs max-md:text-base">Connaught Place, Delhi-110001</h1>
                </div>
                <div className=" pt-4">
                    <h1 className="text-base font-semibold max-lg:text-xs max-md:text-base">Mail to our support team</h1>
                    <h1 className="text-xl mt-2 max-lg:text-xs max-md:text-base">info@nitamtravels.com</h1>
                </div>
                <div className=" pt-4">
                    <h1 className="text-base max-lg:text-xs max-md:text-base">Follow us on</h1>
                    <i class="fab fa-facebook"></i>
                </div>
            </div>
            <div className="flex max-md:flex-col">
                {
                    FooterList.map(index => (
                        <div className="ml-8 mr-8 max-md:mt-8">
                            <div className="text-lg mb-2 font-semibold underline underline-offset-8 max-lg:text-sm max-md:text-lg">{index.Title}</div>
                            <div>
                                {
                                    index.items.map(counter => (
                                        <div className="text-base p-1 max-lg:text-xs max-md:text-base">{counter}</div>
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