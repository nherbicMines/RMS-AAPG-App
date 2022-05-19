import {Link } from "react-router-dom";
import React from 'react'

function PresentationType() {
  return (
    <div>
            <p>
              Click on a button below.
            </p>

            <Link to="/OralPresentations"><button>
              Oral Presentations
            </button>
            </Link>

            <br></br>

            <Link to="/PosterPresentations"><button>
              Poster Presentations
            </button>
            </Link>

            <br></br>

            <Link to="/Schedule"><button>
              Schedule
            </button>
            </Link>

          </div>
  )
}

export default PresentationType