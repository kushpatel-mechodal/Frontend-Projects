import product_1 from "../assets/product_1.png";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* sidebar heading */}
      <h3 className="sidebar_title">Filter By</h3>

      {/* sidebar card section  */}
      <div className="sidebar_card">
        <label className="sidebar_checkbox">
          <input type="checkbox" defaultChecked />
          <span>Bestseller</span>
        </label>
      </div>

      <div className="sidebar_card">
        <div className="sidebar_card_header">
          <h4>By Brand</h4>
          <button
            type="button"
            className="sidebar_toggle"
            aria-label="sidebar brand filter"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <input
          type="search"
          className="sidebar_search"
          aria-label="sidebar search"
          placeholder="Search brand"
        />

        <div className="sidebar_options">
          <label className="sidebar_checkbox">
            <input type="checkbox" defaultChecked />
            <span>Muscletech</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>My Protein</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>PhD</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>Muscleblaze</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>Alpino</span>
          </label>
        </div>
      </div>

      <div className="sidebar_card">
        <div className="sidebar_card_header">
          <h4>Discount</h4>
          <button
            type="button"
            className="sidebar_toggle"
            aria-label="sidebar brand filter"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className="sidebar_options">
          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>20% and above</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>40% and above</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>40% and above</span>
          </label>
        </div>
      </div>

      <div className="sidebar_card">
        <div className="sidebar_card_header">
          <h4>Ratings</h4>
          <button
            type="button"
            className="sidebar_toggle"
            aria-label="sidebar brand filter"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className="sidebar_options">
          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>4 Ratings & above</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>3 Ratings & above</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>2 Ratings & above</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>1 Ratings & above</span>
          </label>
        </div>
      </div>

      <div className="sidebar_card">
        <div className="sidebar_card_header">
          <h4>Price</h4>
          <button
            type="button"
            className="sidebar_toggle"
            aria-label="sidebar brand filter"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className="sidebar_options">
          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>200 & above</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>201 - 600</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>601 - 1,000</span>
          </label>

          <label className="sidebar_checkbox">
            <input type="checkbox" />
            <span>1,001 - 1,500</span>
          </label>
        </div>
      </div>

      <div className="sidebar_card">
        <label className="sidebar_checkbox">
          <input type="checkbox" defaultChecked />
          <span>Exclude out of stoock</span>
        </label>
      </div>

      <div className="sidebar_card">
        <div className="sidebar_card_header">
          <h4>Related Products</h4>
          <button
            type="button"
            className="sidebar_toggle"
            aria-label="sidebar brand filter"
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div className="related_products">
          <div className="related_product">
            <img src={product_1} alt="MuscleTech NitroTech" />

            <div className="related_product_info">
              <p>MuscleTech NitroTech 100% Whey Gold Performance Series</p>

              <div className="related_product_price">
                <del>₹3,999.00</del>
                <strong>₹3,449.00</strong>
              </div>
            </div>
          </div>

          {/* Second product */}
          <div className="related_product">
            <img src={product_1} alt="MuscleTech NitroTech" />

            <div className="related_product_info">
              <p>MuscleTech NitroTech 100% Whey Gold Performance Series</p>

              <div className="related_product_price">
                <del>₹3,999.00</del>
                <strong>₹3,449.00</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
