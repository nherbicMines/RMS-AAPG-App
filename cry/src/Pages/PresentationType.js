import {Link } from "react-router-dom";
import React from 'react'

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

            <Link to="/Schedule"><button class = "button">
              Schedule
            </button>
            </Link>

          </div>
  )
}

export default PresentationType