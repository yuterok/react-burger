
import styles from './order-details.module.css';
import doneImg from '../../../images/done.png'

const OrderDetails = () => {
    return(
        <div className={styles.container}>
        <p className={`${styles.number} text text_type_digits-large`}>034536</p>
        <p className="text text_type_main-medium">
        идентификатор заказа
</p>
        <img src={doneImg} alt="" />
        <p className="text text_type_main-small">Ваш заказ начали готовить</p>
        <p className={`${styles.status} text text_type_main-small`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export default OrderDetails;