import React from "react"

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
  <div>
    <a href={`${props.to}`}>
      <i className={`fa fa-${props.icon}`}></i> {props.title}
    </a>
  </div>
    