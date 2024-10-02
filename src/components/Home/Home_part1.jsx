import React from 'react'
import './Home_part1.css'

const Home_part1 = () => {
  return (
    <>
        <div className='wrapper_Home'>
        <div className='container_Home'>
            <input type="radio" name='slide' id='c1' checked />
            <label htmlFor="c1" className='card_Home'>
                <div className='row_Home'>
                    <div className='icon'>1</div>
                    <div className='description'>
                    <h4>Solar</h4>
                    <p>Winter has so much to offer</p>
                    </div>
                </div>
            </label>
            <input type="radio" name='slide' id='c2' />
            <label htmlFor="c2" className='card_Home'>
                <div className='row_Home'>
                    <div className='icon'>2</div>
                    <div className='description'>
                    <h4>Solar</h4>
                    <p>Winter has so much to offer</p>
                    </div>
                </div>
            </label>
            <input type="radio" name='slide' id='c3'  />
            <label htmlFor="c3" className='card_Home'>
                <div className='row_Home'>
                    <div className='icon'>3</div>
                    <div className='description'>
                    <h4>Solar</h4>
                    <p>Winter has so much to offer</p>
                    </div>
                </div>
            </label>
            <input type="radio" name='slide' id='c4'  />
            <label htmlFor="c4" className='card_Home'>
                <div className='row_Home'>
                    <div className='icon'>4</div>
                    <div className='description'>
                    <h4>Solar</h4>
                    <p>Winter has so much to offer</p>
                    </div>
                </div>
            </label>
            <input type="radio" name='slide' id='c5'  />
            <label htmlFor="c5" className='card_Home'>
                <div className='row_Home'>
                    <div className='icon'>5</div>
                    <div className='description'>
                    <h4>Solar</h4>
                    <p>Winter has so much to offer</p>
                    </div>
                </div>
            </label>

        </div>

    </div>
    </>
  )
}

export default Home_part1