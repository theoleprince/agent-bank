import CardAccountUser from "../components/Card-account-user/CardAccountUser";
import Footer from "../components/Footer/Footer";
import "./User.css";

function User() {
  const data = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];
  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {data.map((item) => (
          <CardAccountUser key={item.id} account={item} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default User;