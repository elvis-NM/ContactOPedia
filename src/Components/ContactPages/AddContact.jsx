import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errormessage: undefined,
      successMessage: undefined,
    };
  }
  handleAddContractFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim(); //fetch contact from user input
    const email = e.target.elements.contactEmail.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const response = this.props.handleAddContact({
      name: name,
      email: email,
      phone: phone,
    });

    if (response.status == "success") {
      this.setState({ errorMessage: undefined, successMessage: response.msg });
      document.querySelector(".contact-form").requestFullscreen();
    } else {
      this.setState({ errorMessage: response.msg, successMessage: undefined });
    }
  };

  render() {
    return (
      <div cassName="border row text-white p-2">
        <form
          onSubmit={this.handleAddContractFormSubmit}
          className="contact-form"
        >
          <div className="row p-2">
            <div className="col-2  text-white-50">Add a new Contact</div>
            <div className="col-12 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
              ></input>
            </div>
            <div className="col-12  p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
              ></input>
            </div>

            <div className="col-12  p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
              ></input>
            </div>
            {this.state.errorMessage == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-danger">
                {this.state.errorMessage}
              </div>
            )}

            {this.state.successMessage == undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-center text-success">
                {this.state.successMessage}
              </div>
            )}

            <div className="col-12 p-1">
              <button className="btn btn-primary btn-sm form-control">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;
