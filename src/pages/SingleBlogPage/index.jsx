import React from 'react'
import { useState } from 'react'

const BlogPage = (props) => {
    const [img,setImg] = useState('');
    const [title,setTitle] = useState('');
    const [desc,setDisc] = useState('');
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Title of the Blog</h1>
        <img src="https://via.placeholder.com/800x400" alt="Blog Header" className="mb-8 rounded-lg" />
        <p className="text-gray-600 mb-4">Published on April 16, 2024</p>
        <div className="prose">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat felis quis diam ultrices, sit amet accumsan odio aliquam. Integer euismod nisl nec est gravida, in dictum nunc lobortis. Vivamus tempor nisi id felis tempus, vitae venenatis nisi ullamcorper. Nullam pharetra tellus nec eros ullamcorper, id malesuada dolor luctus. Proin hendrerit, est nec sollicitudin sagittis, lacus enim condimentum odio, vel cursus odio nisi vel mi. Morbi id malesuada est. Vivamus in nisl nec justo elementum congue.</p>
          <p>Etiam non lacinia lacus. Aliquam erat volutpat. Maecenas sollicitudin fermentum efficitur. Sed varius odio nec magna sollicitudin, nec ultrices neque auctor. Ut varius sapien nec velit sodales dictum. Duis id augue quis ligula cursus posuere nec vel nisi. Phasellus sodales quam justo, auctor sollicitudin ex tristique nec. Morbi eget posuere libero.</p>
          <p>Integer quis sapien quis enim congue dapibus. Pellentesque nec ullamcorper odio. Nam volutpat fermentum lacus, in finibus quam sodales nec. Sed gravida mauris velit, ac aliquam ipsum sollicitudin eget. Proin non ultrices nisl, et viverra nisi. Nullam auctor pharetra libero, nec feugiat est mattis non.</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
