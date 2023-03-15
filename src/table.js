import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Table = () => {
  const [tableedit, setEdit] = useState('');
  const [table, setTable] = useState([]);
  const [form, setForm] = useState({
    userName: "",
    email: "",
    number: "",
    contactName: "",
    contactEmail: "",
    contactPhoneNumber: "",
    type: "",
    percent: "",
    dateInput: "",
    payments: "",
    notesInput: "",

  });

  const handleClick = (event) => {
    event.preventDefault();

    let localStorageData = JSON.parse(localStorage.getItem("details"));
    if (localStorageData === null) localStorageData = [];
    localStorageData.push(form);
    localStorage.setItem("details", JSON.stringify(localStorageData));
    console.log(form)
    let loadTableData = [...localStorageData];
    setTable(loadTableData);

  };
  const edit = (data) => {
    console.log(data)
    setEdit(data.userName)
  }


  return (
    <>
      <Container>
        <form onSubmit={handleClick} id="newBusiness">
          <h2>
            <em>New Business </em>
          </h2>
          <Row>
            <Col>
              <div>
                <label>Name: </label>
                <input
                  type="text"
                  value={tableedit ? tableedit : form.userName}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      userName: e.target.value,
                    });
                  }}
                  id="userName"
                  name="userName"
                  placeholder="Enter Your Name"
                  required
                ></input>
              </div>
            </Col>
            <Col>
              <div>
                <label>Email: </label>
                <input
                  type="email"
                  value={tableedit ? tableedit : form.email}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      email: e.target.value,
                    });
                  }}
                  id="email"
                  placeholder="Enter Your Email"
                  required
                ></input>
              </div>
            </Col>
            <Col>
              <div>
                <label>Phone-Number: </label>
                <input
                  type="tel"
                  value={tableedit ? tableedit : form.number}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      number: e.target.value,
                    });
                  }}
                  id="phoneNumber"
                  minLength={5}
                  maxLength={10}
                  placeholder="Enter Your Number"
                  required
                ></input>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <label>Contact-Name: </label>
                <input
                  type="text"
                  value={tableedit ? tableedit : form.contactName}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      contactName: e.target.value,
                    });
                  }}
                  id="contactName"
                  placeholder="Enter Your Name"
                  required
                ></input>
              </div>
            </Col>
            <Col>
              <div>
                <label>Contact-Email: </label>
                <input
                  type="email"
                  value={tableedit ? tableedit : form.contactEmail}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      contactEmail: e.target.value,
                    });
                  }}
                  id="contactEmail"
                  placeholder="Enter Contact Email"
                  required
                ></input>
              </div>
            </Col>
            <Col>

              <div>
                <label>Contact-Number: </label>
                <input
                  type="tel"
                  value={tableedit ? tableedit : form.contactPhoneNumber}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      contactPhoneNumber: e.target.value,
                    });
                  }}
                  id="contactPhoneNumber"
                  minLength={5}
                  maxLength={10}
                  placeholder="Enter Contact Number"
                  required
                ></input>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <label id="typeOfBusiness">
                  Type: <br></br>
                  <input
                    type="radio"
                    value={tableedit ? tableedit : form.type}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      });
                    }}
                    id="smallBusiness"
                    name="Business"
                  // value="SmallBusiness"
                  />
                  <label for="smallBusiness">Small
                    Business</label>
                  <br></br>
                  <input
                    type="radio"
                    value={tableedit ? tableedit : form.type}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      });
                    }}
                    id="enterprise"
                    name="Business"
                  // value="Enterprise"
                  />
                  <label for="enterprise">Enterprise</label>
                  <br></br>
                  <input
                    type="radio"
                    value={tableedit ? tableedit : form.type}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      });
                    }}
                    id="entrepreneur"
                    name="Business"
                  // value="Entrepreneur"
                  />
                  <label for="entrepreneur">Entrepreneur</label>
                </label>
              </div>
            </Col>
            <Col>

              <div>
                <label for="catogory" class="catogoryy">
                  Catogory: <br></br>
                  <select id="catogory" multiple size="5">
                    <option name="catogory" value={tableedit ? tableedit : form.category} onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      })
                    }} >
                      Toys
                    </option>
                    <option name="catogory" value={tableedit ? tableedit : form.category} onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      })
                    }} >
                      Clothes
                    </option>
                    <option name="catogory" value={tableedit ? tableedit : form.category} onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      })
                    }} >
                      Groceries
                    </option>
                    <option name="catogory" value={tableedit ? tableedit : form.category} onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      })
                    }} >
                      Electronics
                    </option>
                    <option name="catogory" value={tableedit ? tableedit : form.category} onChange={(e) => {
                      setForm({
                        ...form,
                        type: e.target.value,
                      })
                    }} >
                      Digital
                    </option>
                  </select>
                </label>
              </div>
            </Col>
            <Col>
              <div>
                <label>
                  Percent
                  <input
                    value={tableedit ? tableedit : form.percent}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        percent: e.target.value,
                      });
                    }}
                    type="number"
                    id="percent"
                    min="0"
                    max="100"
                    size="3"
                  ></input>
                </label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <label>
                  Active-From
                  <input
                    value={tableedit ? tableedit : form.dateInput}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        dateInput: e.target.value,
                      });
                    }}
                    type="date"
                    id="activefrom"
                    required
                  ></input>
                </label>
              </div>
            </Col>
            <Col>
              <div>
                <label
                  value={tableedit ? tableedit : form.payments}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      payments: e.target.value,
                    });
                  }}
                  class="payments"
                >
                  Payment-Option: <br></br>
                  <input
                    type="checkbox"
                    name="payment"
                    value="Cash on delivery"
                    id="cashOnDelivery"
                    placeholder="cash on delivery"
                  />
                  <label for="cashOnDelivery">Cash on delivery</label>
                  <br></br>
                  <input
                    type="checkbox"
                    name="payment"
                    value="UPI"
                    id="UPI"
                    placeholder="payment"
                  />
                  <label for="UPI">UPI</label>
                  <br></br>
                  <input
                    type="checkbox"
                    name="payment"
                    value="card payment"
                    id="cardPayment"
                    placeholder="cardPayment"
                  />
                  <label for="cardPayment">Card Payment</label>
                </label>
              </div>
            </Col>
            <Col>
              <div>
                <label>
                  Notes: <br></br>
                  <textarea
                    id="textArea"
                    value={tableedit ? tableedit : form.notesInput}
                    onChange={(e) => {
                      setForm({
                        ...form,
                        notesInput: e.target.value,
                      });
                    }}
                    cols={30}
                    rows="5"
                  ></textarea>
                </label>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <label>
                  Critical Account
                  <input type="checkbox" id="criticalCheckBox"></input>
                </label>
              </div>
            </Col>
          </Row>
          <div>
            <button type="submit" id="submitButton" value="Submit">
              Submit
            </button>
            <button type="reset" id="resetbutton" value="Reset">Reset</button>
          </div>
        </form>
        <div class="table-data">
          <table id="list">
            <tr>

              <th>Name</th>
              <th>Email-Id</th>
              <th>Phone-Number</th>
              <th>Contact-Name</th>
              <th>Contact-Email</th>
              <th>Contact-PhoneNumber</th>
              <th>Type</th>
              <th>Category</th>
              <th>Percentage</th>
              <th>Active-From</th>
              <th>Payments-Options</th>
              <th>Notes</th>
              <th>Action</th>
              <th>Remove</th>
            </tr>

            <tbody class="tableData">
              {table.map((contact) => (

                <tr>
                  <td>{contact.userName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>{contact.contactName}</td>
                  <td>{contact.contactEmail}</td>
                  <td>{contact.contactPhoneNumber}</td>
                  <td>{contact.type}</td>
                  <td>{contact.category}</td>
                  <td>{contact.percent}</td>
                  <td>{contact.dateInput}</td>
                  <td>{contact.payments}</td>
                  <td>{contact.notesInput}</td>
                  <td><button class='btn btn-primary' onClick={edit(contact)}>Edit</button></td>
                  <td><button class='btn btn-danger' onClick='deleteRow(" + i + ")'>Delete</button></td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};
export default Table;