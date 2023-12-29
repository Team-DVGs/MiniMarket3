import React, {useState, useEffect, useSyncExternalStore} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../store';
import { loginUser } from '../../store/features/Auth/userSlice';
import { setFlagsFromString } from 'v8';

const Login = () => {
  const [formData, setFormData] = useState<{email:string, password: string}>({email:"", password:""})
  const user = useAppSelector(state => state.user);
  const [flag, setFLag] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleChange(event:React.FormEvent) {
    const {name, value} = event.target as HTMLInputElement;
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            // name in bracket turning string to obj property
            [name]: value
        }
    })
  }
  function handleSubmit(event:React.FormEvent){
    event.preventDefault();
    setFLag(true);
    dispatch(loginUser(formData)).then(res => {
      if(res.payload){
        navigate("/");
      }
    });
  }

  // Set document title
  React.useEffect(() => {
    document.title = "Đăng nhập mua sắm online | GreenMart";
  }, [])


  return (
    <div className="login">
      <div className="row">
        <div className="col-0 col-md-6 d-flex">
          <img
            className='align-self-stretch'
            src="https://www.health.com/thmb/obIRA8GcwOYcdIAxUTm_engnJ7A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-1451277246-e535acbd044f41808671167c34d52465.jpg"
            alt={process.env.PUBLIC_URL + "/assets/img/noimg.png"}
          />
        </div>
        <form
          action="javascript:void(0)"
          className="col-12 col-md-6 mt-3 mt-md-0"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <h1>Đăng nhập</h1>
          <p>
            Chưa có tài khoản? <Link to="/dangky">Tạo ở đây</Link>
          </p>
          <input type="email" placeholder="Email" value={formData.email} name='email' onChange={handleChange} />
          <input type="password" placeholder="Mật khẩu" value={formData.password} name='password' onChange={handleChange}/>
          {flag && user.error && !user.loading && <p className='error mx-2 text-danger'>{user.error}</p>}
          <button type="submit" disabled={user.loading || (!formData.email || !formData.password)} style={{opacity: (user.loading || (!formData.email || !formData.password) ) ? ".5" : "1"}} >{user.loading ? "Đăng nhập..." : "Đăng nhập"}</button>
        </form>
      </div>
    </div>
  );
}

export default Login