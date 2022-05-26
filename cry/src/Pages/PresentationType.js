import {Link } from "react-router-dom";
import React from 'react'
import pdf from "../pdf/Academic-Calendar-2022-23.pdf";

function PresentationType() {
  return (
    <div>
            <p>
              Click on a button below.
            </p>

            <Link to="/OralPresentations"><button class="button">
              Oral Presentations
            </button>
            </Link>

            <br></br>

            <Link to="/PosterPresentations"><button class = "button">
              Poster Presentations
            </button>
            </Link>

            <br></br>

            <div>
            <a href={pdf} target = "_blank">
              <button class="button"> Schedule </button>
            </a>
            </div>

          </div>
  )
}

export default PresentationType