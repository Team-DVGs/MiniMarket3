import React, {useEffect, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../store';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/features/Auth/userSlice';
import { checkLogin } from '../../store/features/Auth/userSlice';
import { addNewOrder } from '../../store/features/Orders/orderSlice';
import { fetchOrderList } from '../../store/features/Orders/orderListSlice';
import BreadCrumbs from '../../components/BreadCrumbs';
import axios from 'axios';
import { event } from 'jquery';

const User = () => {
    const user = useAppSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");

    
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<{
      email: string;
      fullname: string;
      phone:string,
      address: string
    }>({ email: "", fullname: "",phone:"", address: ""  });
    const [flag, setFLag] = useState<boolean>(false);

    function handleChange(event: React.FormEvent) {
      const { name, value } = event.target as HTMLInputElement;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          // name in bracket turning string to obj property
          [name]: value,
        };
      });
    }
    function handleSubmit(event: React.FormEvent) {
      event.preventDefault();
      dispatch(updateUser({id: user.data.id, ...formData})).then((res) => {
        if (res.payload) {
          alert("Cập nhật thành công!");
        }
      });
    }
    function handleSignOut(event:React.FormEvent){
        event.preventDefault();
        /* eslint-disable no-restricted-globals */
        var userConfirm = confirm("Bạn muốn đăng xuất tài khoản");
        if (!userConfirm) return;
        document.cookie =
        "userId" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        dispatch(checkLogin()).then((res) => {
        if (!res.payload) {
          navigate("/dangnhap");
        }
      });
    }
    useEffect(() => {
      if(document.cookie){
        setLoading(true);
        dispatch(checkLogin()).then((res) => {
          if (!res.payload) {
            // changePath();
            navigate('/dangnhap');
          }
        });
        setLoading(false);
      }
      else{
        navigate('/dangnhap');
      }
        
    },[])

    useEffect(() => {
        const { email, fullname, phone, address, img } = user.data;
        setFormData({ email, fullname, phone, address });
        setImageUrl(img || "");
    }, [user.data.isLoggedIn])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
      }
    };
    const handleUpload = async (event: React.FormEvent) => {
      event.preventDefault();
      if (!selectedImage) return;
      const reader = new FileReader();
      reader.readAsDataURL(selectedImage);
      reader.onload = async () => {
        const base64Image = reader.result?.toString();
        if (base64Image) {
          dispatch(updateUser({ img: base64Image, ...user.data })).then(
            (res) => {
              if (res.payload) {
                setImageUrl(base64Image); //  Assuming server returns the image URL
                alert("Cập nhật ảnh đại diện thành công!");
              }else{
                alert("Xảy ra lỗi")
              }
            }
          );
          
        }
      };
    };
  return !loading ? (
    <>
      <BreadCrumbs crumbTitles={["Thông tin tài khoản"]} />
      <div className="payment row user">
        <div className="col-12 col-md-5 payment__shipinfo">
          <div className="payment__ship">
            {/* Image uploader */}
            <h1 className="section-header">Ảnh hồ sơ</h1>
            <div className="imageuploader container my-2">
              <div className="row">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-body">
                      {/* <h5 className="card-title">Upload Profile Image</h5> */}
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control mb-3"
                        onChange={handleImageChange}
                      />
                      <button
                        className="btn btn-primary border-none"
                        onClick={handleUpload}
                        disabled={!selectedImage}
                        type='button'
                        style={{ backgroundColor: "#253D4E", color: "white" }}
                      >
                        Xác nhận
                      </button>
                      {/* Image preview */}
                      <div className="mt-3">
                        <h6>Preview:</h6>
                        <img
                          src={
                            imageUrl
                              ? imageUrl
                              : process.env.PUBLIC_URL + "/assets/img/bg/user.jpg"
                          }
                          className="img-fluid"
                          style={{
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                          }}
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* User Info */}
            <h1 className="section-header">Thông tin cá nhân</h1>
            <form action="" className="d-flex" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Tên tài khoản"
                value={formData.fullname}
                name="fullname"
                onChange={handleChange}
              />
              <input
                type="email"
                disabled
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Số điện thoại"
                value={formData.phone}
                name="phone"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Địa chỉ"
                value={formData.address}
                name="address"
                onChange={handleChange}
              />
              <button
                className="btn-login"
                type="submit"
                disabled={
                  user.loading ||
                  !formData.email ||
                  !formData.fullname ||
                  !formData.phone ||
                  !formData.address
                }
                style={{
                  opacity:
                    user.loading ||
                    !formData.email ||
                    !formData.fullname ||
                    !formData.phone ||
                    !formData.address
                      ? ".5"
                      : "1",
                }}
              >
                {user.loading ? "Cập nhật..." : "Cập nhật"}
              </button>
              <button className=" btn-login" onClick={handleSignOut}>
                <i className="fa-solid fa-chevron-left me-2"></i>
                Đăng xuất
              </button>
            </form>
          </div>
          {/* <div className="payment__shiptype">
            <h1 className="section-header">Điều </h1>
            <p>Thanh toán khi nhận hàng</p>
            <span>Hiện chưa hỗ trợ các hình thức thanh toán khác</span>
          </div>
          <div className="payment__shiptype mt-3">
            <h1 className="section-header">Thời gian nhận hàng</h1>
            <p>
              Thời gian giao hàng dự kiến trong 2 giờ sau khi đặt hàng. Tối đa 4
              tiếng.
            </p>
            <span>
              Thời gian dao động tuỳ thuộc vào thời điểm trong ngày cũng như mật
              độ lưu thông trên đường.
            </span>
          </div> */}
        </div>
        <div className="col-12 col-md-7 payment__info user__orders">
          <Outlet />
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default User