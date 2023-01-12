import classes from './Meal.module.css'
// 单独的食物组件
const Meal = () => {
    return (
        <div className={classes.Meal}>

                <img src='/img/1.png' alt=''  className={classes.pic}></img>

            <div className={classes.desc}>
                <div>
                    <h6 className={classes.title}>汉堡包</h6>
                    <span className={classes.desc1}>好吃美味经典滋味</span>
                </div>
                <div className={classes.cost}>
                    <span>￥12</span>
                    <div>数量</div>
                </div>
            </div>
        </div>
    )
}


export default Meal