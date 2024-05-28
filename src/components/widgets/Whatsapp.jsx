import "/src/components/widgets/style.css";
import useClassToggle from "/src/utils/useClassToggle";

export default function Whatsapp() {
  const { classState, toggleClass } = useClassToggle(true);

  return (
    <>
      <div className="wa-widget">
        <button title="toggle" onClick={toggleClass} className="wa-float-btn">
          <i className="fa fa-whatsapp wa-my-float"/>
          <span className="wa-floating-btn-status"/>
        </button>
        <div
          className={` ${
            classState ? "wp-hide-chatbox " : ""
          } wa-chatbox wa-fade-in`}
          id="wa-chatbox"
        >
          <div className="wa-chat-header">
            <div className="wa-avatar">
              <div className="wa-avatar-img"></div>
            </div>
            <div className="wa-header-text">
              <h3 className="wa-header-company">Muva Technologies</h3>
              <p className="wa-header-status">Online</p>
            </div>
            <button className="wa-close-chatbox" onClick={toggleClass}>
              <i className="fa fa-times "/>
            </button>
          </div>

          <div className="wa-chat-body h-full pb-10">
            <div className="wa-chat-text">
              <p className="wa-chat-text-para">Hi there 👋,</p>
              <p className="wa-chat-text-para">How can we help you ?</p>
              <p className="wa-text-timestamp">
                {new Date().getHours(new Date().getTime())}{" "}
                {new Date().getMinutes(new Date().getTime())}
              </p>
            </div>
            <a
              href="https://wa.link/mvx6u0"
              target="blank"
              className="wa-chat-in-whatsapp"
            >
              <i className="fa fa-whatsapp"/>
              <span className="wa-btn-txt">Click to start a chat</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
