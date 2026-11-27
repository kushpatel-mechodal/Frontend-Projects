import logo from "../assets/logo.svg";
import location from "../assets/location.svg";
import search from "../assets/search.svg";
import wishlist from "../assets/love.svg";
import notification from "../assets/notification.svg";
import shopping from "../assets/shopping.svg";
import profile from "../assets/profile.svg";
import brand from "../assets/brand.svg";
import offer from "../assets/offer.svg";
import blog from "../assets/blog.svg";
import support from "../assets/support.svg";
import shop from "../assets/shop.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header_container">
          {/* header left */}
          <div className="header_left">
            <a href="/" className="header_logo">
              <img src={logo} alt="Bignlean" />
            </a>

            <div className="header_delivery">
              <img src={location} alt="location image" />
              <span>
                Deliver to - <strong>THANE 400601</strong>
              </span>
            </div>
          </div>

          {/* product search */}
          <form className="header_search">
            <button type="button" aria-label="search">
              <img src={search} alt="" />
            </button>

            <input
              type="search"
              placeholder="Search for Products"
              aria-label="Search for Products"
            />
          </form>

          {/* header right */}
          <div className="header_right">
            <div className="header_actions">
              <button
                type="button"
                className="header_action"
                aria-label="Whishlist"
              >
                <img src={wishlist} alt="wishlist" />
              </button>

              <button
                type="button"
                className="header_action"
                aria-label="Whishlist"
              >
                <img src={notification} alt="notification" />
              </button>

              <button
                type="button"
                className="header_action"
                aria-label="Whishlist"
              >
                <img src={shopping} alt="shopping" />
              </button>
            </div>

            <div class="header_profile">
              <img
                src={profile}
                alt="User Profile"
                class="header_profile-image"
              />

              <span class="header_profile-name">Pravin D.</span>
            </div>
          </div>
        </div>
      </header>

      {/* category nevigation */}

      
        <div className="category_nav">
          <nav className="category_name_inner">
            <div className="category_nav_item">
              <button type="button" class="category_nav_item active">
                <img src={shop} alt="shop by category" />
                <span>Shop By Category</span>
              </button>

              <a href="#" className="category_nav_item">
                <img src={brand} alt="brand" />
                <span>Brands</span>
              </a>

              <a href="#" className="category_nav_item">
                <img src={offer} alt="offer" />
                <span>Offer</span>
              </a>

              <a href="#" className="category_nav_item">
                <img src={blog} alt="blog" />
                <span>Blog</span>
              </a>

              <a href="#" className="category_nav_item">
                <img src={support} alt="support" />
                <span>Customer Support</span>
              </a>
            </div>
          </nav>
        </div>
    </>
  );
};

export default Header;
