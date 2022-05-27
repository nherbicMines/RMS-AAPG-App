
import React from "react";

export default function Comments() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <textarea
          type="text"
          rows={5}
          columns={3}
          className="full_height_Width"
          onChange={e => setCount(e.target.value.length)}
        />
        <p>{count}</p>
      </div>
    );
  }