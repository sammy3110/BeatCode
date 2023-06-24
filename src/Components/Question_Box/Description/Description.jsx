import './Description.css'
import React from 'react'

function Description({description}) {
  return (
    <div ref={description} className='description-container'>
        <h2>289. Game Of Life</h2>
        <div className="description-tab">
            <div>
                <h4>Medium</h4>
            </div>
            <div>
                <i class="fa-solid fa-thumbs-up"></i> <span className='like' >3941</span>
            </div>
            <div>
                <i class="fa-regular fa-thumbs-down"></i> <span className='dislike' >248</span>
            </div>
            <div>
                <i class="fa-solid fa-heart"></i> <span className='fav'>Add to List</span>
            </div>
            <div>
                <i class="fa-solid fa-share"></i> <span className='share'>Share</span>
            </div>
        </div>

        <div className="content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident nulla.Eius, cum itaque assumenda sint mollitia laborum illum, veritatis evenietdoloremque autem pariatur repellendus, earum excepturi ad. Magnam, excepturi.
            </p>
            <ol>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, itaque!</li>
            </ol>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident nulla.Eius, cum itaque assumenda sint mollitia laborum illum, veritatis evenietdoloremque autem pariatur repellendus, earum excepturi ad. Magnam, excepturi.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident nulla.Eius, cum itaque assumenda sint mollitia laborum illum, veritatis evenietdoloremque autem pariatur repellendus, earum excepturi ad. Magnam, excepturi.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi obcaecati quasi nobis rerum consectetur voluptatum libero natus ipsam, recusandae dignissimos fugiat officia similique. Inventore perferendis eius cum dolorum eum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident nulla.Eius, cum itaque assumenda sint mollitia laborum illum, veritatis evenietdoloremque autem pariatur repellendus, earum excepturi ad. Magnam, excepturi.
            </p>
        </div>

    </div>
  )
}

export default Description