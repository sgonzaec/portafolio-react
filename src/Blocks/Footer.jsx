import generalData from "../shared_data.json";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white">
        <div className="social-links">
          {generalData.basic_info.social.map((network) => {
            return (
              <span key={network.name} className="m-4">
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                  <i className={network.class}></i>
                </a>
              </span>
            );
          })}
        </div>

        <div className="copyright py-4 text-center">
          <small>
            Copyright &copy; {generalData.basic_info.name}{" "}
            <span className="font-mono">{"<CodeMasters>"}</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
