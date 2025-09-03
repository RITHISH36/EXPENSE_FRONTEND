const Loginform=()=>{
    return(<>
    <div className="login-container">
        <div>
            <form>
                <div className="login-username">
            <label htmlFor="username">ENTER USERNAME</label>
            <input type="text" placeholder="Enter your username" />
            </div>
            <div className="login-password">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" placeholder="enter your password"/>
            </div>
            <div className="login-submit">
                <button type="submit">LOGIN</button>
            </div>
            </form>
        </div>
    </div>
    </>)
}
export default Loginform;