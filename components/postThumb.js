import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Date from "../components/date";

export default function PostThumb({
  title,
  link,
  date,
  id,
  description,
  image,
}) {
  return (
    <Link href={link} className="feed-item">
      <li key={id}>
        <div className="feed-item-thumb">
          <img src={image} />
          <div className="feed-item-thumb-indicator">→</div>
        </div>
        <div className="feed-item-body">
          <h2>
            <span>{title}</span>
          </h2>
          <p>{description}</p>
        </div>
      </li>
    </Link>
  );
}
