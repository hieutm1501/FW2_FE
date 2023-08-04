import "../assets/css/blog.css";



const BlogPage = () => {
    return (
        <div className=''>
            <div id="alll" className="pt-100">

                {/* <!-- end category list --> */}
                <section id="" className="pt-35 pb-60">
                    <div className="container">
                        <div className="pb-80 col-lg-9">
                            <div className="pr-60">
                                <div className="">
                                    <div className="dis-block pos-relative">
                                        <img
                                            className="w-full trans-09"
                                            src="../src/assets/banner-bg.jpg"
                                            alt=""
                                        />
                                        <div className="how-pos">
                                            <span className="text-center ltext">22</span>
                                            <span className="text-center stext">Feb 2022</span>
                                        </div>
                                    </div>

                                    <div className="pt-20">
                                        <span className="stext3 flex align-center pb-10 mb-10 mt-10 pr-30">
                                            <span>
                                                <span className="c-999">By </span>Admin
                                                <span className="c-c mr-6 ml-4">|</span>
                                            </span>
                                            <span>
                                                22 Feb, 2022<span className="c-c mr-6 ml-4">|</span>
                                            </span>
                                            <span>
                                                StreetStyle, Fashion, Couple
                                                <span className="c-c mr-6 ml-4">|</span>
                                            </span>
                                            <span>8 Comments</span>
                                        </span>
                                        <h3 className="font-38 m-0 pb-30 ltext2">
                                            8 Ways to decorate your home
                                        </h3>
                                        <p className="m-0 pb-26 stext2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Nunc sit amet est vel orci luctus sollicitudin. Duis
                                            eleifend vestibulum justo, varius semper lacus condimentum
                                            dictum. Donec pulvinar a magna ut malesuada. In posuere
                                            felis diam, vel sodales metus accumsan in. Duis viverra
                                            dui eu pharetra pellentesque. Donec a eros leo. Quisque
                                            sed ligula vitae lorem efficitur faucibus. Praesent sit
                                            amet imperdiet ante. Nulla id tellus auctor, dictum libero
                                            a, malesuada nisi. Nulla in porta nibh, id vestibulum
                                            ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac
                                            purus id sapien condimentum feugiat.
                                        </p>
                                        <p className="m-0 pb-26 stext2">
                                            Praesent vel mi bibendum, finibus leo ac, condimentum
                                            arcu. Pellentesque sem ex, tristique sit amet suscipit in,
                                            mattis imperdiet enim. Integer tempus justo nec velit
                                            fringilla, eget eleifend neque blandit. Sed tempor magna
                                            sed congue auctor. Mauris eu turpis eget tortor ultricies
                                            elementum. Phasellus vel placerat orci, a venenatis justo.
                                            Phasellus faucibus venenatis nisl vitae vestibulum.
                                            Praesent id nibh arcu. Vivamus sagittis accumsan felis,
                                            quis vulputate
                                        </p>
                                    </div>
                                </div>
                                {/* <!--  --> */}
                                <div className="flex pt-16">
                                    <span className="stext-116 w-55 pt-4">Tags</span>
                                    <div className="flex flex-w">
                                        <a
                                            className="bor7 m-h-30 stext-107 flex-c-m trans-04 mr-5 mb-5 pr-15 pl-15 hov-tag1"
                                            href=""
                                        >
                                            Streetstyle
                                        </a>
                                        <a
                                            className="bor7 m-h-30 stext-107 flex-c-m trans-04 mr-5 mb-5 pr-15 pl-15 hov-tag1"
                                            href=""
                                        >
                                            Crafts
                                        </a>
                                    </div>
                                </div>
                                {/* <!--  --> */}
                                <div className="pt-40">
                                    <h4 className="mtext-113 pb-12 m-0">Leave a Comment</h4>
                                    <p className="m-0 stext-107 pb-40">
                                        Your email address will not be published. Required fields
                                        are marked *
                                    </p>
                                    <form>
                                        <div className="mb-20 bor19">
                                            <textarea
                                                className="w-95 m-h-150 stext3 pr-18 pl-18 pt-15 pb-15"
                                                name=""
                                                placeholder="Comment..."
                                            ></textarea>
                                        </div>

                                        <div className="mb-20 bor19 max-w-286">
                                            <input
                                                className="w-87 h-50 stext3 pr-18 pl-18"
                                                type="text"
                                                placeholder="Name *"
                                            />
                                        </div>

                                        <div className="mb-20 bor19 max-w-286">
                                            <input
                                                className="w-87 h-50 stext3 pr-18 pl-18"
                                                type="text"
                                                placeholder="Email *"
                                            />
                                        </div>

                                        <div className="mb-30 bor19 max-w-286">
                                            <input
                                                className="w-87 h-50 stext3 pr-18 pl-18"
                                                type="text"
                                                placeholder="Website"
                                            />
                                        </div>
                                        <button className="button-cmt trans-04 pr-25 pl-25">
                                            Post Comment
                                        </button>
                                    </form>
                                </div>
                                {/* <!--  --> */}
                            </div>
                        </div>
                        {/* <!--  --> */}
                        {/* <!--  --> */}
                        <div className="pb-80 col-lg-3">
                            <div className="pl-15">
                                <div className="bor17 pos-relative of-hidden m-2">
                                    <input
                                        className="size-116 stext-103 pr-55 pl-28"
                                        type="text"
                                        placeholder="Search"
                                    />
                                    <button className="size-122 ab-t-r flex-c-m trans-04 font-18 hov-1">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                                {/* <!--  --> */}
                                <div className="pt-55">
                                    <h3 className="m-0 mtext-112 pb-33">Categories</h3>
                                    <ul className="p-0">
                                        <li className="bor18">
                                            <a
                                                className="stext-115 dis-block trans-04 pr-4 pl-4 pt-8 pb-8 hov-1"
                                                href=""
                                            >
                                                Sofa
                                            </a>
                                        </li>
                                        <li className="bor18">
                                            <a
                                                className="stext-115 dis-block trans-04 pr-4 pl-4 pt-8 pb-8 hov-1"
                                                href=""
                                            >
                                                LivingRoom
                                            </a>
                                        </li>
                                        <li className="bor18">
                                            <a
                                                className="stext-115 dis-block trans-04 pr-4 pl-4 pt-8 pb-8 hov-1"
                                                href=""
                                            >
                                                Bedrom
                                            </a>
                                        </li>
                                        <li className="bor18">
                                            <a
                                                className="stext-115 dis-block trans-04 pr-4 pl-4 pt-8 pb-8 hov-1"
                                                href=""
                                            >
                                                Mattrass
                                            </a>
                                        </li>
                                        <li className="bor18">
                                            <a
                                                className="stext-115 dis-block trans-04 pr-4 pl-4 pt-8 pb-8 hov-1"
                                                href=""
                                            >
                                                Outdor
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!--  --> */}
                                <div className="pt-65">
                                    <h3 className="m-0 mtext-112 pb-33">Featured Products</h3>
                                    <ul className="p-0">
                                        <li className="flex pb-30">
                                            <a
                                                className="pos-relative w-90 mr-20 hov-ovelay1"
                                                href=""
                                            >
                                                <img
                                                    src="../src/assets/category-1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className="pt-8">
                                                <a
                                                    className="stext-116 trans-04 hov-1 dis-block pb-20"
                                                    href=""
                                                >
                                                    Bed for couple
                                                </a>
                                                <span className="stext-115">$19.00</span>
                                            </div>
                                        </li>
                                        <li className="flex pb-30">
                                            <a
                                                className="pos-relative w-90 mr-20 hov-ovelay1"
                                                href=""
                                            >
                                                <img
                                                    src="../src/assets/category-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className="pt-8">
                                                <a
                                                    className="stext-116 trans-04 hov-1 dis-block pb-20"
                                                    href=""
                                                >
                                                    Basic bed exclusively for hotels
                                                </a>
                                                <span className="stext-115">$39.00</span>
                                            </div>
                                        </li>
                                        <li className="flex pb-30">
                                            <a
                                                className="pos-relative w-90 mr-20 hov-ovelay1"
                                                href=""
                                            >
                                                <img
                                                    src="../src/assets/category-3.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <div className="pt-8">
                                                <a
                                                    className="stext-116 trans-04 hov-1 dis-block pb-20"
                                                    href=""
                                                >
                                                    Table and chairs for living room
                                                </a>
                                                <span className="stext-115">$17.00</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!--  --> */}
                                <div className="pt-55">
                                    <h3 className="m-0 mtext-112 pb-20">Archive</h3>
                                    <ul className="p-0">
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>July 2018</span>
                                                <span>(9)</span>
                                            </a>
                                        </li>
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>June 2018</span>
                                                <span>(39)</span>
                                            </a>
                                        </li>
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>May 2018</span>
                                                <span>(29)</span>
                                            </a>
                                        </li>
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>April 2018</span>
                                                <span>(35)</span>
                                            </a>
                                        </li>
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>March 2018</span>
                                                <span>(22)</span>
                                            </a>
                                        </li>
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>February 2018</span>
                                                <span>(32)</span>
                                            </a>
                                        </li>
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>January 2018</span>
                                                <span>(21)</span>
                                            </a>
                                        </li>
                                        <li className="pb-7">
                                            <a
                                                className="stext-115 flex-sp-m trans-04 pt-2 pb-2 hov-1"
                                                href=""
                                            >
                                                <span>December 2017</span>
                                                <span>(26)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!--  --> */}
                                <div className="pt-50">
                                    <h3 className="m-0 mtext-112 pb-27">Tags</h3>
                                    <div className="flex flex-w mr-5">
                                        <a
                                            className="bor7 m-h-30 stext-107 flex-c-m trans-04 mr-5 mb-5 pr-15 pl-15 hov-tag1"
                                            href=""
                                        >
                                            Sofa
                                        </a>
                                        <a
                                            className="bor7 m-h-30 stext-107 flex-c-m trans-04 mr-5 mb-5 pr-15 pl-15 hov-tag1"
                                            href=""
                                        >
                                            LivingRoom
                                        </a>
                                        <a
                                            className="bor7 m-h-30 stext-107 flex-c-m trans-04 mr-5 mb-5 pr-15 pl-15 hov-tag1"
                                            href=""
                                        >
                                            Outdor
                                        </a>
                                        <a
                                            className="bor7 m-h-30 stext-107 flex-c-m trans-04 mr-5 mb-5 pr-15 pl-15 hov-tag1"
                                            href=""
                                        >
                                            Badrom
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--  --> */}
                    </div>
                </section>
                {/* <!--  --> */}
            </div>
        </div>
    )
}

export default BlogPage