import '../../assets/notebooks';
import { notebooks } from '../../assets/notebooks';
import { Button } from '../Button/Button';
import './Notebooks.scss';

export const Notebooks = () => {
  return (
    <div className="notebooks">
      <div className="container">
        <div className="notebooks__cards">
          {notebooks.map(n => (
            <div className="notebooks__card" key={n.id}>
              <div className="notebooks__card--top">
                <img src={n.img} alt={n.name} className="notebooks__card--img" />
              </div>
              <h3 className="notebooks__card--title">{n.name} - <b>{n.price}грн</b></h3>
              <div className="notebooks__card--bottom">
                <span className="notebooks__card--bottom-item">Дисплей:<b>{n.display}</b></span>
                <span className="notebooks__card--bottom-item">Процессор:<b>{n.processor}</b></span>
                <span className="notebooks__card--bottom-item">Відеокарта:<b>{n.video}</b></span>
                <span className="notebooks__card--bottom-item">SSD:<b>{n.ssd}</b></span>
                <span className="notebooks__card--bottom-item">RAM:<b>{n.ram}</b></span>
              </div>
              <Button />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}