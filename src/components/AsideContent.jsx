import germany from "../assets/images/Germany.jpg";
import italy from "../assets/images/Italy.jpg";
import canada from "../assets/images/Canada.jpg";
import countries from "../assets/images/Countries.jpg";

const AsideContent = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-widget">
        <h2 className="widget-title">
          Delivery for <strong> FREE </strong>
        </h2>
        <img src={countries} alt="" className="widget-image" />
        <p className="widget-body">
          Place an order for $99 or more, and we'll ship it to the following
          countries for free:
        </p>
      </div>

      <div className="sidebar-widget">
        <h2 className="widget-title">Shipping available To:</h2>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Canada</h3>
          <img src={canada} alt="" className="widget-image" />
        </div>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Germany</h3>
          <img src={germany} alt="" className="widget-image" />
        </div>
        <div className="widget-recent-post">
          <h3 className="widget-recent-post-title">Italy</h3>
          <img src={italy} alt="" className="widget-image" />
        </div>
      </div>
    </aside>
  );
};

export default AsideContent;
