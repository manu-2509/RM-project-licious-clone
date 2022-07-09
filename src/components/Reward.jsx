import "../styles.css"
export const Reward=()=>{
    return (
        <div className="reward-main">
            <div className="reward-div">
                <img className="reward-img" src="https://www.licious.in/img/rebranding/rewards/rewards_icon.svg" alt="" />
                <div className="reward-left">
                    <h4>My Rewards</h4>
                    <p>Place an order and win your next reward!</p>
                </div>
            </div>
            <div>
                <button className="rewar-btn">Click to view {">"}</button>
            </div>
        </div>
    )
}