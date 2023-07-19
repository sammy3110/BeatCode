import './Description.css'

function Description({description, question}) {
    
  return (
    <div ref={description} className='description-container'>
        <h2>{question.id}. {question.title}</h2>
        <div className="description-tab">
            <div>
                <h4>{question.metadata.difficulty}</h4>
            </div>
            <div>
                <i className="fa-solid fa-thumbs-up"></i> <span className='like' >{question.metadata.likes}</span>
            </div>
            <div>
                <i className="fa-regular fa-thumbs-down"></i> <span className='dislike' >{question.metadata.dislikes}</span>
            </div>
            <div>
                <i className="fa-solid fa-heart"></i> <span className='fav'>Add to List</span>
            </div>
            <div>
                <i className="fa-solid fa-share"></i> <span className='share'>Share</span>
            </div>
        </div>

        <div className="content">
            {Object.keys(question.question).map((q_id) => {
                return <p key={q_id} >{question.question[q_id]}</p>
            })}
        </div>

    </div>
  )
}

export default Description