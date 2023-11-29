import React, { useState } from "react";
import { Confess_backend } from "../../declarations/Confess_backend";
import { useNavigate, Link } from "react-router-dom";

function AddConfession() {
  // const navigate = useNavigate();
  const nav = useNavigate();
  const [loader, setLoader] = useState(false);

  const [confessionText, setConfessionText] = useState("");

  const handleSubmit = async () => {
    try {
      await Confess_backend.addConfession(confessionText);
      // window.location.reload();
      // nav("/");
    } catch (error) {
      console.error("Error submitting confession:", error);
    }
  };

  function navigatetoConfessionPage() {
    navigate("/ConfessionGallery");
  }

  return (
    <div className="wrapper">
      {/* <h1 className="Heading"> Your Safe Haven for Unspoken Words</h1> */}

      <div className="AddConfessionBox">
        <div>
          <h1 className="headingx1">Write your confession:</h1>
        </div>
        <div>
          <p>
            Don't use any profanity or hate speech. Such posts won't be
            approved. You can include references to the person you want to
            confess to.
          </p>
        </div>
        <div>
          <textarea
            className="textarea"
            type="textarea"
            placeholder="Hey xyz, I want to confess... With love"
            value={confessionText}
            onChange={(e) => setConfessionText(e.target.value)}
          />
        </div>
        <div className="addconfessbtn">
          <button
            className="AddBtn1 boxs1"
            onClick={handleSubmit}
            onChange={navigatetoConfessionPage}
          >
            Submit Whisper
          </button>

          <Link to="/">
            <button className="AddBtn1  boxs2">Go Back</button>
          </Link>

          <Link to="/ConfessionGallery">
            <button className="AddBtn1 boxs3 boxs2">Confession Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { AddConfession };
