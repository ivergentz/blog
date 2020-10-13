import React from 'react'
import trending from '../assets/mocks/trending'
import { PostMasonry } from '../components/common'

const trendigConfig = {
  1: {
    gridArea: '1 / 2 / 3 / 3',
  },
}

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index]
  })
}

mergeStyles(trending, trendigConfig)

export default function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h2>Trending Posts</h2>
        <PostMasonry posts={trending} columns={3} />
      </div>
    </section>
  )
}
