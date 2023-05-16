import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, phone };

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata)
    }).then((res) => {
      alert('Register Successfully.....')
      navigate('/');
    }).catch((err) => {
      console.log(err.message)
    })
  }
  return (
    <div className="Group3">
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{
              "margin-left": "20%",
              "margin-top": "15%", "width": "60%", "padding": "6%", "background-color": "rgba(238, 141, 141,.5)"
            }}>
              <div className="card-title" style={{ "text-align": "center" }}>
                <h2>Login Page</h2>
              </div>
              <div className="card-body">
                <div style={{ "width": "100%" }}>
                  <div className="form-group">
                    <label>Name</label>
                    <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                    {name.length == 0 && validation && <span className="text-danger">Enter the valid name</span>}
                  </div>
                </div>
                <br />
                <div style={{ "width": "100%" }}>
                  <div className="form-group">
                    <label>Email Id</label>
                    <input required value={email} onChange={e => emailchange(e.target.value)} type="email" className="form-control"></input>
                    {email.length == 0 && validation &&
                      <span className="text-danger">Email Not Valid</span>}
                  </div>
                </div>
                <br />
                <div style={{ "width": "100%" }}>
                  <div className="form-group">
                    <label>Phone</label>
                    <input required value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                    {phone.length == 0 && validation &&
                      <span className="text-danger">Phone number Not Valid</span>}<br />
                  </div>
                </div>

                <br />
                <div className="col-lg-12">
                  <div className="form-group">
                    <button className="btn btn-success" type="submit">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login;
