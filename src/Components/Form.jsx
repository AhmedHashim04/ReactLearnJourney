
export default function Form() {
    return(
            <div className="FormSignup">
                <form className="signupForm" action="" method="post">
                    <label htmlFor="1"> First Name</label>
                    <input id="1" type="text" placeholder="First Name" required />
                    <label htmlFor="2"> Last Name</label>
                    <input id="2" type="text" placeholder="Last Name" required />
                    <label htmlFor="3"> Email</label>
                    <input id="3" type="email" placeholder="First Name" required />
                    <button type="submit">Sign Up</button>

                </form>

            </div>

        )
}