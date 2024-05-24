import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


export const action = async ({ request }) => {
    try {
        const formdata = await request.formData();
        const data = Object.fromEntries(formdata);
        const submitdata = await axios.post("https://www.course-api.com/cocktails-newsletter", data);
        console.log(submitdata)
        toast.success(submitdata.data.msg);
        return redirect("/");
    } catch (error) {
        toast.error(error.response.data.msg);
        return redirect("/newsletter");
    }


}
const Newsletter = () => {
    const me = useNavigation();
    console.log(me)
    return <Form className="form" method="POST">
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>Our Newsletter</h4>
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
        {me.state =="submitting"?<button type="submit" className="btn btn-block" disabled={true} style={{background:"#aba9a9",cursor:"not-allowed"}}>submitting</button>:<button type="submit" className="btn btn-block">submit</button>}
    </Form>

}

export default Newsletter;