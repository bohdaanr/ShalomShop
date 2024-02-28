import './Watches.scss';
import {watches} from '../../assets/watches';

export const Watches = () => {
  return (
    <div className="watches">
      <div className="container">
        <div className="watches__inner">
          <div className="watches__bottom">
            <div className="watches__cards">
              {watches.map(m => (
                <div className="watches__card" key={m.id}>
                  <div className="watches__card--top">
                    <img src={m.img} alt={m.name} className="watches__card--img" />
                  </div>
                  <h3 className="watches__card--title">{m.name} - <b>{m.price}грн</b></h3>
                  <div className="watches__card--bottom">
                    <span className="watches__card--bottom-item">Дисплей:{m.display}</span>
                    <span className="watches__card--bottom-item">Росширення:{m.resolution}</span>
                    <span className="watches__card--bottom-item">Ємність батареї:{m.battery} А.г</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}