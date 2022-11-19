import React, { useState, useEffect } from "react";
import Link from "next/link";
import Date from "../components/date";

export default function PostThumb({ title, link, date, id }) {
  return (
    <li key={id}>
      <Link href={link}>{title}</Link>
      <br />
      <small>
        <Date dateString={date} />
      </small>
    </li>
  );
}
