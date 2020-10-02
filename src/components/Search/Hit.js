import React from "react"

import PostItem from "components/PostItem"

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    background={hit.background}
    timeToRead={hit.timeToRead}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
  />
)

export default Hit
