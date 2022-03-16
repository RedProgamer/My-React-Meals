import BackToHome from "./BackToHome";

function CartNavbar() {
    return (
        <header className="w-screen">
            <div className="flex items-center pt-3">
                <div className="pl-3">
                    <BackToHome />
                </div>
                <div className="flex-1 pr-7">
                    <h1 className="justify-start text-4xl text-center">Cart</h1>
                </div>
            </div>
        </header>
    );
}

export default CartNavbar;