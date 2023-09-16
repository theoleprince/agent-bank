import { useDispatch } from "react-redux";
import "./modal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../_services/user_service";
import TokenService from "../../_services/token_service";
import { updateUser } from "../../../stores/actions/authActions";

function Modal({ modalIsOpen, setModalIsOpen }) {
  const user = TokenService.getUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [errors, setErrors] = useState({ firstName: "", lastName: "" });

  const validateInput = (field, value) => {
    let newErrors = { ...errors };
    if (value.length < 2) {
      newErrors[field] = "Ce champ doit comporter au moins 2 caractères.";
    } else {
      newErrors[field] = "";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.putUserProfile(TokenService.getToken(), {
      firstName: firstName,
      lastName: lastName,
    })
      .then((data) => {
        console.log(data);
        //   TokenService.saveToken(data.body.token)
        UserService.getUserProfile(TokenService.getToken()).then((res) => {
          console.log(res);
          TokenService.saveUser(res.body)
          dispatch(updateUser({ firstName, lastName, user: res.body }));
          navigate("/user");
          setModalIsOpen(false);
        });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div
      id="myModal"
      className="modal"
      style={{ display: modalIsOpen ? "block" : "none" }}
      onClick={(e) => {
        if (e.target.className === "modal") setModalIsOpen(false);
      }}
    >
      <div className="modal-content">
        <span className="close" onClick={() => setModalIsOpen(false)}>
          &times;
        </span>
        <h2>Edit Name</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                validateInput("firstName", e.target.value);
              }}
              required
            />
            <small className="error-message">{errors.firstName}</small>
          </div>
          <div className="input-wrapper">
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                validateInput("lastName", e.target.value);
              }}
              required
            />
            <small className="error-message">{errors.lastName}</small>
          </div>
          <button className="sign-in-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
