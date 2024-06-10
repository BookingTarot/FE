import React from "react";

export default function AdminHeader() {

    return (
        <div>
            <header className="float-start w-100" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="navbar-brand" to="/">
                            <img alt="logo" src="assets/images/logo.png" style={{ height: "50px" }} />
                        </div>
                        
                    </div>
                </nav>
            </header>
        </div>
    );
}