import React from "react";

export default function QuestionsCard({ question ,title}) {
  return (
    <>
      <div className="col-sm-12 col-md-6 text-start">
        <div className="wpb_text_column wpb_content_element vc_custom_1493137761149">
          <div className="wpb_wrapper">
            <h4 className="Q_header">{title}</h4>
            <p className="lh-lg">
              {question}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
