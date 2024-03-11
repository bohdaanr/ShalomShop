import './Tablets.scss';
import {tablets} from '../../assets/tablets';
import { Button } from '../Button/Button';

export const Tablets = () => {
  return (
    <div className="tablets">
      <div className="container">
        <div className="tablets__cards">
          {tablets.map(t => (
            <div className="tablets__card" key={t.id}>
              <div className="tablets__card--top">
                <img src={t.img} alt={t.name} className="tablets__card--img" />
              </div>
              <h3 className="tablets__card--title">{t.name} - <b>{t.price}грн</b></h3>
              <div className="tablets__card--bottom">
                <span className="tablets__card--bottom-item">OS:<b>{t.os}</b></span>
                <span className="tablets__card--bottom-item">Процессор:<b>{t.processor}</b></span>
                <span className="tablets__card--bottom-item">Батарея:<b>{t.battery}</b></span>
                <span className="tablets__card--bottom-item">Память:<b>{t.memory}</b></span>
                <span className="tablets__card--bottom-item">RAM:<b>{t.ram}</b></span>
                
              </div>
              <Button />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}