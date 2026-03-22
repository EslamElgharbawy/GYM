export default function TestimonialsCard({ content, name, company }) {
  return (
    <>
      <div>
        <div className="item text-start">
          <div className="testimonial-inner">
            <div className="testimonial_content px-4 py-3">
              <p>{content}</p>
            </div>

            <div className="testimonial-caption ps-4 mt-4">
              <div className="testimonial-author">{name}</div>
              <div className="testimonial-position">{company}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
