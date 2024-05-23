const Newsletter = ()=>{
    return <form className="form">
        <h4 style={{textAlign:"center",marginBottom:"2rem"}}>Our Newsletter</h4>
        {/* name */}
        <div className="form-row">
            <label htmlFor="name" className="form-label">
                name
            </label>
            <input type="text" className="form-input" name="name" id="name" defaultValue="Siphamandla" />
        </div>
        {/* lastName */}
        <div className="form-row">
            <label htmlFor="lastName" className="form-label">
                last name
            </label>
            <input type="text" className="form-input" name="lastName" id="lastName" defaultValue="Bili" />
        </div>
        {/* email */}
        <div className="form-row">
            <label htmlFor="email" className="form-label">
                name
            </label>
            <input type="email" className="form-input" id="email" name="email" defaultValue="test@test.com" />
        </div>
        <button type="submit" className="btn btn-block">submit</button>
    </form>

}

export default Newsletter;