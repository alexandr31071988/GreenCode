import React from 'react'
import Img from '../../assets/img/Rectangle1.png'
import LikeImg from '../../assets/img/Union.png'

const Item = () => {

  return (
    <div className="good-group__item">
      <img src={Img}/>
      <div>
        <h2>Крупа овсяная</h2>
        <img src={LikeImg}/>
      </div>
      <div>
        Родина овса — Монголия и северо-восточные провинции Китая. Его начали обрабатывать позднее, чем пшеницу и
        ячмень — во втором тысячелетии до нашей эры. Он засорял посевы полбы, однако земледельцы не пытались с ним
        бороться, поскольку уже тогда были известны его замечательные кормовые свойства. При продвижении посевов на
        север овёс вытеснил более теплолюбивую полбу.
      </div>
    </div>
  )
}

export default Item