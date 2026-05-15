

const Footer = () => {
    return (
        <div className='bg-green-900 w-full h-[500px]'>
            <div className="max-w-10/12 mx-auto mt-20">
                <h1 className="text-4xl font-bold text-white text-center pt-12">KeenKeeper</h1>
            <p className="text-center text-gray-300 pt-4">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <h3 className="text-white font-semibold text-center pt-5">Social Links</h3>
            <div className="flex justify-center gap-4 pt-3">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            </div>
            <div className=" max-w-10/12 mx-auto mt-10">
                <div className="flex justify-between mt-15">
                    <h2 className="text-gray-400">© 2026 KeenKeeper. All rights reserved.</h2>
                <ul className="flex gap-4 text-gray-400 ">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;