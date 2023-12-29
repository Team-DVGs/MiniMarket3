import React, { useState } from "react";
import axios from "axios";
import { tenmien } from "../../utils";
import { addProductReview } from "../../store/features/Product/productReviewSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";


interface ReviewFormData {
  rating: number;
  title: string;
  comment: string;
  productId: string
}

const ReviewForm = (props: {
  id: string;
  setAddReview: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 1,
    title: "",
    comment: "",
    productId: props.id,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStarChange = (rating: number) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.data.isLoggedIn) {
      navigate("/dangnhap");
      return;
    }
    dispatch(addProductReview({ ...formData, userId: user.data.id })).then(
      (res) => {
        if (res.payload) {
          alert("Thêm đánh giá thành công!");
          props.setAddReview(false);
        } else {
          alert("Thêm đánh giá không thành công!");
        }
      }
    );
    // try {
    //   const response = await axios.post(tenmien+"/api/sanpham/themdanhgia", formData);
    //   console.log("Review submitted successfully:", response.data);
    // } catch (error) {
    //   console.error("Error submitting review:", error);
    // }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="reviewform border border-secondary rounded-3 p-3 mt-2"
    >
      <div className="mb-3">
        <label htmlFor="stars" className="form-label">
          Đánh giá
        </label>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleStarChange(star)}
              style={{
                cursor: "pointer",
                color: star <= formData.rating ? "gold" : "gray",
              }}
              className="me-1"
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Tiêu đề
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Nội dung tiêu đề..."
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="review" className="form-label">
          Đánh giá
        </label>
        <textarea
          className="form-control"
          id="review"
          rows={4}
          placeholder="Nội dung đánh giá..."
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
        />
      </div>

      <button
        type="submit"
        className="btn"
        style={{ backgroundColor: "#3BB77E", color: "white" }}
      >
        Gửi đánh giá
      </button>
    </form>
  );
};

export default ReviewForm;
