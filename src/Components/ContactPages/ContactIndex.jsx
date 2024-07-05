import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import RemoveAllContacts from "./RemoveAllContacts";
import AddContact from "./AddContact";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Paul Parker",
          phone: "555-888-7770",
          email: "elvis@yahoo.com",
          isFavorite: false,
        },

        {
          id: 2,
          name: "Mark Ahker",
          phone: "222-888-7770",
          email: "nevis@yahoo.com",
          isFavorite: true,
        },

        {
          id: 3,
          name: "John Munchen",
          phone: "333-888-7770",
          email: "lewis@yahoo.com",
          isFavorite: true,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContacts />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavoriteContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite == true
                )}
              />
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (u) => u.isFavorite == false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
