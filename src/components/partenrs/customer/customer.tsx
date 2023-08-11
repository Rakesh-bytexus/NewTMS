import React, { useState } from "react";
import { Nav, NavItem, Navbar, NavbarBrand, TabPane, Table } from "reactstrap";
import { Header, SideBar } from "../../header";
import { MdOutgoingMail } from "react-icons/md";
import { AiOutlineFileExcel, AiOutlinePlus } from "react-icons/ai";
import { PiFilePdfDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import SearchPage from "../../search-page";
import Profile from "../../pofile";
import { TabPage } from "../../driver-page";

const Customer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Navbar
        style={{ border: "1px solid #1B56AE" }}
        color="light"
        className="py-0"
      >
        <Header
          sidebarToggle={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        />
        <NavbarBrand>Customers</NavbarBrand>
        <Nav className="me-auto" navbar>
          <div className="d-flex gap-2">
            <NavItem>Export</NavItem>
            <div className="d-flex justify-content-between gap-2">
              <Link to={"#!"}>
                <PiFilePdfDuotone className="text-danger fs-4" />
              </Link>
              <Link to={"#"}>
                <AiOutlineFileExcel className="text-success fs-4" />
              </Link>
              <Link to={"#!"}>
                <MdOutgoingMail className="fs-4" />
              </Link>
            </div>
          </div>
        </Nav>
        <div className="d-flex align-items-center gap-3">
          <SearchPage />
          <Link className="btn buttonLink" to="/createcustomer">
            <AiOutlinePlus />
            New Customer
          </Link>
          <Profile />
        </div>
      </Navbar>
      <div className="content d-flex">
        <SideBar isSidebarOpen={!isSidebarOpen} />
        <div className="aria-content container-fluid my-1">
          <TabPage tabTitles={["Brokers", "Shippers/Recivers"]}>
            <TabPane tabId={1} className="m-4">
              <Table responsive hover className="table-data text-nowrap">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>address</th>
                    <th>Phone</th>
                    <th>MC</th>
                    <th>Pay-method</th>
                    <th>Credit</th>
                    <th>Avg. DTP</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Otto</td>
                    <td> XYZABC</td>
                    <td>Dont Know </td>
                    <td>987654321</td>
                    <td>Otto@mdo</td>
                    <td>Animal</td>
                    <td>Very Good</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </TabPane>
          </TabPage>
        </div>
      </div>
    </>
  );
};

export default Customer;
