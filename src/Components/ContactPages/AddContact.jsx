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
    this.props.handleAddContact();
  };
  render() {
    return (
      <div cassName="border row text-white p-2">
        <form onSubmit={this.handleAddContractFormSubmit}>
          <div className="row p-2">
            <div className="col-2  text-white-50">Add a new Contact</div>
            <div className="col-12 p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
              ></input>
            </div>
            <div className="col-12  p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
              ></input>
            </div>

            <div className="col-12  p-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
              ></input>
            </div>
            <div className="col-12  p-1">
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
