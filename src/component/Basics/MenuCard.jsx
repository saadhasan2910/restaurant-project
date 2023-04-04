import React from 'react'

const MenuCard = ({ menuProp }) => {
    return (
        <>
            <section className='main-card--cointainer'>
                {menuProp.map((curElem) => {
                    return (<>
                        <div className="card-container" key={curElem.id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{curElem.id}</span>
                                    <span className="card-author subtle">{curElem.category}</span>
                                    <h2 className="card-title">{curElem.name}</h2>
                                    <span className="card-description subtle">
                                    {curElem.description}
                                    </span>
                                    <div className="card-read subtle">Read</div>
                                    <img src={curElem.image} alt="images" className="card-media" />
                                    <span className="card-tag subtle">Order Now</span>

                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </section>
        </>
    )
}

export default MenuCard