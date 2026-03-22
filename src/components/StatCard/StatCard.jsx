import React from "react";

export default function StatCard({ icon, number, title, id }) {
  return (
    <div className="z-2 text-white text-center">
      <div className="px-3">
        <div className="stats_card">
          <div className="counter-icon mb-4">{icon}</div>

          <div className="counter-value" id={id}>
            <div className="counter-number">{number}</div>
          </div>

          <div className="counter-title fs-5">{title}</div>
        </div>
      </div>
    </div>
  );
}
