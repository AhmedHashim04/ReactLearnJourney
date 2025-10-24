import { useState } from "react"

export default function Form() {
    const [firstName, setF] = useState("");
    const [lastName, setL] = useState("");
    const [email, setE] = useState("");

    console.log(firstName)

    return(
            <div className="FormSignup">
                <form className="signupForm" action="" method="post">
                    <label htmlFor="1"> First Name</label>
                    <input value={firstName} id="1" type="text" placeholder="First Name" required 
                           onChange={(e) => setF(e.target.value)} />

                    <label htmlFor="2"> Last Name</label>
                    <input value={lastName} id="2" type="text" placeholder="Last Name" required 
                           onChange={(e) => setL(e.target.value)} />

                    <label htmlFor="3"> Email</label>
                    <input value={email} id="3" type="email" placeholder="Email" required 
                           onChange={(e) => setE(e.target.value)} />

                    <button type="submit">Sign Up</button>

                </form>

            </div>

        )
}