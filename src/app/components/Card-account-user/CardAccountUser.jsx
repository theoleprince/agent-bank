import './CardAccountUser.css';

function CardAccountUser({account}) {
    return  <section >
    <div className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{account.title}</h3>
      <p className="account-amount">{account.amount}</p>
      <p className="account-amount-description">{account.description}</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
    </div>
  </section>
}

export default CardAccountUser